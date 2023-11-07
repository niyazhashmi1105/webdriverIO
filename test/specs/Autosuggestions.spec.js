//const { browser, $, $$ } = require("@wdio/globals");

describe("Autosuggestion handling", () => {
  it("Autosuggestion- select Value", async () => {
    
    await browser.url("https://www.google.com/");
    //await(await $("//button[text()='Stay signed out']")).click()
    const input = await $("#APjFqb");
    await input.click();
    await input.setValue("webdriverIO");

    const values = await $$("//ul[@role='listbox']//li//div[@role='option']");
    console.log("Autosuggestion length ", values.length);

    for (let i = 0; i < values.length; i++) {
      console.log("Values: ", await values[i].getText());

      if ((await values[i].getText()) === "webdriverio tutorial") {
        await values[i].click();
        await browser.pause(3000);
        break;
      }
    }
  });
});
