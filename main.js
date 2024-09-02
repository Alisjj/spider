import { argv } from "node:process";

function main() {
    const argLen = argv.length;
    if (argLen === 3) {
        console.log("Crawling..........");
    } else if (argLen < 3) {
        console.log("No argument is given!!");
        return;
    } else if (argLen > 3) {
        console.log("Only one argument is required!!");
        return;
    }
}

main();
