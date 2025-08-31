import React from 'react'
import "./index.scss";

function FrontCardDetail() {
  return (
    <div className='front-card-detail'>
      <div className="logo">
        <div className='left-circle'></div>
        <div className='right-circle'></div>
      </div>

      <div className="card-number">
        <span>0000 0000 0000 0000</span>
      </div>

      <div className="info">
        <div className="card-owner">
          <span>Michael Jackson</span>
        </div>

        <div className="card-date">
          <span>00/00</span>
        </div>
      </div>
    </div>
  )
}

export default FrontCardDetail;
