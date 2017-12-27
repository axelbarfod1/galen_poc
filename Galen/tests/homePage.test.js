load("../../Galen/pages/HomePage.js");

test("Valida la home page de mercadolibre", function () {
    //var driver = createDriver("http://www.mercadolibre.com.uy", "1280x1024", "chrome");
    var driver = createDriver();
    var homePage = new HomePage(driver).load();
    logged('Checkeando la home page ', function () {
        checkLayout(driver, "specs/Home/home.gspec", ["desktop"]);
    });

    logged('Ir al login', function () {

        homePage.clickLogin();

        homePage.inputUserNameField.waitUntilExists("20s");
        //var loginPage = new LoginPage(driver).waitForIt();
        checkLayout(driver, "specs/Login/login.gspec", ["desktop"])

    });

    driver.close();
});