import React, { useState, useEffect } from 'react';

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
      <p>{date.toLocaleTimeString('en-US', { timeZone: 'America/Vancouver' })}</p>
    </div>
  );
};

export default DateTime;
