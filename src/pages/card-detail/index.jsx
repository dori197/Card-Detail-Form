import React from 'react'
import "./index.scss";
import Home from '../home';
import FrontCardDetail from '../../components/front-card-detail';
import BehindCardDetail from '../../components/behind-card-detail copy';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function CardDetail() {
  return (
    <div className='card-detail'>
      <div className="card">
        <div className="front-card">
          <FrontCardDetail />
        </div>

        <div className="behind-card">
          <BehindCardDetail />
        </div>
      </div>

      <div className='top-side'>
      </div>

      <div className='bottom-side'>
        <div className="icon">
          <FontAwesomeIcon icon={faCheck} className='check' />
        </div>

        <div className="title">
          <span>THANK YOU!</span>
        </div>

        <div className="subTitle">
          <span>We've added your card details</span>
        </div>

        <div className="continue">
          <Link to={"/"}>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default CardDetail;
