# Dependencies

This project strictly limits dependencies to ensure blazing fast load times and long-term maintainability.

## Native APIs
Most tools (80 out of 104) use zero external dependencies, relying on native Web APIs:
- `Canvas API` for Image resizing, cropping, and conversion.
- `Web Crypto API` for Hash and Password generation.
- `AudioContext` and `HTMLVideoElement` for native media parsing.
- `BarcodeDetector` for QR code reading.
- Native HTML elements for the interface.

## External Libraries (Lazy-Loaded)

### pdf-lib (v1.17.1)
- **Size**: ~512 KB (minified).
- **Utility**: PDF structural manipulation (Merge, Split, Reorder, Generate).
- **Pages**: `/pdf/merge.html`, `/pdf/split.html`, `/pdf/reorder.html`, `/pdf/images-to-pdf.html`, `/pdf/rotate.html`, `/pdf/metadata.html`
- **Why**: Native Web APIs cannot parse PDF binary structures.

### PDF.js (v3.11.174)
- **Size**: ~312 KB (core) + ~1.06 MB (worker).
- **Utility**: Render PDFs to images and extract text.
- **Pages**: `/pdf/to-images.html`, `/pdf/extract-text.html`
- **Why**: `pdf-lib` cannot rasterize or parse raw text layouts; PDF.js is the required Mozilla standard.

### FFmpeg WASM (v0.12.x)
- **Size**: ~112 KB (JS wrapper) + ~30.2 MB (WASM payload).
- **Utility**: Complex audio and video transformations natively.
- **Pages**: `/audio/*.html` and `/video/*.html` (excluding simple info/frame extractors).
- **Why**: Web APIs cannot natively multiplex or transcode complex media containers.

### qrious (v4.0.2)
- **Size**: ~17 KB (minified).
- **Utility**: Generate QR Codes.
- **Pages**: `/qr/text.html`, `/qr/url.html`, `/qr/wifi.html`, `/qr/email.html`, `/qr/phone.html`
- **Why**: Native Web APIs do not provide a 2D barcode generator.

### exif-js
- **Size**: ~14 KB.
- **Utility**: Image EXIF metadata parsing.
- **Pages**: `/image/metadata.html`
- **Why**: Parsing EXIF from raw image binary data efficiently without heavy canvas operations requires a specific parser.
