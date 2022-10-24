const { lazy } = require("react");

const Router = [
  {
    key: "dashboard",
    path: "",
    Component: lazy(() => import("../../page/dashboard")),
    authenticate: true,
    Layout: lazy(() => import('../../layouts/verticalLayout')),
  },
];

export default Router;
