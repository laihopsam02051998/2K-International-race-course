import * as Yup from "yup";

// Phone Regex
export const phoneRegex = {
  taiKhoan: Yup.string()
    .max(20, "Số điện thoại chỉ có 10 số")
    .required("Số điện thoại Không được bỏ trống"),
  // .matches(
  //   /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
  //   "Số điện thoại không hợp lệ"
  // ),
};

// Password Regex
export const passwordRegex = {
  matKhau: Yup.string()
    .min(6, "Mật khẩu phải hơn 6 kí tự")
    .max(16, "Mật khẩu phải ít hơn 16 kí tự")
    .required("Mật khẩu không được bỏ trống"),
};

export const passwordConfirmRegex = {
  confrimPassword: Yup.string()
    .when("matKhau", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("matKhau")],
        "Xác nhận mật khẩu không đúng"
      ),
    })
    .min(6, "Mật khẩu phải hơn 6 kí tự")
    .max(16, "Mật khẩu phải ít hơn 16 kí tự")
    .required("Mật khẩu không được bỏ trống"),
};
// Email Regex
export const emailRegex = {
  email: Yup.string()
    .email("Email không hợp lệ  ")
    .required("Email không được bỏ trống ")
    .matches(
      /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g,
      "email không hợp lệ"
    ),
};
