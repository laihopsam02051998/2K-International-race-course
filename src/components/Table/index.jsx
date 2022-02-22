import React from "react";

function Table(props) {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tài khoản</th>
          <th scope="col">Họ Tên</th>
          <th scope="col">SDT</th>
          <th scope="col">Email</th>
          <th scope="col">Mã cấp</th>
          <th scope="col">Cấp</th>
        </tr>
      </thead>
      <tbody>
        {props.listUser.map((item, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.taiKhoan}</td>
              <td>{item.hoTen}</td>
              <td>{item.soDT}</td>
              <td>{item.email}</td>
              <td>{item.maLoaiNguoiDung}</td>
              <td>{item.tenLoaiNguoiDung}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
