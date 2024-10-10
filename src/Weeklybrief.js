import React from 'react';
import './WeeklyBrief.css'; // Optional: For custom styling

function WeeklyBrief() {
  return (
    <div id="weeklyBriefContent">
      {/* Top Section with Cancel Button and Icons */}
      <div className="top-section">
        <button className="cancel-button"><i className="bi bi-x-lg"></i></button>
        <div className="icons-row">
          <button className="symbol-button"><i className="bi bi-apple"></i> AAPL</button>
          <button className="symbol-button"><i className="bi bi-amazon"></i> AMZN</button>
          <button className="symbol-button"><i className="bi bi-google"></i> GOOGL</button>
          <button className="symbol-button"><i className="bi bi-meta"></i> META</button>
          <button className="symbol-button"><i className="bi bi-microsoft"></i> MSFT</button>
          <button className="symbol-button"><i className="bi bi-nvidia"></i> NVDA</button>
          <button className="symbol-button"><i className="bi bi-tesla"></i> TSLA</button>
        </div>
      </div>

      {/* Portfolio Brief Section */}
      <div className="portfolio-brief">
        <h3 className="portfolio-title"><i className="bi bi-briefcase"></i> Portfolio Brief</h3>
        <p>
          Last week, the Unemployment Rate for September came in at 4.1%, beating the estimated 4.2%. 
          This week, investors are looking forward to the Initial Jobless Claims report for October 5th and 
          the Inflation Rate for September to gauge economic health. The 5 days change for S&P 500 index 
          is +1.72%, whereas Nasdaq index experienced a +2.80% change.
        </p>
        <p>
          Recent developments in your portfolio reflect a mix of challenges and advancements across major tech companies. 
          Meta Platforms (META) has seen a price target increase from KeyBanc, despite facing regulatory hurdles in the EU 
          regarding data retention...
        </p>
      </div>

      {/* Company Cards */}
      <div className="row justify-content-center">
        {/* Meta Platforms Card */}
        <div className="col-md-4 company-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-facebook card-icon"></i>
                <span className="company-title ms-2">Meta Platforms, Inc.</span>
              </h5>
              <ul>
                <li>META 5 days price change: +3.31%</li>
                <li>KeyBanc raises Meta Platforms' price target to $655 with Overweight rating</li>
                <li>Meta COO sells 413 shares at $583.73, retains 11,946 shares</li>
                <li>EU court restricts Meta's ad data retention, impacting business operations</li>
                <li>Meta unveils AI video generator to rival OpenAI and Google</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alphabet Inc. Card */}
        <div className="col-md-4 company-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-google card-icon"></i>
                <span className="company-title ms-2">Alphabet Inc. Common</span>
              </h5>
              <ul>
                <li>GOOGL 5 days price change: -1.89%</li>
                <li>Cantor Fitzgerald reaffirms neutral rating for Alphabet with $190 price target</li>
                <li>DOJ mulls Google breakup, focusing on search engine and Chrome</li>
                <li>Federal court mandates Google Play openness, impacting Alphabet's market valuation</li>
                <li>Waymo partners with Hyundai for EVs in robotaxi fleet expansion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nvidia Corp Card */}
        <div className="col-md-4 company-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-graph-up card-icon"></i>
                <span className="company-title ms-2">Nvidia Corp</span>
              </h5>
              <ul>
                <li>NVDA 5 days price change: +10.03%</li>
                <li>Nvidia’s AI Summit highlights tech innovations amidst antitrust investigation</li>
                <li>Nvidia stock surges on CEO’s remarks about robust AI chip demand</li>
                <li>Analysts favor Amazon over Nvidia in AI sector; Palantir noted as alternative</li>
                <li>Wall Street analyst forecasts Nvidia's stock to surge 561% by 2030</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon.com Card */}
        <div className="col-md-4 company-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-amazon card-icon"></i>
                <span className="company-title ms-2">Amazon.Com Inc</span>
              </h5>
              <ul>
                <li>AMZN 5 days price change: +0.70%</li>
                <li>Dave Clark launches Auger with $100M investment for AI supply chain revolution</li>
                <li>Amazon’s October Prime Day offers tech deals on top brands</li>
                <li>US antitrust lawsuit against Amazon to proceed, certain allegations dismissed</li>
                <li>Amazon Prime Video accelerates ad strategy to boost revenue by 2025</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Microsoft Corp Card */}
        <div className="col-md-4 company-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-microsoft card-icon"></i>
                <span className="company-title ms-2">Microsoft Corp</span>
              </h5>
              <ul>
                <li>MSFT 5 days price change: +0.46%</li>
                <li>Oppenheimer downgrades Microsoft from 'Outperform' to 'Perform' rating</li>
                <li>Nvidia overtakes Microsoft in market cap, now second largest globally</li>
                <li>Microsoft boosts AI investments with $13B in OpenAI, solidifying market position</li>
                <li>Microsoft discloses cloud service log data issue, prioritizes transparency and reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyBrief;
