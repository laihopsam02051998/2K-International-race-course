import { createAction } from ".";
import { userService } from "../../Services";
import { LOGIN_USER } from "../types/userType";
import history from "./../../history";
// async action : là action để component dispatch
//  trả về cái action đến reducer con
export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(LOGIN_USER, res.data));
        localStorage.setItem("credential", JSON.stringify(res.data));
        // console.log("Thành công" + user);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("Tài khoản hoặc mật khẩu chưa đúng");
      });
  };
};

export const signUpUser = (user) => {
  userService
    .signUp(user)
    .then((res) => {
      console.log(res);
      console.log("thành công");
    })
    .catch((err) => {
      console.log(err);
      console.log("thất bại");
    });
};
