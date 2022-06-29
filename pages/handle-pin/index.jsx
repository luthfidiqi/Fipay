import React, { useState } from "react";

export default function HandlePin() {
  const [pin, setPin] = useState({});

  const addPin = (e) => {
    if (e.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(e.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPin({ ...pin, [`pin${e.target.name}`]: e.target.value });
  };
  console.log(pin);

  const onSubmit = () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    console.log(allPin);
  };
  return (
    <div>
      <h1 onClick={onSubmit}>HandlePin</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <input
              type="text"
              maxLength={1}
              id="pin-1"
              onChange={(e) => {
                addPin(e);
              }}
              name="1"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              maxLength={1}
              id="pin-2"
              onChange={(e) => {
                addPin(e);
              }}
              name="2"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              maxLength={1}
              id="pin-3"
              onChange={(e) => {
                addPin(e);
              }}
              name="3"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              maxLength={1}
              id="pin-4"
              onChange={(e) => {
                addPin(e);
              }}
              name="4"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              maxLength={1}
              id="pin-5"
              onChange={(e) => {
                addPin(e);
              }}
              name="5"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              maxLength={1}
              id="pin-6"
              onChange={(e) => {
                addPin(e);
              }}
              name="6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
