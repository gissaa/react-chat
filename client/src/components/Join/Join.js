import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import logo from "../../icons/peach.png"
function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  let admin=false;
  return (
    <div className="joinOuterContainer">
      
        <img src={logo} alt="logo" className="logo"/>
      <div className="joinInnerContainer">
        <h1 className="heading">PEACH CHAT</h1>
        <div>
          <input
            type="text"
            className="joinInput"
            placeholder="Kullanıcı Adı"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            maxLength='4'
            type="text"
            className="joinInput mt-20"
            placeholder="Oda Numarası"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <br/>

        <Link
          onClick={(event) => (!name || !room  ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">
            GİRİS
          </button>
          
        </Link>
      </div>
    </div>
  );
}

export default Join;
