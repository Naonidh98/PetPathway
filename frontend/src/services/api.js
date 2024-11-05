const BASE_URL = "http://localhost:8800/api/v1";

export const authApi = {
  send_otp: BASE_URL + "/auth/otp",
  login: BASE_URL + "/auth/login",
  signup: BASE_URL + "/auth/signup",
  reset_password_token: BASE_URL + "/user/password-reset/token",
  resetPassword: BASE_URL + "/user/password-reset",
};

export const profileApi = {
  update_profileImg: BASE_URL + "/profile/update/image",
};

export const blogsApi = {
  create_blog: BASE_URL + "/blog/create",
  get_blog: BASE_URL + "/blog/all",
  get_user_blog: BASE_URL + "/blog/user/all",
};

export const categoryApi = {
  get_category: BASE_URL + "/category/all",
};
