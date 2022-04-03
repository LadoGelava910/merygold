import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          // between  2.40.00-2.58.00
          //Before check
          //console.log(value.detailProduct);
          //Next

          const {
            id,
            company,
            images,
            info,
            price,
            title,
            inCart,
            description,
            number,
            sold,
            prob,
            weight,
          } = value.detailProduct;
          return (
            <>
              <div className="container py-5">
                {/*title */}
                {/* <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div> */}
                {/* end of title */}

                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={images[0]} className="img-fluid" alt="product" />
                  </div>
                  {/* product text */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2 style={{ color: "#535c68" }}>{title}</h2>
                    {company && (
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Made by :{" "}
                        <span className="text-uppercase">{company}</span>
                      </h4>
                    )}
                    {id !== 2 ? (
                      <h4
                        className=""
                        style={{
                          color: "#119da4",
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <strong>
                          {price}
                          <span>₾</span>
                        </strong>
                      </h4>
                    ) : (
                      <h4
                        className=""
                        style={{
                          color: "#119da4",
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <strong>
                          <span>$</span>
                          {price}
                        </strong>
                      </h4>
                    )}
                    <h6
                      style={{
                        color: "#535c68",
                        marginTop: "20px",
                        fontSize: "20px",
                      }}
                    >
                      სინჯი: {prob}
                    </h6>
                    <h6 style={{ color: "#535c68", fontSize: "20px" }}>
                      წონა: {weight} გრამი
                    </h6>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      <p className="text-muted lead">{description}</p>
                    </p>
                    <p
                      style={{
                        background: "#119da4",
                        padding: "5px 15px 5px 15px",
                        borderRadius: "25px",
                        color: "white",
                        width: "170px",
                        fontSize: "20px",
                      }}
                    >
                      {number}
                    </p>
                  </div>
                </div>
                {/* end of product info */}
              </div>
              {images.length > 1 &&
                images.map((item, index) => {
                  if (index > 0)
                    return (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "50px",
                          paddingBottom: "50px",
                        }}
                      >
                        <img src={item} alt={title} />
                      </div>
                    );
                })}
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
