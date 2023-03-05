export const routes = {
  home: {
    route: "/home",
    navigate: () => "/home",
  },
  notFound: {
    route: "/not-found",
    navigate: () => "/not-found",
  },
  login: {
    route: "/login",
    navigate: () => "/login",
  },
  fastRegister: {
    route: "/fast-register",
    navigate: (joinBy = "google") => `/fast-register?joinBy=${joinBy}`,
  },
  register: {
    route: "/register",
    navigate: () => "/register",
  },
  verify: {
    route: "/verify/:subject",
    navigate: (subject = "email") => `/verify/${subject}`,
  },
  forgotPassword: {
    route: "/password/forgot",
    navigate: () => "/password/forgot",
  },
  changePassword: {
    route: "/password/change",
    navigate: () => "/password/change",
  },
  resetPassword: {
    route: "/password/reset",
    navigate: (emailOrPhone) => `/password/reset?emailOrPhone=${emailOrPhone}`,
  },
  resetPasswordSuccess: {
    route: "/continue",
    navigate: () => "/continue",
  },
  rentCars: {
    route: "/cars/rent",
    navigate: (searchTerm = "مرسيدس") => `/cars/rent?term=${searchTerm}`,
  },
  rentCarDetails: {
    route: "/cars/rent/:carId/details",
    navigate: (carId = "invalid-id") => `/cars/rent/${carId}/details`,
  },
  purchaseCars: {
    route: "/cars/purchase",
    navigate: () => "/cars/purchase",
  },
  recentlyArrivedPurchaseCars: {
    route: "/cars/purchase/recent",
    navigate: (searchTerm = "مرسيدس") =>
      `/cars/purchase/recent?term=${searchTerm}`,
  },
  latestPurchaseCarModels: {
    route: "/cars/purchase/latest",
    navigate: (searchTerm = "مرسيدس") =>
      `/cars/purchase/latest?term=${searchTerm}`,
  },
  bestPurchaseCarSellers: {
    route: "/cars/purchase/best",
    navigate: (searchTerm = "مرسيدس") =>
      `/cars/purchase/best?term=${searchTerm}`,
  },
  purchaseCarDetails: {
    route: "/cars/purchase/:carId/details",
    navigate: (carId = "invalid-id") => `/cars/purchase/${carId}/details`,
  },
  popularBrands: {
    route: "/brands/popular",
    navigate: () => "/brands/popular",
  },
  addRentCar: {
    route: "/cars/rent/add",
    navigate: () => "/cars/rent/add",
  },
  addPurchaseCar: {
    route: "/cars/purchase/add",
    navigate: () => "/cars/purchase/add",
  },
  myFavorites: {
    route: "/favorites/my",
    navigate: () => "/favorites/my",
  },
  myOrders: {
    route: "/orders/my",
    navigate: () => "/orders/my",
  },
  completeOrder: {
    route: "/orders/:orderId/complete",
    navigate: (orderId = "1") => `/orders/${orderId}/complete`,
  },
  personalInfo: {
    route: "/profile/info",
    navigate: () => `/profile/info`,
  },
  salesPosts: {
    route: "/posts/sales",
    navigate: () => `/posts/sales`,
  },
  rentalPosts: {
    route: "/posts/rental",
    navigate: () => `/posts/rental`,
  },
  changePassword: {
    route: "/password/change",
    navigate: () => `/password/change`,
  },
  myReceivedOrders: {
    route: "/orders/received",
    navigate: () => "/orders/received",
  },
  alerts: {
    route: "/alerts/my",
    navigate: () => "/alerts/my",
  },
  myTransactions: {
    route: "/transactions/my",
    navigate: () => "/transactions/my",
  },
  // SECRETARY PAGES
  secretaryMain: {
    route: "/secretary/main",
    navigate: () => "/secretary/main",
  },
  secretaryPendingRentalPosts: {
    route: "/secretary/cars/rent/pending",
    navigate: () => "/secretary/cars/rent/pending",
  },
  secretaryAllRentCars: {
    route: "/secretary/cars/rent/all",
    navigate: () => "/secretary/cars/rent/all",
  },
  secretaryAllPurchaseCars: {
    route: "/secretary/cars/purchase/all",
    navigate: () => "/secretary/cars/purchase/all",
  },
  secretaryAllOfficesOrders: {
    route: "/secretary/orders/all",
    navigate: () => "/secretary/orders/all",
  },
  secretaryAllBrands: {
    route: "/secretary/brands/all",
    navigate: () => "/secretary/brands/all",
  },
  secretarySearchUsers: {
    route: "/secretary/user/:emailOrPhone",
    navigate: (emailOrPhone = "*") => `/secretary/user/${emailOrPhone}`,
  },
  secretarySearchOffices: {
    route: "/secretary/office/:emailOrPhone",
    navigate: (emailOrPhone = "*") => `/secretary/office/${emailOrPhone}`,
  },
  secretarySendAlert: {
    route: "/secretary/alert/send",
    navigate: () => "/secretary/alert/send",
  },
  secretaryAddBrand: {
    route: "/secretary/brand/add",
    navigate: () => "/secretary/brand/add",
  },
  // ADMIN PAGES
  adminMain: {
    route: "/admin/main",
    navigate: () => "/admin/main",
  },
  adminPendingRentalPosts: {
    route: "/admin/cars/rent/pending",
    navigate: () => "/admin/cars/rent/pending",
  },
  adminAllRentCars: {
    route: "/admin/cars/rent/all",
    navigate: () => "/admin/cars/rent/all",
  },
  adminAllPurchaseCars: {
    route: "/admin/cars/purchase/all",
    navigate: () => "/admin/cars/purchase/all",
  },
  adminAllOfficesOrders: {
    route: "/admin/orders/all",
    navigate: () => "/admin/orders/all",
  },
  adminAllBrands: {
    route: "/admin/brands/all",
    navigate: () => "/admin/brands/all",
  },
  adminSearchUsers: {
    route: "/admin/user/:emailOrPhone",
    navigate: (emailOrPhone = "*") => `/admin/user/${emailOrPhone}`,
  },
  adminSearchOffices: {
    route: "/admin/office/:emailOrPhone",
    navigate: (emailOrPhone = "*") => `/admin/office/${emailOrPhone}`,
  },
  adminSendAlert: {
    route: "/admin/alert/send",
    navigate: () => "/admin/alert/send",
  },
  adminAddBrand: {
    route: "/admin/brand/add",
    navigate: () => "/admin/brand/add",
  },
};
