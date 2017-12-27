this.HomePage = $page("Home page", {
    loginButton: "#nav-header-menu > a:nth-child(2)"},

    {
    inputUserNameField: "#user_id",

    load: function(){
        this.open("http://www.mercadolibre.com.uy");
        return this.waitForIt();
    },

    clickLogin: function () {
        this.loginButton.click();
    }

});