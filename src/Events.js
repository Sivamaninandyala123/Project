import React from 'react';
import './Event.css';  // Import custom CSS for styling

function Event() {
  return (
    <div className="container mt-4">
      {/* IAMGold Corporation Card */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-gem event-icon"></i>
            <div className="ms-3">
              <h5 className="mb-0">IAMGold Corporation</h5>
              <small>10/10 02:16 UTC</small>
            </div>
          </div>
          <h6>IAMGold Receives Upgrade from National Bank</h6>
          <p>
            IAMGold Corporation (IAG) has been upgraded to Outperform from Sector Perform 
            by National Bank, indicating a positive shift in the bank's outlook on the company.
          </p>
          <button className="btn btn-outline-secondary btn-sm">1 Source</button>
        </div>
      </div>

      {/* Daily Market Digest Form */}
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-envelope event-icon"></i>
            <h5 className="ms-3 mb-0">Daily Market Digest</h5>
          </div>
          <p>
            Stay informed with a daily recap of the stock market's top trending events and stories,
            delivered directly to your inbox.
          </p>
          <form className="d-flex">
            <input type="text" className="form-control me-2" placeholder="Name" />
            <input type="email" className="form-control me-2" placeholder="Email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Event;
