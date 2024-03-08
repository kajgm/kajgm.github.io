import React, { useState, useEffect } from 'react';

export function DateTime(props: { timeZone: string }) {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>
        -{' '}
        {date.toLocaleTimeString('en-US', {
          timeZone: props.timeZone ? props.timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone,
        })}
      </p>
    </div>
  );
}
