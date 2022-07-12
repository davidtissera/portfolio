import { SyntheticEvent, useState } from 'react'
import './css/HamburgerMenuIcon.css'

export interface IHamburgerMenuIcon {
  onClick: React.ReactEventHandler;
  isActive: boolean;
}

export function HamburgerMenuIcon(props: IHamburgerMenuIcon) {
  const { onClick, isActive } = props

  return (
    <svg className={`ham hamRotate ham4 ${isActive && 'active'}`} viewBox="0 0 100 100" width="80" onClick={onClick}>
      <path 
        className="line top"
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
      />
      <path
        className="line middle"
        d="m 70,50 h -40"
      />
      <path
        className="line bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
      />
    </svg>
  )
}
