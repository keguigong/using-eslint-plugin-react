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
        d="M11.229 0a2.634 2.634 0 012.637 2.628v2.49a.75.75 0 11-1.5 0v-2.49A1.13 1.13 0 0011.238 1.5l-8.601.098c-.63 0-1.137.507-1.137 1.13V14.14c0 .622.507 1.13 1.129 1.13h1.548a.75.75 0 010 1.5H2.629a2.632 2.632 0 01-2.63-2.63V2.726A2.632 2.632 0 012.63.098zm1.642 6.939c.404-.04.791.097 1.095.36l.961.835c.618.536.69 1.479.16 2.1l-4.36 5.122a1.792 1.792 0 01-.787.532l-2.275.764a.753.753 0 01-.725-.14.75.75 0 01-.253-.693l.391-2.367c.054-.321.192-.62.401-.863l4.367-5.13c.26-.304.624-.49 1.025-.52zm.112 1.494l-4.363 5.13a.28.28 0 00-.063.136l-.187 1.133 1.091-.366a.286.286 0 00.123-.083l4.358-5.12-.959-.83zm-7.306 2.354a.75.75 0 010 1.5H3.65a.75.75 0 010-1.5zM8.55 7.052a.75.75 0 010 1.5h-4.9a.75.75 0 010-1.5zm1.376-3.737a.75.75 0 010 1.5H3.65a.75.75 0 010-1.5z"
        transform="translate(4 4)"
      ></path>
    </svg>
  )
}

export default Icon