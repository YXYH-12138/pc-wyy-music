import { getTopBanners } from "../../../../../services/recommend";
import * as actionTypes from "./constants";

export function topBannerAction() {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch({
        type: actionTypes.TOP_BANNERS,
        topBanners: res.banners
      })
    })
  }
}