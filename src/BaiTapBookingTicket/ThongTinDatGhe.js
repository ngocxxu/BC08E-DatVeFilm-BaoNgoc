import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../BaiTapOanTuXi/redux/types/BaiTapDatVeType";
import {huyGheAction} from "../BaiTapOanTuXi/redux/actions/BaiTapDatVeAction"
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-danger" style={{ fontSize: "25px" }}>
            Ghế đã đặt
          </span>
          <br></br>
          <button className="gheDangChon"></button>
          <span className="text-warning" style={{ fontSize: "25px" }}>
            Ghế đang đặt
          </span>
          <br></br>

          <button className="ghe"></button>
          <span className="text-success" style={{ fontSize: "25px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5" >
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat,index) => {
                return <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td>
                    <button class="btn btn-danger"onClick={() => {
                      this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                    }}>HỦY</button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}

export default connect(mapStateToProps)(ThongTinDatGhe)
