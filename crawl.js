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

async function crawlPage(currentURL) {
    try {
        const response = await fetch(currentURL, {
            method: "GET",
            mode: "cors",
            headers: {},
        });

        if ((await response.status) >= 400 && (await response.status) < 500) {
            console.log("Error: Invalid URL");
            return;
        }
        if (await !response.headers.get("content-type").includes("text/html")) {
            console.log("Error: Content is not HTMl");
            return;
        }
        console.log(await response.text());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

export { normarlizeUrl, getURLsFromHtml, crawlPage };
