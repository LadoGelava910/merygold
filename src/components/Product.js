import React, { Component } from "react";
// for css
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

//2.03.00 te kaldım
export default class Product extends Component {
  render() {
    const {
      id,
      title,
      images,
      price,
      sold,
      description,
      category,
      prob,
      weight,
    } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={images && images[0]}
                    alt={title}
                    className="card-img-top"
                  />
                </Link>
                {/* <button
                  className="card-btn"
                  // disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                > */}
                {/* {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {""}
                      in Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )} */}
                {/* </button> */}
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <h5 className="align-self-center mb-0 product_title">{title}</h5>

            {id !== 2 ? (
              <h5 className="text-violet font-italic mb-0">
                {price}
                <span className="mr-1">₾</span>
              </h5>
            ) : (
              <h5 className="text-violet font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
              </h5>
            )}
          </div>
          <div className="maxasiateblebi">
            <div className="parameters">
              <p>{prob}</p> <p style={{ marginLeft: "5px" }}>სინჯი</p>
            </div>
            <div className="parameters2">
              <p>{weight}</p> <p style={{ marginLeft: "5px" }}>გრამი</p>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape(
    {
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool,
    }.isRequired
  ),
};

//styling
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    // min-height: 400px;
    background: transparent;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid red;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // border: 1px solid red;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    color: #535c68;
    margin-top: -30px;
    // min-height: 70px;
  }
  &hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.02);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.8rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .card-btn {
    transform: translate(0%, 0%);
  }
  .card-btn: hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .parameters,
  .parameters2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    color: #535c68;
  }
  .maxasiateblebi {
    display: flex;
    justify-content: flex-start;
    margin-left: 35px;
    width: 80%;
    gap: 30px;
    margin-top: 10px;
    font-size: 20px;
  }
  .maxasiateblebi p {
  }

  h5 {
    // min-height: 70px;
    color: #119da4 !important;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
