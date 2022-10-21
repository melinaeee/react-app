import React from "react";

export default function Conditions() {
  return (
    <div>
      <br />
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="sun icon"
      />

      <ul className="conditions">
        <li> Humidity: 80%</li>
        <li> Wind: 10 km/h</li>
      </ul>
    </div>
  );
}
