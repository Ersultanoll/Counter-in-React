import './Button.scss'

import React from 'react'

const buttons = {
	sm: 'button-size-sm',
	md: 'button-size-md',
	lg: 'button-size-lg',
}

function Button({title, onClick, size}) {
  return (
    <button className={`button ${buttons[size]}`} onClick={onClick}>
      <span className='button-title'>{title}</span>
    </button>
  )
}

export default Button