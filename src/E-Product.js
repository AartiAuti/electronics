import React from "react";

const Products =(props)=>{
    console.log(props)
    return(
        <>
        <div className="card my-3">
            <div className="card-header text-center">
                <h2>{props.name}</h2>
            </div>
            <div className="card-body">
                <img src={props.img} alt="" height="230px" className="w-100"/>
            </div>
            <div className="card-footer text-center">
            <button className="btn btn-danger px-2 mx-2 fw-bold">{props.btn1}</button>
            <button className="btn btn-outline-dark px-2 mx-2 fw-bold">{props.btn2}</button>
            </div>
        </div>

        </>
    )
}
export default Products;