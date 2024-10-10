import React from 'react';
import { useNavigate } from 'react-router-dom';

function DevelopersAPI() {
  const navigate = useNavigate();

  const handleProfileNavigation = () => {
    // Navigate to the Profile component
    navigate('/profile');
  };

  return (
    <div>
      <h1>DevelopersAPI Page</h1>

      {/* Button or event to trigger navigation */}
      <button onClick={handleProfileNavigation} className="btn btn-primary">
        Go to Profile
      </button>
    </div>
  );
}

export default DevelopersAPI;
