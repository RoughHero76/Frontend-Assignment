import React, { useRef, useEffect } from 'react';
import './App.css'; // Make sure to import your CSS file
import Sidebar from './components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (evt) => {
      evt.preventDefault();
      scrollContainerRef.current.scrollLeft += evt.deltaY;
    };

    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div className="gradient-background">
      <h2 className="sidebar-heading">Review Inbox</h2>
      <h2 className="sidebar-time">9:41</h2>
      <main ref={scrollContainerRef} className="scroll-container">
        <div className='card1'>
          <div className='card-content'>
            <div className='card-subject'>
              <FontAwesomeIcon icon={faEnvelope} className='mail-icon' />
              <b>Coffee?</b> Mail from Marisa Lu
            </div>
            <div className='card-details'>
              <p className='name'>Marisa Lu</p>
              <b className='subject'>Coffe?</b>
              <p className='details'>
                Hey Jason,<br /><br />
                Was wondering if you'd be interested in meeting my team at Philz Coffe at 11 AM today. No pressure if you can't make it. Although I think you guys would really get along! <br />
                Maris
              </p>
              <div className='card-line'></div>
              <div className='card-buttons'>
                <button className='button'>Reply</button>
                <button className='button'>Forward</button>
                <button className='button'>Delete</button>
              </div>
              <div className='more-options'>
                <span className='mac-icon'>&#8984;</span>
                <p className='more'>More Options</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card1'>
          <div className='card-content'>
            <div className='card-subject'>

              <b>See my availability</b>
            </div>
            <div className='card-details'>
              <p className='name'></p>
              <b className='subject'>Availble until 1 PM</b>
              <p className='details'>
                Would you like to create an event for Coffe with Marisa at 11 AM?
              </p>
              <div className='gray-box'></div>
              <div className='card-line'></div>
              <div className='card-buttons'>
                <button className='button'>Create Event</button>
                <button className='button'>Edit Event</button>
                <button className='button'>Full Calender</button>
                <button className='button'>Dismiss</button>
              </div>
              <div className='more-options'>
                <span className='mac-icon'>&#8984;</span>
                <p className='more'>More Options</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card1'>
          <div className='card-content'>
            <div className='card-subject'>
              <FontAwesomeIcon icon={faMapMarker} className='mail-icon' />
              <b>Philz Coffe Location</b>
            </div>
            <div className='map-location'>
              <iframe title='myIframe'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                width="700"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
            <div className='card-details'>
              <p className='name'></p>

              <b className='subject'>Philz Coffe</b>
              <p className='details'>
                Custom-blended java in a casual setting.
                <p className='more'>20686 Stevens Creek Blvd<br />Cupertino, CA 95014</p>
              </p>

              <div className='card-line'></div>
              <div className='card-buttons'>
                <button className='button'>Create Event</button>
                <button className='button'>Edit Event</button>
                <button className='button'>Full Calendar</button>
                <button className='button'>Dismiss</button>
              </div>
              <div className='more-options'>
                <span className='mac-icon'>&#8984;</span>
                <p className='more'>More Options</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Sidebar />
    </div>
  );
}

export default App;
