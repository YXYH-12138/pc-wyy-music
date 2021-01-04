import React, { memo } from 'react';
import Proptypes from "prop-types";
import { AlbumCoverWrapper } from './style';
import { getSizeImage } from "@/utils/format";

const AlbumCover = memo(function AlbumCover(props) {

  const { info = {}, imgSize, playIcon } = props;

  return (
    <AlbumCoverWrapper imgSize={imgSize}>
      <div className="cover">
        <img src={getSizeImage(info.blurPicUrl, imgSize)} alt="" />
        <a className="mask sprite_covor" href="todu">{info.name}</a>
        {playIcon && <i className="play-icon"></i>}
      </div>
      <p className="text-nowrap song-name">
        <a href="todu">{info.name}</a>
      </p>
      <p className="text-nowrap author-name">
        <a href="todu">{info?.artist?.name ?? ''}</a>
      </p>
    </AlbumCoverWrapper>
  )
})

AlbumCover.propTypes = {
  info: Proptypes.object.isRequired,
  imgSize: Proptypes.number,
  playIcon: Proptypes.bool
}

AlbumCover.defaultProps = {
  imgSize: 100,
  playIcon: true
}

export default AlbumCover;