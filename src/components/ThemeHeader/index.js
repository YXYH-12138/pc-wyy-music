import React, { memo } from 'react';
import PropTypes from "prop-types";
import { ThemeHeaderWrapper } from "./style";

const ThemeHeader = memo(function ThemeHeader(props) {
  const { title, keyWords } = props;

  return (
    <ThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        <ul className="category">
          {
            keyWords.map((item, index) => (
              <li key={item}>
                <a href="todo">{item}</a>
                {index !== keyWords.length - 1 && <span className="line">|</span>}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderWrapper>
  )
})

ThemeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keyWords: PropTypes.array
}

ThemeHeader.defaultProps = {
  keyWords: []
}

export default ThemeHeader;