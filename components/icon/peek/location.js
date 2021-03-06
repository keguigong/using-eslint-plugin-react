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
        d="M6.618 0c3.71 0 6.618 2.906 6.618 6.617 0 3.947-3.123 8.864-6.143 11.338a.75.75 0 01-.973-.02C3.652 15.742 0 10.628 0 6.617 0 2.907 2.907 0 6.618 0zm0 1.5C3.748 1.5 1.5 3.748 1.5 6.617c0 3.171 2.844 7.486 5.138 9.748 2.539-2.322 5.098-6.503 5.098-9.748 0-2.869-2.248-5.117-5.118-5.117zm0 2.133a2.849 2.849 0 012.846 2.844 2.849 2.849 0 01-2.846 2.846 2.849 2.849 0 01-2.846-2.846 2.849 2.849 0 012.846-2.844zm0 1.5c-.742 0-1.346.603-1.346 1.344 0 .742.604 1.346 1.346 1.346.742 0 1.346-.604 1.346-1.346 0-.74-.604-1.344-1.346-1.344z"
        transform="translate(5 3)"
      ></path>
    </svg>
  )
}

export default Icon
