import React, { useState } from 'react';
import './FilterComponent.css'; // Include the CSS file with the styles provided.

const Home = () => {
  // State to control the visibility of the filter and content components
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isBlackBackground, setIsBlackBackground] = useState(false); // Track background color state

  // Function to toggle filter visibility
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
    setIsBlackBackground(true); // Set background to black on click
  };

  // Function to toggle content visibility
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
    setIsBlackBackground(true); // Set background to black on click
  };

  // Card Data based on the provided image
  const cardsData = [
    {
      icon: 'bi bi-star-fill',
      title: 'IAMGold Corporation',
      subtitle: 'IAMGold Receives Upgrade from National Bank',
      description:
        'IAMGold Corporation (IAG) has been upgraded to Outperform from Sector Perform...',
      time: '10/10 02:16 UTC',
      tag: 'Analyst',
    },
    {
      icon: 'bi bi-arrow-down',
      title: 'i-80 Gold Corp.',
      subtitle: 'i-80 Gold Receives Downgrade',
      description:
        'i-80 Gold Corp. experienced a downgrade in its stock rating by National Bank...',
      time: '10/10 02:15 UTC',
      tag: 'Analyst',
    },
    {
      icon: 'bi bi-upc-scan',
      title: 'Huntington Ingalls Industries',
      subtitle: 'HII Receives Downgrade from Wolfe Research',
      description:
        'Wolfe Research has adjusted its rating for Huntington Ingalls Industries...',
      time: '10/10 01:15 UTC',
      tag: 'Analyst',
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'L3Harris Technologies',
      subtitle: 'L3Harris Technologies Receives Upgrade',
      description:
        'L3Harris Technologies has been upgraded to Outperform from Peer Perform...',
      time: '10/10 01:15 UTC',
      tag: 'Analyst',
    },
  ];

  return (
    <div className={`container mt-5 ${isBlackBackground ? 'black-background' : ''}`}>
      {/* Toggle filter and content buttons */}
      <button className="toggle-filter-button" onClick={toggleFilter}>
        <i className="bi bi-funnel"></i> Filter
      </button>
      <button className="toggle-content-button" onClick={toggleContent}>
        <i className="bi bi-grid"></i>
      </button>

      {/* Filter Section */}
      {isFilterVisible && (
        <div className="filter-container">
          <div className="filter-header">
            <i className="bi bi-sliders"></i>
            <h5>Filters</h5>
          </div>
          <div className="filter-section">
            <div className="filter-button" onClick={() => setIsBlackBackground(true)}>
              <i className="bi bi-briefcase-fill"></i> Filter by Industry
            </div>
            <div className="filter-button" onClick={() => setIsBlackBackground(true)}>
              <i className="bi bi-building"></i> Filter by Company
            </div>
          </div>

          {/* Filter Categories */}
          <div className="filter-categories">
            <span className="filter-tag" onClick={() => setIsBlackBackground(true)}>Gold</span>
            <span className="filter-tag" onClick={() => setIsBlackBackground(true)}>Mining</span>
            <span className="filter-tag" onClick={() => setIsBlackBackground(true)}>Tech</span>
            <span className="filter-tag" onClick={() => setIsBlackBackground(true)}>Defense</span>
            <span className="filter-tag" onClick={() => setIsBlackBackground(true)}>Dividene</span>
            <span className="filter-tag" onClick={() => setIsBlackBackground(true)}>personnel</span>
            <span className="filter-tag" onClick={() => setIsBlackBackground(true)}>other</span>
          </div>
        </div>
      )}

      {/* Cards Section */}
      {isContentVisible && (
        <div className="content-container">
          <div className="row mt-4">
            {cardsData.map((card, index) => (
              <div
                className="col-md-6 col-lg-4 mb-4"
                key={index}
                onClick={() => setIsBlackBackground(true)} // Set background to black on card click
              >
                <div className="card text-white bg-dark">
                  <div className="card-body d-flex">
                    <div className="me-3">
                      <i className={`${card.icon} fs-3 text-primary`}></i>
                    </div>
                    <div>
                      <h5 className="card-title">{card.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
                      <p className="card-text">{card.description}</p>
                      <small className="text-muted">{card.time}</small>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <span className="badge bg-primary">{card.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
