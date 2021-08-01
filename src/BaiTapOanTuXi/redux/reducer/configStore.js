import {combineReducers, createStore} from 'redux';
import {BaiTapOanTuXiReducer} from './BaiTapOanTuXiReducer';
import {BaiTapDatVeReducer} from './BaiTapDatVeReducer';
// ở đây nó đang tên là stateGioHang sửa lại tên là BaiTapOanTuXiReducer
const rootReducer = combineReducers({
    BaiTapOanTuXiReducer: BaiTapOanTuXiReducer, BaiTapDatVeReducer
})

export const store = createStore(rootReducer);