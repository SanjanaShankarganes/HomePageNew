import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import card1Image from '../asserts/view list new.png';
import card2Image from '../asserts/mapimg.png';
import card3Image from '../asserts/registration_img.png';
import Footer from './Footer';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (cardNumber) => {
    if (cardNumber === 3) {
      setShowModal(true);  
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card-div row d-flex justify-content-evenly">
      <div className="card col-sm-12 col-md-4 col-lg-3 my-4 mx-3" onClick={() => handleCardClick(1)}>
        <span className="card-body">
          <span className="h3 card-title">View List</span>
        </span>
        <img src={card1Image} alt="Card 1" />
        <p className="card-content mt-5">
          This list includes all the Lord Ganesh idols that have been registered for the festival, 
          along with the name of the applicants.
        </p>
      </div>
      <div className="card col-sm-12 col-md-4 col-lg-3 my-4 mx-3" onClick={() => handleCardClick(2)}>
        <span className="card-body">
          <span className="h3 card-title">Map</span>
        </span>
        <img src={card2Image} alt="Card 2" />
        <p className="card-content mt-5">
          Map displaying the locations for Vinayagar Chadurthi registered idols and applicants.
        </p>
      </div>
      <div className="card col-sm-12 col-md-4 col-lg-3 my-4 mx-3" onClick={() => handleCardClick(3)}>
        <div className="card-body text-start">
          <p className="card-title h3">Registration Count</p>
        </div>
        <img src={card3Image} alt="Card 3" />
        <div className="card-content mt-5">
          <p>Total number of idols registered<br />
            Number of idols immersed<br />
            Number of idols not immersed
          </p>
        </div>
      </div>
      <Footer />

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }} aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Registration Details</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Sensitive</th>
                    <th>Insensitive</th>
                    <th>Hyper-Sensitive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Number of Idols Registered</td>
                    <td>30</td>
                    <td>40</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Total Number of Idols Immersed</td>
                    <td>15</td>
                    <td>20</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Total Number of Idols Not Immersed</td>
                    <td>15</td>
                    <td>20</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Private Idols</td>
                    <td colSpan="3">25</td>
                  </tr>
                  <tr>
                    <td>Public Idols</td>
                    <td colSpan="3">15</td>
                  </tr>
                  <tr>
                    <td>Organizational Idols</td>
                    <td colSpan="3">8</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
