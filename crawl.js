function normarlizeUrl(url) {
    const obj = new URL(url);
    return `${obj.host}/${obj.pathname.replace(/\//g, "")}`;
}

export { normarlizeUrl };
