import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return <div key={index} >
				<HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
			</div>;
    });
  };
  render() {
    return (
      <div
        className=""
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: 'url("./img/bookingTicket/bgmovie.jpg")',
          backgroundSize: "100%"
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning ">ĐẶT VÉ XEM PHIM MOVIESTAR</h1>
                <div className="text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div className="screen ml-auto mr-auto"></div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4 ">
                <h2 className="text-light ">DANH SÁCH GHẾ BẠN CHỌN</h2>
                <ThongTinDatGhe></ThongTinDatGhe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
