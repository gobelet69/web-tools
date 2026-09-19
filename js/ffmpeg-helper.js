'use strict';
const FFmpegHelper = {
  ffmpeg: null,
  async load(onProgress) {
    if (this.ffmpeg) return this.ffmpeg;
    if (typeof SharedArrayBuffer === 'undefined') {
      throw new Error("SharedArrayBuffer is not available. Please ensure your server sends COOP/COEP headers, or you are not in a restricted environment.");
    }
    const { FFmpeg } = window.FFmpegWASM;
    const ffmpeg = new FFmpeg();
    ffmpeg.on('progress', ({ progress, time }) => {
      if(onProgress) onProgress(progress, time);
    });
    await ffmpeg.load({
      coreURL: '../vendor/ffmpeg/ffmpeg-core.js',
      wasmURL: '../vendor/ffmpeg/ffmpeg-core.wasm'
    });
    this.ffmpeg = ffmpeg;
    return ffmpeg;
  },
  async write(file, name) {
    const { fetchFile } = window.FFmpegUtil;
    await this.ffmpeg.writeFile(name, await fetchFile(file));
  },
  async read(name) {
    return await this.ffmpeg.readFile(name);
  },
  async cleanup(names) {
    for (const name of names) {
      try { await this.ffmpeg.deleteFile(name); } catch(e){}
    }
  }
};
