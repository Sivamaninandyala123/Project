import React from 'react';
import './News.css';  // Custom CSS

function News() {
  // Function to copy text content
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Content copied to clipboard!');
  };

  return (
    <div className="container mt-4">
      {/* SoFi Technologies Card */}
      <div className="card mb-4 position-relative">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-building event-icon"></i>
            <div className="ms-3">
              <h5 className="mb-0">SoFi Technologies, Inc</h5>
              <small>PYMNTS, 09/10 23:34 UTC</small>
            </div>
          </div>
          <h6>SoFi Adds Credit Cards Focused on Rewards and Credit Scores</h6>
          <p>
            SoFi Technologies has added two new credit cards to its one-stop shop 
            for digital financial services for consumers.
          </p>
          <button className="btn btn-outline-secondary btn-sm">Source</button>

          {/* Copy Icon */}
          <i
            className="fas fa-copy copy-icon"
            title="Copy"
            onClick={() => copyToClipboard('SoFi Technologies, Inc: SoFi Adds Credit Cards Focused on Rewards and Credit Scores')}
          ></i>
        </div>
      </div>

      {/* Daily Market Digest Form */}
      <div className="card mb-4 position-relative">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-envelope event-icon"></i>
            <h5 className="ms-3 mb-0">Daily Market Digest</h5>
          </div>
          <p>
            Stay informed with daily recap of the stock market's top trending events and stories,
            delivered directly to your inbox.
          </p>
          <form className="d-flex">
            <input type="text" className="form-control me-2" placeholder="Name" />
            <input type="email" className="form-control me-2" placeholder="Email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>

          {/* Copy Icon */}
          <i
            className="fas fa-copy copy-icon"
            title="Copy"
            onClick={() => copyToClipboard('Subscribe to Daily Market Digest')}
          ></i>
        </div>
      </div>

      {/* Amazon.com Inc Card */}
      <div className="card mb-4 position-relative">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-shopping-cart event-icon"></i>
            <div className="ms-3">
              <h5 className="mb-0">Amazon.com Inc</h5>
              <small>PYMNTS, 09/10 23:21 UTC</small>
            </div>
          </div>
          <h6>AWS and Smartsheet Enable AI Assistant to Access Work Management Data</h6>
          <p>
            Amazon Web Services and Smartsheet have partnered to help companies 
            access their data through AWS' AI assistant, Amazon Q Business.
          </p>
          <button className="btn btn-outline-secondary btn-sm">Source</button>

          {/* Copy Icon */}
          <i
            className="fas fa-copy copy-icon"
            title="Copy"
            onClick={() => copyToClipboard('Amazon.com Inc: AWS and Smartsheet Enable AI Assistant to Access Work Management Data')}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default News;
