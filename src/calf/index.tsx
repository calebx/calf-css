import "./scss/index.scss";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre code").forEach((block: Element) => {
        hljs.highlightBlock(block);
    });
});
