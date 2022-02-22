import Axios from "axios";

class UserService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: data,
    });
  }

  signIn(user) {
    return Axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }

  // START GET USER
  getUser(count) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=1&pageSize=${count}`,
    });
  }
  // END GET USER
}

export default UserService;
