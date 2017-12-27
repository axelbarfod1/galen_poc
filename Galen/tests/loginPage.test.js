load("../../Galen/pages/LoginPage.js");

test('Tests de la login page!',function () {
    var driver = createDriver();
    var loginPage = new LoginPage(driver).load();


    logged('Checkeando la home page ', function () {
        checkLayout(driver, "specs/Login/login.gspec", ["desktop"]);
    });
});