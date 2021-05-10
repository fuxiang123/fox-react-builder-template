describe("App.js", () => {
  it("App.js has no error", () => {
    document.body.innerHTML = '<div id="root"></div>';
    require("../src/index");
  });
});
