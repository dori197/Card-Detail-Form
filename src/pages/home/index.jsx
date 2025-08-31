import React from 'react'
import "./index.scss";
import CardForm from '../../components/card-form';
import FrontCardDetail from '../../components/front-card-detail';
import BehindCardDetail from '../../components/behind-card-detail copy';

function Home() {
  return (
    <div className='home'>
      <div className="card">
        <div className="front-card">
          <FrontCardDetail />
        </div>

        <div className="behind-card">
          <BehindCardDetail />
        </div>
      </div>

      <div className='left-side'>
      </div>

      <div className='right-side'>
        <CardForm />
      </div>
    </div>
  )
}

export default Home;
