import React from 'react';
import { menData } from '../data/men';  // No changes here
import Navbar from '../components/Navbar';  // No changes here
import { Link } from 'react-router-dom';  // No changes here
import './Pages.css';

const MenPage = () => {
  return (
    <>
      <Navbar />
      <div className="fullpage">
        {/* Displaying all men's products */}
        <div className="pageSection">
          {menData.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/men/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={`${item.brand} ${item.model}`} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.brand}, {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenPage;