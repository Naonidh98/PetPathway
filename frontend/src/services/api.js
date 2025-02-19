const BASE_URL = "http://localhost:8800/api/v1";

export const authApi = {
  send_otp: BASE_URL + "/auth/otp",
  login: BASE_URL + "/auth/login",
  signup: BASE_URL + "/auth/signup",
  reset_password_token: BASE_URL + "/user/password-reset/token",
  resetPassword: BASE_URL + "/user/password-reset",
  update_password: BASE_URL + "/auth/password/update",
};

export const profileApi = {
  update_profileImg: BASE_URL + "/profile/update/image",
  update_profile_data: BASE_URL + "/profile/update/data",
};

export const blogsApi = {
  create_blog: BASE_URL + "/blog/create",
  get_blog: BASE_URL + "/blog/all",
  get_user_blog: BASE_URL + "/blog/user/all",
  get_blog_data: BASE_URL + "/blog/detail",
  delete_blog: BASE_URL + "/blog/delete",
  update_blog: BASE_URL + "/blog/update",
  like_blog: BASE_URL + "/blog/like"
};

export const categoryApi = {
  get_category: BASE_URL + "/category/all",
  create_category: BASE_URL + "/category/create",
  update_category: BASE_URL + "/category/edit",
  delete_category: BASE_URL + "/category/delete",
  create_item: BASE_URL + "/item/create",
  get_category_name: BASE_URL + "/category/all/name",
  get_cat_info_by_name : BASE_URL + "/category/name",
  category_items : BASE_URL + "/category/item/all"
};

export const itemApi = {
  item_detail : BASE_URL + "/item/detail",
  item_by_name : BASE_URL + "/item/search/name",
  item_for_dash : BASE_URL + "/item/dash",
  delete_item : BASE_URL + "/item/delete"
};

export const storeApi = {
  getStoreDetails: BASE_URL + "/store/data",
  getStoreAnalytics: BASE_URL + "/store/details",
  getCategoryAndItems : BASE_URL + "/store/item_and_cat",
  getSearchResult : BASE_URL + "/store/search/result",
};

export const adoptApi = {
  createPetAdd: BASE_URL + "/pet/create",
  addImage: BASE_URL + "/pet/media/add",
  removeImage: BASE_URL + "/pet/media/remove",
  petAdoptDetails : BASE_URL + "/pet/state/all",
  petDetail : BASE_URL + "/pet/detail"
};

export const paymentApi = {
  capture_payment : BASE_URL + "/payment/capturePayment",
  verify_payment : BASE_URL + "/payment/verifyPayment",
}