import { openBrowser, closeBrowser, goto, text, click, waitFor } from "taiko";
import "regenerator-runtime/runtime";

describe("Verify comportement and content of my page", () => {
  beforeAll(async () => {
    await openBrowser({
      args: [
        "--window-size=1280,800",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-first-run",
        "--no-sandbox",
        "--no-zygote",
      ],
      headless: true,
    });
  });

  afterAll(async () => {
    await closeBrowser();
  });
  test("check that when launching the page, the paragraph ", async () => {
    expect.assertions(1);
    await goto("http://localhost:8080/");

    await waitFor("This is my text");
    expect(await text("This is my text").exists()).toBeTruthy();
  });
  test("check that the paragraph is no longer there", async () => {
    expect.assertions(1);
    await goto("http://localhost:8080/");

    await click("Hide content");
    await waitFor("");
    expect(await text("").exists()).toBeTruthy();
  });
  test("check that the paragraph is there again", async () => {
    expect.assertions(2);
    await goto("http://localhost:8080/");

    await click("Hide content");
    await waitFor("");
    expect(await text("").exists()).toBeTruthy();

    await click("Reveal content");
    await waitFor("This is my text");
    expect(await text("This is my text").exists()).toBeTruthy();
  });
});
