import React from 'react'
import { Wrapper } from './style'

export default function NotFound() {
  return (
    <Wrapper>
      <div className="wrap-v1 content">
        <div className="no-found">
          <div className="no-found-logo"></div>
          <p>很抱歉，你要查找的网页找不到</p>
        </div>
      </div>
    </Wrapper>
  )
}
