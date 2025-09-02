import React from 'react'
import "./index.scss";

function BehindCardDetail({ cvc }) {
  return (
    <div className='behind-card-detail'>
      <div className="line"></div>
      <div className="card-cvc">
        <span>{ cvc || "000" }</span>
      </div>
      <div className='under'>
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  )
}

export default BehindCardDetail;
