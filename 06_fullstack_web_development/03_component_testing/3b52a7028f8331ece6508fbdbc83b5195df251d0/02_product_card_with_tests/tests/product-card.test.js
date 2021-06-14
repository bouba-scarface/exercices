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
  test("product name", async () => {
    expect.assertions(1);
    await goto("http://localhost:8080/");

    await waitFor("The Legend Of Zelda: Breath of the Wild");
    expect(await text("The Legend Of Zelda: Breath of the Wild").exists()).toBeTruthy();
  });
});
