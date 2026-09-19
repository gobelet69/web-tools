# Contributing

Adding a new tool to the Web Tools collection is extremely simple.

## Architectural Principles
1. **Native browser API first.**
2. **Small lazy-loaded dependency second.**
3. **Large dependency only when it unlocks functionality that cannot reasonably be implemented natively.**

## How to add a tool

1. **Fork/clone the repository.**
2. **Create a branch.**
3. **Add the HTML tool:**
   Create a new file in the appropriate directory (e.g., `text/my-new-tool.html`).
   - Use semantic native HTML.
   - Include `<script src="../js/tools.js"></script>` and `<script src="../js/common.js"></script>`.
   - Call `Common.initTool('your-tool-id');` at the start of your script.
4. **Add the catalog entry:**
   Open `js/tools.js` and add/update your tool object in the `TOOLS` array with `ready: true`.
5. **Keep processing local:** Avoid uploading files to external APIs.
6. **Add/update tests:** Ensure functionality works correctly.
7. **Verify no heavy dependency is loaded globally:** Check network tabs on the homepage.
8. **Open a Pull Request.**
