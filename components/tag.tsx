import React from "react";
import { useState } from "react"
import classNames from 'classnames/bind';

export type TagSize = 'sm' | 'lg';

const Tag = ({ tag, onClick, size = 'lg' }
  : { tag: string, onClick?: (tag: string, isPushed: boolean) => void, size?: TagSize }) => {
  const [pushed, setPushed] = useState(false)
  var styles = {
    unPushedButttonClass: 'bg-gray-50 hover:bg-gray-100 text-black',
    pushedButtonClass: 'bg-blue-500 hover:bg-blue-600 text-white'
  }
  let cx = classNames.bind(styles)

  return (
    <button
      className={cx("py-1 px-3 border rounded-full",
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