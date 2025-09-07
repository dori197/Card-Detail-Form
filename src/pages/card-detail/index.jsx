import React, { useEffect, useState } from 'react'
import "./index.scss";
import Home from '../home';
import FrontCardDetail from '../../components/front-card-detail';
import BehindCardDetail from '../../components/behind-card-detail copy';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardDetail() {

  const [cardDetail, setCardDetail] = useState([]);

  const fetchCardDetail = async () => {
    const response = await axios.get('https://68ad6481a0b85b2f2cf324aa.mockapi.io/Users');
    const lastItem = response.data[response.data.length -1];
    setCardDetail(lastItem);
    console.log(response.data);
  }

  useEffect(() => {
    fetchCardDetail();
  }, [])

  return (
    <div className='card-detail'>
      <div className="card">
        <div className='front-card-detail'>
          <div className="logo">
            <div className='left-circle'></div>
            <div className='right-circle'></div>
          </div>

          <div className="card-number">
            <span>{cardDetail.cardHolderNumber || '0000 0000 0000 0000'}</span>
          </div>

          <div className="info">
            <div className="card-owner">
              <span>{cardDetail.cardHolderName || 'Michael Jackson'}</span>
            </div>

            <div className="card-date">
              <span>{(cardDetail.month || '00') + '/' + (cardDetail.year || '00')}</span>
            </div>
          </div>
        </div>

        <div className='behind-card-detail'>
          <div className="line"></div>
          <div className="card-cvc">
            <span>{cardDetail.cvc || "000"}</span>
          </div>
          <div className='under'>
            <hr />
            <hr />
            <hr />
          </div>
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
