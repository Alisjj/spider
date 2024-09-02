function printReport(pages) {
    console.log("Report is starting ........");
    const sortedp = Object.entries(pages).sort((a, b) => b[1] - a[1]);

    sortedp.forEach((url, count) => {
        console.log(`Found ${count} internal links to ${url}`);
    });
}

export { printReport };
