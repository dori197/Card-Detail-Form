import React, { useState } from 'react'
import "./index.scss";
import axios from 'axios';
import Loading from '../loading';
import { useNavigate } from 'react-router-dom';

function CardForm({ formData, onDataChange }) {

  const API_URL = "https://68ad6481a0b85b2f2cf324aa.mockapi.io/Users";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    onDataChange({
      ...formData, cardHolderName: e.target.value
    });
  }
  const handleNumberChange = (e) => {
    onDataChange({
      ...formData, cardHolderNumber: e.target.value
    });
  }
  const handleMonthChange = (e) => {
    onDataChange({
      ...formData, month: e.target.value
    });
  }
  const handleYearChange = (e) => {
    onDataChange({
      ...formData, year: e.target.value
    });
  }
  const handleCvcChange = (e) => {
    onDataChange({
      ...formData, cvc: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout( async () => {
      try {
        const response = await axios.post(API_URL, {
          cardHolderName: formData.cardHolderName,
          cardHolderNumber: formData.cardHolderNumber,
          month: formData.month,
          year: formData.year,
          cvc: formData.cvc,
          createdAt: new Date().toISOString()
        })

        if (response.status === 201) {
          onDataChange({
            cardHolderName: '',
            cardHolderNumber: '',
            month: '',
            year: '',
            cvc: '',
          })
          alert('ok r nhé bae');
          navigate("/card-detail");
        }
      } catch (error) {
        console.log("Failed Post Data", error);
      } finally {
        setLoading(false);
      }
    }, 4000);
  }


  return (
    <div className='card-form'>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="">
            CARDHOLDER NAME
          </label>

          <input type="text" name="" id="" required autoComplete='' placeholder='e.g Michael Jackson' value={formData.cardHolderName} onChange={handleNameChange} />
        </div>

        <div className="number">
          <label htmlFor="">
            CARDHOLDER NUMBER
          </label>

          <input type="text" name="" id="" required autoComplete='' placeholder='e.g 1234 5678 9123 0000' value={formData.cardHolderNumber} onChange={handleNumberChange} />
        </div>

        <div className="description">
          <div className="time">
            <span>
              EXP. DATE (MM/YY)
            </span>

            <div className="date">
              <input type="text" name="" id="MM" required autoComplete='' placeholder='MM' value={formData.month} onChange={handleMonthChange} />

              <input type="text" name="" id="YY" required autoComplete='' placeholder='YY' value={formData.year} onChange={handleYearChange} />
            </div>
          </div>

          <div className="cvc">
            <label htmlFor="">CVC</label>
            <input type="text" name="" id="" required autoComplete='' placeholder='e.g. 123' value={formData.cvc} onChange={handleCvcChange} />
          </div>
        </div>

        <div className="submit">
          <button type='submit' disabled={loading}>
            {loading ? <Loading /> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
