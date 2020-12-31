import React, { memo } from 'react';
import { headerLinks } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function AppHeader() {

  const showSelectItem = (item) => {
    if (item.isUrl) {
      return <a href={item.link} target='_block'>{item.title}</a>
    }
    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    )
  }

  return (
    <HeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <h1 className="logo">
            <a href="#/" className="sprite_01">网易云音乐</a>
          </h1>
          <div className="select-list">
            {
              headerLinks.map((item) => (
                <div key={item.link} className="select-list-item">
                  {showSelectItem(item)}
                </div>
              ))
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input bordered={false} placeholder="音乐/视频/电台/用户" className="search" prefix={<SearchOutlined />} />
          <div className="creation-center">创作者中心</div>
          <div className="login">
            <a href="#/">登录</a>
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
