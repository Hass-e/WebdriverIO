describe("RecFirstTest", () => {
  it("tests RecFirstTest", async () => {
    await browser.setWindowSize(1035, 729)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("pierce/#username").doubleClick()
    await browser.$("pierce/#username").click()
    await browser.$("pierce/#username").setValue("tomsmith")
    await browser.$("pierce/#password").doubleClick()
    await browser.$("pierce/#password").click()
    await browser.$("pierce/#password").setValue("S")
    await browser.$("pierce/#password").setValue("Super")
    await browser.$("pierce/#password").setValue("SuperS")
    await browser.$("pierce/#password").setValue("SuperSecret")
    await browser.$("pierce/#password").setValue("SuperSecretP")
    await browser.$("pierce/#password").setValue("SuperSecretPassword!")
    await browser.$("pierce/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
  });
});