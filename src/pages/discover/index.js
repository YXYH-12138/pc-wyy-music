import React, { memo } from 'react';
import { TopWrapper } from './style';
import { dicoverMenu } from "@/common/local-data";

import { NavLink, useLocation } from 'react-router-dom';
import { renderRoutes, matchRoutes } from "react-router-config";

export default memo(function Discover({ route }) {

  const { pathname } = useLocation();
  const math = matchRoutes(route.routers, pathname);

  return (
    <>
      {
        // 404页面不显示子菜单
        (math.length === 1 && math[0].route.notFound) ||
        (
          <TopWrapper>
            <ul className="wrap-v1 sub-menu">
              {
                dicoverMenu.map((item) => (
                  <li key={item.link} className="sub-menu-item">
                    <NavLink to={item.link}>
                      <em>{item.title}</em>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </TopWrapper>
        )
      }
      {renderRoutes(route.routers)}
    </>
  )
})
