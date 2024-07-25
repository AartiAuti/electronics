import React, { Component } from "react";
// import { Product } from './E-Product'
export default class App2 extends Component {
    constructor() {
        super()
        this.state = ({
            show: true,

        })
    }
    ToggleData=()=>{
        this.setState({
            show:!this.state.show,
        })
    }
    render()
    {
        return(
            <>
            <button onClick={()=>this.ToggleData()}>ToggleData</button>
            {
                this.state.show &&
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, omnis?</p>
            }
            </>
        )
    }
    
}
