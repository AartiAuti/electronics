import React, { Component } from 'react';

import Products from './E-Product';

export default class App extends Component {
  constructor() {
    super()
    this.state = ({
      elect_product: true,
      other_product: true,
    })
  }
  All_Handler = () => {
    this.setState({
      elect_product: true,
      other_product: true,
    })
  }
  Elect_Handler = () => {
    this.setState({
      elect_product: true,
      other_product: false,
    })
  }
  Other_Handler = () => {
    this.setState({
      elect_product: false,
      other_product: true,
    })
  }
  render() {
    const Elect_Products = [
      {
        id: 1,
        name: 'Laptop',
        img: 'img/laptop.webp',
        btn1: 'Add to Cart',
        btn2: 'Buy Now',
      },
      {
        id: 2,
        name: 'Tab',
        img: 'img/tab.webp',
        btn1: 'Add to Cart',
        btn2: 'Buy Now',
      },
      {
        id: 3,
        name: 'Headphones',
        img: 'img/ph.webp',
        btn1: 'Add to Cart',
        btn2: 'Buy Now',
      },
      {
        id: 4,
        name: 'Laptop',
        img: 'img/laptop.webp',
        btn1: 'Add to Cart',
        btn2: 'Buy Now',
      }
    ]





    const Other_Products = [
      {
        id: 1,
        name: 'Dry Fruits',
        img: 'img/df1.webp',
        btn1: 'Add to Cart',
        btn2: 'Buy Now',
      },
      {
        id: 2,
        name: 'Dry Fruits',
        img: 'img/df2.webp',
        btn1: 'Add to Cart',
        btn2: 'Buy Now',
      },
      {
        id: 3,
        name: 'Dry Fruits',
        img: 'img/df3.webp',
        btn1: 'Add to Cart',
        btn2: 'Buy Now',
      }

    ]
    return (

      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-light bg-primary p-2">E-Commerce App</h1>
          </div>
          <div className="col-md-12 text-center">
            <button className='btn btn-primary mx-2 my-4' onClick={() => this.All_Handler()}>All Products</button>
            <button className='btn btn-danger mx-2 my-4' onClick={() => this.Elect_Handler()}>Electronics Products</button>
            <button className='btn btn-dark mx-2 my-4' onClick={() => this.Other_Handler()}>Other Products</button>
          </div>
          <div className="col-md-12">
            <div className="row">
              {
                this.state.elect_product ?
                  <>
                    {
                      Elect_Products.map((val, index) => {
                        return (
                          <>
                            <div className="col-md-3">
                              <Products
                                name={val.name}
                                img={val.img}
                                btn1={val.btn1}
                                btn2={val.btn2}
                              />
                            </div>
                          </>
                        )
                      })
                    }
                  </> : null
              }




              {
                this.state.other_product ?
                  <>
                    {
                      Other_Products.map((val, index) => {
                        return (
                          <>
                            <div className="col-md-3">
                              <Products
                                name={val.name}
                                img={val.img}
                                btn1={val.btn1}
                                btn2={val.btn2}
                              />
                            </div>
                          </>
                        )
                      })
                    }
                  </> : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}




