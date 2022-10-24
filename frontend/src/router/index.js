import { lazy } from 'react';

export default [
    {
    key: "login",
    path: "login",
    Component: lazy(() => import("../page/authentication/Login")),
    authenticate: false,
    Layout: lazy(() => import('../layouts/blankLayout')),
  },
  {
    key: "register",
    path: "register",
    Component: lazy(() => import("../page/authentication/Register")),
    authenticate: false,
    Layout: lazy(() => import('../layouts/blankLayout')),
  },
  {
    key: "dashboard",
    path: "",
    Component: lazy(() => import("../page/dashboard")),
    authenticate: true,
    Layout: lazy(() => import('../layouts/verticalLayout')),
  },
];