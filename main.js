import { argv } from "node:process";
import { crawlPage } from "./crawl.js";

async function main() {
    const argLen = argv.length;
    if (argLen === 3) {
        console.log("Crawling..........");
        console.log(await crawlPage(argv[2]));
    } else if (argLen < 3) {
        console.log("No argument is given!!");
        return;
    } else if (argLen > 3) {
        console.log("Only one argument is required!!");
        return;
    }
}

main();
