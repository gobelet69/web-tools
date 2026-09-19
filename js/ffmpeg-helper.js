'use strict';
const FFmpegHelper = {
  ffmpeg: null,
  async load(onProgress) {
    if (this.ffmpeg) return this.ffmpeg;
    if (typeof SharedArrayBuffer === 'undefined') {
      throw new Error("SharedArrayBuffer is not available. Please ensure your server sends COOP/COEP headers, or you are not in a restricted environment.");
    }
    const { createFFmpeg } = FFmpeg;
    const ffmpeg = createFFmpeg({
      corePath: '../vendor/ffmpeg/ffmpeg-core.js',
      log: false
    });
    ffmpeg.setProgress(({ ratio }) => {
      if(onProgress) onProgress(ratio, null);
    });
    await ffmpeg.load();
    
    // Compatibility layer for v0.12 API calls in the tools
    ffmpeg.exec = async (args) => {
      await ffmpeg.run(...args);
    };
    
    this.ffmpeg = ffmpeg;
    return ffmpeg;
  },
  async write(file, name) {
    const { fetchFile } = FFmpeg;
    this.ffmpeg.FS('writeFile', name, await fetchFile(file));
  },
  async read(name) {
    return this.ffmpeg.FS('readFile', name);
  },
  async cleanup(names) {
    for (const name of names) {
      try { this.ffmpeg.FS('unlink', name); } catch(e){}
    }
  }
};