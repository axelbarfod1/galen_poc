test("Valida la home page de mercadolibre", function (){
    var driver = createDriver("http://www.mercadolibre.com.uy", "1280x1024","chrome");

    checkLayout(driver,"specs/Home/home.gspec", ["desktop"]);
    driver.close();
});