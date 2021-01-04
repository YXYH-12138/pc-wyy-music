import * as api from "services/recommend";
import * as actionTypes from "./constants";

export function topBannerAction() {
  return dispatch => {
    api.getTopBanners().then(res => {
      dispatch({
        type: actionTypes.TOP_BANNERS,
        topBanners: res.banners || []
      })
    })
  }
}

export function hotRecommendsAction(limit) {
  return dispatch => {
    api.getHotRecommends(limit).then(res => {
      dispatch({
        type: actionTypes.HOT_RECOMMENDS,
        hotRecommends: res.result || []
      })
    })
  }
}

export function newAlbumAction(limit) {
  return dispatch => {
    api.getNewAlbum(limit).then(res => {
      dispatch({
        type: actionTypes.NEW_ALBUM,
        newAlbums: res.albums || []
      })
    })
  }
}

export function topListAction() {
  return dispatch => {
    api.getTpoList().then(res => {
      dispatch({
        type: actionTypes.TOP_LIST,
        topList: res.list || []
      })
    })
  }
}

export function rankingAction(id, type, key) {
  return dispatch => {
    api.getRanking(id).then(res => {
      dispatch({
        type,
        [key]: res.playlist
      })
    })
  }
}

export function rankingDetailAction(ids, type, key) {
  return dispatch => {
    api.getSongDetail(ids).then(res => {
      dispatch({
        type,
        [key]: res.songs
      })
    })
  }
}