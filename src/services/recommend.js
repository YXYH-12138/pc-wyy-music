import request from "./request";

export function getTopBanners() {
  return request({ url: '/banner' })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

export function getTpoList() {
  return request({
    url: "/toplist"
  })
}

export function getRanking(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}