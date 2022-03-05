import React from "react";
import { useState } from "react"
import classNames from 'classnames/bind';

export type TagSize = 'sm' | 'lg';
export type ButtonStyles = { unPushedButtonClass?: string, pushedButtonClass?: string };

const Tag = ({ tag, onClick, styles = {}, size = 'lg' }
  : {
    tag: string,
    onClick?: (tag: string, isPushed: boolean) => void,
    styles?: ButtonStyles,
    size?: TagSize
  }) => {
  const [pushed, setPushed] = useState(false)
  let cx = classNames.bind(styles)

  return (
    <button
      className={cx("py-1 px-3 border rounded-full whitespace-nowrap",
        {
          unPushedButttonClass: !pushed,
          pushedButtonClass: pushed
        }
      )}
      onClick={() => {
        const nowState = !pushed;
        setPushed(nowState);
        if (onClick) {
          onClick(tag, nowState);
        }
      }}
    >
      {tag}
    </button>
  )
};

export default Tag;