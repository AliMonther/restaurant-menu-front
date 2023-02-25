import welcomePage from "../pages/welcome/welcome.vue";
import registerPage from "../pages/register/register.vue";
import loginPage from "../pages/login/login.vue";
import menuDetails from "../pages/menu-details/menu-details.vue";

export default [

    {
        path: "/",
        name: "welcome",
        component : welcomePage,
    },
    {
        path: "/register",
        name: "register",
        component : registerPage,
    },
    {
        path: "/login",
        name: "login",
        component : loginPage,
    },
    {
        path: "/menu",
        name: "menu",
        component : menuDetails,
    },

]





