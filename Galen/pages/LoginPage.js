this.LoginPage = $page("Login page", {

        loginButton: "#nav-header-menu > a:nth-child(2)",
        titulo: ".auth-title",
        inputUserNameField: "#user_id",
        login_form: "#login_user_form"
    },

    {


        load: function () {
            this.open("https://www.mercadolibre.com/jms/mlu/lgz/msl/login/H4sIAAAAAAAEAzWMQQ7DIAwE_-JzBHeO_UhEwaGopiBjRKMof6859Di7O3sB1ZQ_u5wNwQF-G-WQBTZo5OWoXPYctSikUc-Cfxxr4tkXFOQO7lpHCeMDVVpXh6eOOkpV4SXSurN2zmkKcvCxUn4ymlCLGaeFe1Ohyy7swxuc8MD7B2I0_jKcAAAA/user");
            return this.waitForIt();
        }


    });