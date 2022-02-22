import { LOGIN_USER } from "../types/userType";

let initalState = {
  credentials: null, // thông tin đăng nhập, chưa đăng nhập là nulll
};

const UserReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      state.credentials = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default UserReducer;
