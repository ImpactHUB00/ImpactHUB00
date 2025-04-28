import React from 'react';
import './App.css';
import photo from "./plus.jpg";
import { Link } from "react-router-dom";
export function Sidebar() {
  return (
    <div className="sidebar">
        <img src={photo} className="image-plus" alt="logoee" />
        <Link to="/createvolform">
      <button className="add-button">Add</button>
      </Link>
    </div>
  );
}