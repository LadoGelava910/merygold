import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// DONT NEEED     import {storeProducts} from '../data';
import { ProductConsumer } from "../context";
import { detailProduct } from "../data";
import "./css/Product.css";
import MultiSelectAll from "./MultiSelectAll";

/*
BENIM COZUMUM:
                            <ProductConsumer>
                                {

                                    ({}) => {
                                        return (<h1> {}</h1>);
                                    }
                                }
                            </ProductConsumer>
*/

export default class ProductList extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "ოქროს საყურეები",
        sold: false,
        description: "",
        number: "+995 597 733 199",
        prob: 750,
        weight: 15,
        price: 3000,
        category: "earings",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/6_mlyzdk.jpg",
        ],
      },
      {
        id: 2,
        title: "ზურმუხტის სამაჯური ბრილიანტებით",
        sold: false,
        description: "6 კტ (კარატი) ბრილიანტი",
        number: "+995 597 733 199",
        prob: 750,
        weight: 70,
        price: 10000,
        category: "bracelets",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/5_mdesan.jpg",
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/3_dvvckc.jpg",
        ],
      },
      {
        id: 3,
        title: "ოქროს სამაჯური სამ ფერში",
        sold: false,
        description: "",
        number: "+995 597 733 199",
        prob: 750,
        weight: 13.52,
        price: 2600,
        category: "bracelets",
        company: "გრაციელა",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/2_bdv5fi.jpg",
        ],
      },
    ],

    changeData: [
      {
        id: 1,
        title: "ოქროს საყურეები",
        sold: false,
        description: "",
        number: "+995 597 733 199",
        prob: 750,
        weight: 15,
        price: 3000,
        category: "earings",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/6_mlyzdk.jpg",
        ],
      },
      {
        id: 2,
        title: "ზურმუხტის სამაჯური ბრილიანტებით",
        sold: false,
        description: "6 კტ (კარატი) ბრილიანტი",
        number: "+995 597 733 199",
        prob: 750,
        weight: 70,
        price: 10000,
        category: "bracelets",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/5_mdesan.jpg",
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/3_dvvckc.jpg",
        ],
      },
      {
        id: 3,
        title: "ოქროს სამაჯური სამ ფერში",
        sold: false,
        description: "",
        number: "+995 597 733 199",
        prob: 750,
        weight: 13.52,
        price: 2600,
        category: "bracelets",
        company: "გრაციელა",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/2_bdv5fi.jpg",
        ],
      },
    ],
  };
  /*        DONT NEEED state of this class BECAUSE OF the code>
   value.products.map( product => { return <Product key={product.id} product={product}/>;} )

    state={
        products: storeProducts,

  };
  */

  filterByCategory = (values) => {
    this.setState({
      ...this.state,
      changeData: this.state.items.filter((o1) =>
        values.some((o2) => o1.category === o2.value)
      ),
    });
  };

  search = (value) => {
    this.setState({
      ...this.state,
      changeData: this.state.items.filter((item) => {
        return item.title.includes(value);
      }),
    });
  };

  togglePrice = () => {
    this.setState({
      ...this.state,
      changeData: this.state.changeData.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      ),
    });
  };

  togglePrice2 = () => {
    this.setState({
      ...this.state,
      changeData: this.state.changeData.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      ),
    });
  };

  render() {
    console.log(this.state.items, "items");
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="ოქროს ნივთების" title=" ონლაინ მაღაზია" />
            <div className="filter">
              <p>ფილტრი:</p>
              <div className="categories">
                <MultiSelectAll filterByCategory={this.filterByCategory} />
              </div>
              <div className="search">
                <input
                  type="text"
                  placeholder="ძიება"
                  onChange={(e) => this.search(e.target.value)}
                />
              </div>
              <div className="sort">
                <p> ფასი:</p>
                <button onClick={this.togglePrice}>ზრდადობით</button>
                <button onClick={this.togglePrice2}>კლებადობით</button>
              </div>
            </div>
            <div className="row products">
              <ProductConsumer>
                {(value) => {
                  return this.state.changeData.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
