import React, { memo } from 'react';
import { SongsCoverWrapper } from "./style";
import PropTypes from "prop-types";
import { getCount, getSizeImage } from '../../utils/format';

const SongsCover = memo(function (props) {

  const { info = {} } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <span>
            <i className="sprite_icon erji"></i>
            {getCount(info.playCount)}
          </span>
          <i className="sprite_icon play"></i>
          {/* </div> */}
        </div>
      </div>
      <div className="cover-source">
        <a href="todu">{info.name || info.copywriter}</a>
      </div>
    </SongsCoverWrapper>
  )
})

SongsCover.propTypes = {
  info: PropTypes.object.isRequired
}

export default SongsCover;