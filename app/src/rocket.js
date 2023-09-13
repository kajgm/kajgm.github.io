import React, { useState, useEffect } from 'react';
import './css/globals.css';
import './css/dateTime.css';

export const RocketShip = () => {
    return (
        <div>
            <div className="rocket">
                <div className="rocket-body">
                    <div className="body"></div>
                    <div className="fin fin-left"></div>
                    <div className="fin fin-right"></div>
                    <div className="window"></div>
                </div>
                <div className="exhaust-flame"></div>
                <ul className="exhaust-fumes">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className="star">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default RocketShip;
