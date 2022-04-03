import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../favico.png";
import { domainToASCII } from "url";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import MultiSelectAll from "./MultiSelectAll";

//1.15.00 de kaldım
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
               https://www.iconfinder.com/Makoto_msk */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Mery's Gold - ოქროს ნივთების მაღაზია"
            className="navbar-brand"
          />
          <h1 style={{ color: "gold", fontSize: "24px" }}>Mery's Gold</h1>
        </Link>
        <ul
          className="navbar-nav align-items-center"
          style={{ marginTop: "-10px" }}
        >
          <li className="nav-item ml-5" style={{ marginTop: "10px" }}>
            <Link to="/contact" className="nav-link">
              კონტაქტი
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: #119da4;
  display: flex;
  justify-content: space-between;
  .nav-link {
    background: gold !important;
    padding: 5px 20px 7px 20px;
    border-radius: 5px;
    color: #119da4 !important;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: capitalize;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  .navbar-brand {
    width: 50px;
    margin-top: -5px;
  }
`;
