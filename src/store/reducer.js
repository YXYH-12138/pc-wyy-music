import { combineReducers } from "redux";
// 推荐数据
import { recommendReducer } from "../pages/discover/childPages/recommend/store";

export default combineReducers({
  recommend: recommendReducer
})