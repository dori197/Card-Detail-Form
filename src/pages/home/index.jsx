import React, { useState } from 'react'
import "./index.scss";
import CardForm from '../../components/card-form';
import FrontCardDetail from '../../components/front-card-detail';
import BehindCardDetail from '../../components/behind-card-detail copy';

function Home() {

  const [formData, setFormData] = useState({
    cardHolderName: '',
    cardHolderNumber: '',
    month: '',
    year: '',
    cvc: '',
  });

  const handelDataChange = (data) => {
    setFormData(data);
  }

  return (
    <div className='home'>
      <div className="card">
        <div className="front-card">
          <FrontCardDetail
            cardHolderName={formData.cardHolderName}
            cardHolderNumber={formData.cardHolderNumber}
            month={formData.month}
            year={formData.year}
          />
        </div>

        <div className="behind-card">
          <BehindCardDetail
            cvc={formData.cvc}
          />
        </div>
      </div>

      <div className='left-side'>
      </div>

      <div className='right-side'>
        <CardForm 
          formData={formData}
          onDataChange={handelDataChange}
        />
      </div>
    </div>
  )
}

export default Home;
