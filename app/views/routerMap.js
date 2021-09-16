//routerMap.js

import Root from "./Root";
import User from "./User";
import Mentor from "./mentor";
import Login from "./Login";

export default [
    { path: "/", name: "Login", component: Login },
    { path: "/login", name: "Login", component: Login },
    { path: "/root", name: "Root", component: Root },
    { path: "/mentor", name: "mentor", component: Mentor },
    { path: "/user", name: "user", component: User }
]