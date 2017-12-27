load("../../Galen/pages/HomePage.js");

test("Valida la home page de mercadolibre", function () {
    var driver = createDriver("http://www.mercadolibre.com.uy", "1280x1024", "chrome");

    logged('Checkeando la home page ', function () {
        checkLayout(driver, "specs/Home/home.gspec", ["desktop"]);
    });

    logged('Hacer el login', function () {
        var homePage = new HomePage(driver);
        homePage.clickLogin();
        //var loginPage = new LoginPage(driver).waitForIt();


    });

    driver.close();
});