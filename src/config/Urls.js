export default {
    login: 'auth/customer/login',
    signUp: 'auth/customer/signup',
    getCategories: (ln) => `category/${ln}/get-categories`,
    getProducts: (ln) => `products/${ln}/get-products/`,
    getProduct: (ln) => `products/${ln}/get-product/`,
    getCountries: 'customer/countries-list',
    getStates: 'customer/states-list/',
    getCities: 'customer/cities-list/',
    addNewAddress: 'customer/add-new-address',
    getAddresses: 'customer/get-addresses',
    addOrder: (ln) => `customer/${ln}/add-to-order`,
    changeName: (ln) => `products/${ln}/change-names`,
    addCard: 'customer/add-card',
    getCards: 'customer/get-card',
    getOrders: 'customer/my-orders',
    getOrderDetail: 'customer/order-detail/',
    getOrderHistory: 'customer/orders-history',
    productsearch: (ln) => `products/${ln}/search`,
    forgetPassword: 'customer/send-code',
};
