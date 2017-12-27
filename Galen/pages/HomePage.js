
this.HomePage = $page("Home page", {
   loginButton: "#nav-header-menu > a:nth-child(2)",

    goToLoginPage: goToLoginFunction ("Goes to login", function(){
        this.loginButton.click();
    })
});