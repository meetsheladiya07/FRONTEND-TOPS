import React from 'react';
import './assets/style.css';
import image from './assets/image.png';

function MiniProfile() {
    return (
        <div className="profile">
            <img
                src={image}
                alt="Profile"
            />

            <h2>Meet Sheladiya</h2>

            <p>Learning React 🚀 | Java Developer</p>
        </div>
    );
}

export default MiniProfile;