'use strict';

const Common = {
  injectMinimalCSS() {
    if (document.getElementById('minimal-css')) return;
    const style = document.createElement('style');
    style.id = 'minimal-css';
    style.textContent = `
      body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; max-width: 900px; margin: 0 auto; padding: 1.5rem; }
      fieldset { margin-bottom: 1.5rem; border: 1px solid #ccc; border-radius: 4px; padding: 1.2rem; }
      legend { font-weight: bold; padding: 0 0.5rem; }
      canvas { max-width: 100%; border: 1px dashed #999; cursor: crosshair; display: block; margin-top: 1rem; }
      input, button, select, textarea { font-family: inherit; margin: 0.2rem 0; }
      textarea { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
      button { cursor: pointer; padding: 0.3rem 0.8rem; }
      .drop-zone { border: 2px dashed #999; padding: 2rem; text-align: center; background: #f9f9f9; border-radius: 4px; cursor: pointer; }
      .drop-zone:hover { background: #f0f0f0; }
    `;
    document.head.appendChild(style);
  },

  escapeHtml(unsafe) {
    if (unsafe == null) return '';
    return String(unsafe)
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  },
  getTools() {
    return window.TOOLS || [];
  },

  getTool(id) {
    return this.getTools().find(t => t.id === id);
  },

  initTool(id) {
    this.injectMinimalCSS();
    this.trackRecent(id);
    this.setupFavButton(id);
  },

  // ── Recent Tools ──
  getRecent() {
    try {
      return JSON.parse(localStorage.getItem('recent_tools') || '[]');
    } catch {
      return [];
    }
  },

  trackRecent(id) {
    if (!id) return;
    let recent = this.getRecent();
    recent = recent.filter(tId => tId !== id);
    recent.unshift(id);
    if (recent.length > 10) recent.pop();
    try {
      localStorage.setItem('recent_tools', JSON.stringify(recent));
    } catch (e) {
      console.warn('LocalStorage not available');
    }
  },

  // ── Favorites ──
  getFavs() {
    try {
      return JSON.parse(localStorage.getItem('fav_tools') || '[]');
    } catch {
      return [];
    }
  },

  isFav(id) {
    return this.getFavs().includes(id);
  },

  toggleFav(id) {
    if (!id) return false;
    let favs = this.getFavs();
    const isNowFav = !favs.includes(id);
    if (isNowFav) {
      favs.push(id);
    } else {
      favs = favs.filter(tId => tId !== id);
    }
    try {
      localStorage.setItem('fav_tools', JSON.stringify(favs));
    } catch (e) {
      console.warn('LocalStorage not available');
    }
    return isNowFav;
  },

  setupFavButton(id) {
    const btn = document.getElementById('fav-btn');
    if (!btn) return;
    const updateBtn = () => {
      btn.textContent = this.isFav(id) ? '★ Favorited' : '☆ Add to Favorites';
    };
    updateBtn();
    btn.addEventListener('click', () => {
      this.toggleFav(id);
      updateBtn();
    });
  },

  // ── File Helpers ──
  formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  },

  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  },

  setupDropZone(dropZoneId, fileInputId, onFile) {
    const dropZone = document.getElementById(dropZoneId);
    const fileInput = document.getElementById(fileInputId);
    
    if (!dropZone || !fileInput) return;

    dropZone.classList.add('drop-zone');

    const handleFiles = (files) => {
      if (files && files.length > 0) {
        onFile(files[0]);
      }
    };

    dropZone.addEventListener('click', (e) => {
      if (e.target !== fileInput) {
        fileInput.click();
      }
    });

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.style.borderStyle = 'solid';
      dropZone.style.background = '#eee';
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.style.borderStyle = 'dashed';
      dropZone.style.background = '';
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.style.borderStyle = 'dashed';
      dropZone.style.background = '';
      handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });
  }
};

// Auto-inject CSS on pages that don't call initTool (like index.html)
Common.injectMinimalCSS();
