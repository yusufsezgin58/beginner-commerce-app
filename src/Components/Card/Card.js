import React from "react";
import './Card.css'

function Card() {
  return (
    <div className="card">
      <label className="form-label">Card number</label>
      <input type='text' maxLength="19" className="form-control" placeholder="**** **** **** ****" /> <br />
      <label className="form-label">Name & Surname</label>
      <input type='text' className="form-control" placeholder="Jack Smith" /> <br />
      <div className="special">
        <div>
          <label className="form-label">Expiration date</label>
          <input type='text' className="form-control" placeholder="Month / Year" />
        </div>
        <div>
          <label className="form-label">Security code</label>
          <input type='text' className="form-control" maxLength="3" placeholder="CVC/CVV" />
        </div>
      </div>

      <button type="submit" onClick={() => {alert("Process is finished.")}} className="btn btn-info mt-5">Done</button>
    </div>
  )
}

export default Card;