import React from 'react'

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        d="M6.014 15.588c-.569 0-1.086-.465-1.086-1.034 0-.57.466-1.035 1.086-1.035.621 0 1.087.465 1.087 1.035 0 .569-.517 1.034-1.087 1.034zM19.362 9.95c-.104-.827-.621-1.5-1.294-2.017l-.258-.207-.207.258c-.414.466-.57 1.294-.518 1.915.052.465.207.93.466 1.293-.207.103-.466.207-.673.31a4.357 4.357 0 01-1.396.207h-13.4l-.051.31a5.82 5.82 0 00.466 2.95l.207.362v.051c1.241 2.07 3.466 3 5.897 3 4.656 0 8.484-2.017 10.295-6.362 1.19.051 2.38-.259 2.949-1.397l.155-.259-.259-.155c-.672-.414-1.603-.466-2.38-.259zm-6.674-.827H10.67v2.017h2.018V9.122zm0-2.535H10.67v2.017h2.018V6.587zm0-2.587H10.67v2.018h2.018V4zm2.483 5.122h-2.017v2.017h2.017V9.122zm-7.501 0H5.652v2.017H7.67V9.122zm2.535 0H8.187v2.017h2.018V9.122zm-5.018 0H3.169v2.017h2.018V9.122zm5.018-2.535H8.187v2.017h2.018V6.587zm-2.535 0H5.652v2.017H7.67V6.587z"
      ></path>
    </svg>
  )
}

export default Icon
