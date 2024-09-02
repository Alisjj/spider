import { normarlizeUrl, getURLsFromHtml } from "./crawl.js";
import { test, expect } from "@jest/globals";

test("normalizeURL protocol", () => {
    const input = "https://blog.boot.dev/path";
    const actual = normarlizeUrl(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test("normalizeURL slash", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = normarlizeUrl(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
    const input = "https://BLOG.boot.dev/path";
    const actual = normarlizeUrl(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test("normalizeURL http", () => {
    const input = "http://BLOG.boot.dev/path";
    const actual = normarlizeUrl(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test("getURLsFromHTML absolute", () => {
    const inputURL = "https://blog.boot.dev";
    const inputBody =
        '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>';
    const actual = getURLsFromHtml(inputBody, inputURL);
    const expected = ["https://blog.boot.dev/"];
    expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
    const inputURL = "https://blog.boot.dev";
    const inputBody =
        '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>';
    const actual = getURLsFromHtml(inputBody, inputURL);
    const expected = ["https://blog.boot.dev/path/one"];
    expect(actual).toEqual(expected);
});

test("getURLsFromHTML both", () => {
    const inputURL = "https://blog.boot.dev";
    const inputBody =
        '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>';
    const actual = getURLsFromHtml(inputBody, inputURL);
    const expected = [
        "https://blog.boot.dev/path/one",
        "https://other.com/path/one",
    ];
    expect(actual).toEqual(expected);
});
