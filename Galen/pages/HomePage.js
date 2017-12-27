this.HomePage = $page("Home page", {
    loginButton: "#nav-header-menu > a:nth-child(2)",

    clickLogin: function () {
        this.loginButton.click();
    }

});