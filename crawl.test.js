import { test, expect } from "@jest/globals";
import { normarlizeUrl } from "./crawl";

test("", () => {
    expect(normarlizeUrl("https://blog.boot.dev/path/")).toBe(
        "blog.boot.dev/path"
    );
    expect(normarlizeUrl("https://blog.boot.dev/path")).toBe(
        "blog.boot.dev/path"
    );
    expect(normarlizeUrl("http://blog.boot.dev/path/")).toBe(
        "blog.boot.dev/path"
    );
    expect(normarlizeUrl("http://blog.boot.dev/path")).toBe(
        "blog.boot.dev/path"
    );
});
