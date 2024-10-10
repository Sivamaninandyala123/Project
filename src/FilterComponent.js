import React from 'react';
import './FilterComponent.css'; // Custom CSS for the filter layout

const FilterComponent = () => {
  return (
    <div className="filter-container">
      <div className="filter-header">
        <i className="fas fa-filter"></i>
        <span>Filter</span>
      </div>

      {/* Industries Section */}
      <div className="filter-section">
        <h5>Industries</h5>
        <div className="filter-button">
          <i className="fas fa-industry"></i> Filter by Industry
        </div>
      </div>

      {/* Companies Section */}
      <div className="filter-section">
        <h5>Companies</h5>
        <div className="filter-button">
          <i className="fas fa-building"></i> Filter by Company
        </div>
      </div>

      {/* Categories (Chips/Tags) */}
      <div className="filter-categories">
        <span className="filter-tag">Earnings</span>
        <span className="filter-tag">Analyst Review</span>
        <span className="filter-tag">Product Update</span>
        <span className="filter-tag">Mergers And Acquisitions</span>
        <span className="filter-tag">Insider Trading</span>
        <span className="filter-tag">Partnerships</span>
        <span className="filter-tag">Financials</span>
        <span className="filter-tag">Trading</span>
        <span className="filter-tag">Legal</span>
        <span className="filter-tag">Exceptional Incident</span>
        <span className="filter-tag">Dividend</span>
        <span className="filter-tag">Investors Sentiment</span>
        <span className="filter-tag">Personnel</span>
        <span className="filter-tag">Other</span>
      </div>
    </div>
  );
};

export default FilterComponent;
