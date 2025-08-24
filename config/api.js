// Base URL for the backend
export const BASE_URL = "http://localhost:5000";

// ==================== AUTH ====================
export const AUTH_ENDPOINTS = {
  REGISTER: `${BASE_URL}/api/auth/register`,
  LOGIN: `${BASE_URL}/api/auth/login`,
  PROFILE: `${BASE_URL}/api/auth/profile`, // Protected
};

// ==================== PRODUCTS ====================
export const PRODUCT_ENDPOINTS = {
  GET_ALL: `${BASE_URL}/api/products`,
  GET_BY_ID: (id) => `${BASE_URL}/api/products/${id}`,
  CREATE: `${BASE_URL}/api/products`, // Admin
  UPDATE: (id) => `${BASE_URL}/api/products/${id}`, // Admin
  DELETE: (id) => `${BASE_URL}/api/products/${id}`, // Admin
};

// ==================== CART ====================
export const CART_ENDPOINTS = {
  GET: `${BASE_URL}/api/cart`,       // Get user cart
  ADD: `${BASE_URL}/api/cart`,       // Add item
  REMOVE: (id) => `${BASE_URL}/api/cart/${id}`, // Remove item
};

// ==================== ORDERS ====================
export const ORDER_ENDPOINTS = {
  CREATE: `${BASE_URL}/api/orders`,
  GET_MY_ORDERS: `${BASE_URL}/api/orders/myorders`,
  GET_BY_ID: (id) => `${BASE_URL}/api/orders/${id}`,
  GET_ALL: `${BASE_URL}/api/orders`, // Admin
  UPDATE_STATUS: (id) => `${BASE_URL}/api/orders/${id}`, // Admin
};

// ==================== WISHLIST ====================
export const WISHLIST_ENDPOINTS = {
  GET: `${BASE_URL}/api/wishlist`,
  ADD: `${BASE_URL}/api/wishlist`,
  REMOVE: (id) => `${BASE_URL}/api/wishlist/${id}`,
};
