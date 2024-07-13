"use client";

import { useState, useEffect } from "react";

export function Time(props: { timeZone: string }) {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p className="text-md font-medium text-sub-text-color">
        {date.toLocaleTimeString("en-US", {
          timeZone: props.timeZone
            ? props.timeZone
            : Intl.DateTimeFormat().resolvedOptions().timeZone,
        })}
      </p>
    </div>
  );
}
