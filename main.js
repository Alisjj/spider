import { getURLsFromHtml } from "./crawl";

console.log(
    getURLsFromHtml(
        "<html> <body> <a href='https://blog.boot.dev'><span>Go to Boot.dev</span></a> </body> </html>",
        "http://blog.boot.dev/path"
    )
);
