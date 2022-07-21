import { ReactElement } from 'react'
import './css/FlippingCard.scss'

export interface IFlippingCard {
  front: ReactElement | string;
  back: ReactElement | string;
}

export default function FlippingCard(props: IFlippingCard) {
  const { front, back } = props

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {front}
        </div> 
        <div className="flip-card-back">
          {back}
        </div>
      </div>
    </div>
  )
}
