const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", 
        name: "Home", 
        component: () => import("pages/Index.vue") },
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
        path: '/Chat', 
        component: () => import('pages/chat/Chat.vue'),
        meta: { requiresAuth: true }
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
      {
        path: '/Dashboard', 
        component: () => import('pages/Dashboard.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Dashboard2', 
        component: () => import('pages/Dashboard2.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Profile', 
        component: () => import('pages/UserProfile.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Map', 
        component: () => import('pages/Map.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/MapMarker', 
        component: () => import('pages/MapMarker.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/StreetView', 
        component: () => import('pages/StreetView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/TreeTable', 
        component: () => import('pages/TreeTable.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Charts', 
        component: () => import('pages/Charts.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Cards', 
        component: () => import('pages/Cards.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Tables', 
        component: () => import('pages/Tables.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Contact', 
        component: () => import('pages/Contact.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Checkout', 
        component: () => import('pages/Checkout.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Calendar', 
        component: () => import('pages/Calendar.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Pagination', 
        component: () => import('pages/Pagination.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Taskboard', 
        component: () => import('pages/TaskBoard.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Ecommerce', 
        component: () => import('pages/ProductCatalogues.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Test', 
        component: () => import('pages/Test.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Vaccination', 
        component: () => import('pages/vaccination/Vaccination.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Credential', 
        component: () => import('pages/credential/Credential.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Generator', 
        component: () => import('pages/qrcode/Generator.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/QrReader', 
        component: () => import('pages/qrcode/QrReader.vue'),
        meta: { requiresAuth: true }
      },
    ]
  },
  {
    path: "/Mobile",
    component: () => import("layouts/AppMainLayout.vue"),
    children: [
      {
        path: "",
        name: "MobileHome",
        icon: 'home',
        component: () => import("pages/vaccination/Vaccination.vue"),
        meta: { requiresPin: true }
        // meta: { requiresAuth: true, requiresAdmin: true }
        // meta: { requiresAuth: true }
        
      },
      {
        path: "/Mobile/PinCheck",
        name: "PinCheck",
        component: () => import("pages/PinCheck.vue")
      },
      {
        path: "/Service",
        name: "Service",
        icon: 'dashboard',
        component: () => import("pages/credential/Credential.vue"),
        meta: { requiresPin: true }
      },
      {
        path: "/MobileIndex",
        name: "MobileIndex",
        icon: 'nights_stay',
        component: () => import("pages/MobileIndex.vue"),
        meta: { requiresPin: true }
      },
      {
        path: "/More",
        name: "More",
        icon: 'more_horiz',
        component: () => import("pages/credential/Credential.vue"),
        meta: { requiresPin: true }
      },
      {
        path: '/Mobile/MQrReader', 
        name: "MQrReader",
        component: () => import('pages/mobile/MQrReader.vue'),
        meta: { requiresPin: true }
      },
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
    path: '/Consent',
    component: () => import('pages/consent/Consent.vue')
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
