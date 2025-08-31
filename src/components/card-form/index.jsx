import React from 'react'
import "./index.scss";

function CardForm() {
  return (
    <div className='card-form'>
      <form>
        <div className="name">
          <label htmlFor="">
            CARDHOLDER NAME
          </label>

          <input type="text" name="" id="" placeholder='e.g Michael Jackson' />
        </div>

        <div className="number">
          <label htmlFor="">
            CARDHOLDER NUMBER
          </label>

          <input type="text" name="" id="" placeholder='e.g 1234 5678 9123 0000' />
        </div>

        <div className="description">
          <div className="time">
            <span>
              EXP. DATE (MM/YY)
            </span>

            <div className="date">
                <input type="text" name="" id="MM" placeholder='MM' />

                <input type="text" name="" id="YY" placeholder='YY' />
            </div>
          </div>

          <div className="cvc">
            <label htmlFor="">CVC</label>
            <input type="text" name="" id="" placeholder='e.g. 123' />
          </div>
        </div>

        <div className="submit">
          <button>
            Confirm
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
