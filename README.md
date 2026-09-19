# Web Tools

A lightweight, privacy-first collection of browser-based everyday tools.

This project contains exactly 104 lightweight tools for:
- Images
- PDF
- Audio
- Video
- Text
- Developer utilities
- Networking
- Security
- QR codes
- Dates and time
- Numbers and conversions
- Colors
- Files
- Generators

## Live Site

**Live site:** [https://tools.111iridescence.org](https://tools.111iridescence.org)

## Philosophy

- **Static website:** No backend processing.
- **Native HTML & Vanilla JS:** No React, Vue, or build pipelines.
- **Minimal Functional CSS:** Only structural styling where absolutely necessary.
- **Privacy-first:** Files are processed locally in your browser.
- **Lazy-loaded dependencies:** Heavy libraries (FFmpeg, PDF.js) only load when their specific tools are opened.
- **Blazing fast homepage:** The main catalog loads instantly.

## Architecture

```text
Homepage
  -> HTML
  -> tools.js (catalog)
  -> common.js (shared utilities)

Individual tools
  -> native Web APIs whenever possible
  -> lazy-loaded specialized libraries only when required
```

**Heavy dependencies (Lazy-loaded):**
- `pdf-lib`: For PDF structural manipulation.
- `PDF.js`: For PDF rendering and text extraction.
- `qrious`: For QR code generation.
- `exif-js`: For image metadata reading.
- `FFmpeg WASM`: For audio/video processing.

*(Note: FFmpeg and PDF.js are NEVER loaded on the homepage).*

## Privacy
Files are processed locally in the user's browser whenever technically possible. The application **does not** upload user files to an application backend.

## Performance
- **Homepage request count:** 3
- **Homepage transferred size:** ~8.5 KB (compressed)
- **Homepage uncompressed size:** ~29 KB

## Running locally

You can run the project using any static server. For example:
```bash
python3 -m http.server 8000
```
*Note: Advanced Audio and Video tools utilizing FFmpeg WASM require `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` headers to enable `SharedArrayBuffer` for multithreading. A basic Python server will fallback to a single-thread mode or fail if the browser enforces strict isolation.*

## Deployment
The production instance is deployed on **Cloudflare Pages**.
Production URL: [https://tools.111iridescence.org](https://tools.111iridescence.org)

## Browser Support
- **Modern Browsers Required:** For APIs like `WebCrypto`.
- **EyeDropper API:** Only supported on desktop Chromium browsers (graceful fallback provided).
- **BarcodeDetector API:** Supported natively in Chrome/Edge/Android (graceful fallback provided).
- **SharedArrayBuffer:** Required for multithreaded FFmpeg. Ensured via COOP/COEP headers in production.

## Dependencies

| Dependency | Purpose | Loaded when |
| --- | --- | --- |
| `pdf-lib` | PDF structural manipulation | PDF merge/split/reorder tools |
| `PDF.js` | PDF rendering / text extraction | Advanced PDF tools only |
| `qrious` | QR generation | QR generator pages |
| `exif-js` | Metadata parsing | Image metadata viewer |
| `FFmpeg WASM` | Audio/video processing | Audio/Video processing pages only |

## Development
To add a new tool:
1. Create the HTML file using the existing template structure.
2. Add the tool to the `TOOLS` array in `js/tools.js` with `ready: true`.

## Security
- **No `eval()`** is used.
- Local processing ensures files remain on your device.
- Untrusted metadata/text is rendered safely escaping HTML to prevent XSS.
- However, files processed should still be treated as untrusted input.

## License
MIT License.
