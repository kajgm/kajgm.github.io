import React, { useState, useEffect } from 'react';
import '../static/css/globals.css';
import '../static/css/dateTime.css';

const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p id="time-text" className="no-margin">
        {date.toLocaleTimeString('en-US', { timeZone: 'America/Vancouver' })}
      </p>
    </div>
  );
};

export default DateTime;
