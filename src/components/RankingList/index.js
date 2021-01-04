import React, { memo } from 'react';
import { RankingListWrapper } from "./style";
import PropTypes from "prop-types";
import { getSizeImage } from "@/utils/format";

const RankingList = memo(function RankingList({ info, list, size }) {

  const { coverImgUrl, name } = info;

  return (
    <RankingListWrapper>
      <div className="top">
        <div className="cover">
          <img src={getSizeImage(coverImgUrl, 80)} alt="" />
          <a href="todo" className="mask image_cover" title={name}>{name}</a>
        </div>
        <div className="top-right">
          <h4 className="title">
            <a href="todo" title={name}>{name}</a>
          </h4>
          <div className="btn">
            <button className="sprite_02" title="播放" />
            <button className="sprite_02" title="收藏" />
          </div>
        </div>
      </div>
      <ol className="list">
        {
          list && list.slice(0, size).map((item, index) => (
            <li key={item.id} className="list-item">
              <i className="index">{index + 1}</i>
              <a className="text-nowrap" href="todo" title={item.name}>{item.name}</a>
              <div className="oper">
                <button title="播放"></button>
                <button title="添加到播放列表"></button>
                <button title="收藏"></button>
              </div>
            </li>
          ))
        }
      </ol>
      <div className="more">
        <a href="todo">查看更多&gt;</a>
      </div>
    </RankingListWrapper>
  )
})

RankingList.propTypes = {
  info: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  size: PropTypes.number
}

RankingList.defaultProps = {
  info: {},
  list: [],
  size: 10
}

export default RankingList;
