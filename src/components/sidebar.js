import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faCommentDots} from '@fortawesome/free-solid-svg-icons';

import '../components/sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="spacer"></div>
            <div className="sidebar">

                <ul className="item-list">
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <b>New </b>
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <b>Coffee?</b> Marisa Lu
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <b>Feedback</b> Lindsey Weiss
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <b>Post-Grad Plans</b> Evelyn Ma
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <b>Luanch Plans</b>
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faCommentDots} /></span>
                            <b>Victoria Wang</b>
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faCommentDots} /></span>
                            <b>Advait Kalkkad</b>
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="list-button">
                            <span className="icon"><FontAwesomeIcon icon={faCommentDots} /></span>
                            <b>Dany Trinh</b>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;