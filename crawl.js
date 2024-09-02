import { JSDOM } from "jsdom";

function getURLsFromHtml(htmlBody, baseURL) {
    const url = [];
    const body = new JSDOM(htmlBody);
    const anchors = body.window.document.querySelectorAll("a");
    for (const anchor of anchors) {
        if (anchor.getAttribute("href")) {
            const href = new URL(anchor.href, baseURL);
            url.push(href.href);
        }
    }
    return url;
}

function normarlizeUrl(url) {
    const obj = new URL(url);
    return `${obj.host}/${obj.pathname.replace(/\//g, "")}`;
}

export { normarlizeUrl, getURLsFromHtml };
