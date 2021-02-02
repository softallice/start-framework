const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "Home", component: () => import("pages/Index.vue") },
      {
        path: "/register",
        name: "Register",
        component: () => import("pages/Register.vue")
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("pages/Login.vue")
      },
      {
        path: "/verify",
        name: "Verify",
        component: () => import("pages/Verify.vue")
      },
      {
        path: "/account",
        name: "Account",
        component: () => import("pages/Account.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () => import("pages/ForgotPassword.vue")
      },
      {
        path: "/reset-password",
        name: "ResetPassword",
        component: () => import("pages/ResetPassword.vue")
      },
      {path: '/Dashboard', component: () => import('pages/Dashboard.vue')},
      {path: '/Dashboard2', component: () => import('pages/Dashboard2.vue')},
      {path: '/Profile', component: () => import('pages/UserProfile.vue')},
      {path: '/Map', component: () => import('pages/Map.vue')},
      {path: '/MapMarker', component: () => import('pages/MapMarker.vue')},
      {path: '/StreetView', component: () => import('pages/StreetView.vue')},
      {path: '/TreeTable', component: () => import('pages/TreeTable.vue')},
      {path: '/Charts', component: () => import('pages/Charts.vue')},
      {path: '/Cards', component: () => import('pages/Cards.vue')},
      {path: '/Tables', component: () => import('pages/Tables.vue')},
      {path: '/Contact', component: () => import('pages/Contact.vue')},
      {path: '/Checkout', component: () => import('pages/Checkout.vue')},
      {path: '/Calendar', component: () => import('pages/Calendar.vue')},
      {path: '/Pagination', component: () => import('pages/Pagination.vue')},
      {path: '/Taskboard', component: () => import('pages/TaskBoard.vue')},
      {path: '/Ecommerce', component: () => import('pages/ProductCatalogues.vue')},
      {path: '/Test', component: () => import('pages/Test.vue')},
    ]
  },
  {
    path: '/Lock',
    component: () => import('pages/LockScreen.vue')
  },
  {
    path: '/Maintenance',
    component: () => import('pages/Maintenance.vue')
  },
  {
    path: '/Pricing',
    component: () => import('pages/Pricing.vue')
  },
  {
    path: '/Login-1',
    component: () => import('pages/Login-1.vue')
  },
  {
    path: '/Mail',
    component: () => import('layouts/Mail.vue')
  },
  {
    path: '/Lock-2',
    component: () => import('pages/LockScreen-2.vue')
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "AdminHome",
        component: () => import("pages/admin/Index.vue"),
        meta: { requiresAuth: true, requiresAdmin: true }
        // meta: { requiresAuth: true }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
