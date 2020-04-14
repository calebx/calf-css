import "./scss/index.scss";
import "./addition.scss";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre code").forEach((block: Element) => {
        hljs.highlightBlock(block);
    });
});
