import React , {Component} from "react";

export default class AddToCart extends Component{
    constructor(props){
        super(props)

        this.state = {
            cart:0,
            count:0
        }
    }
    incrementCounter(event){
        this.setState({
            cart:this.state.cart + 1
        })
    }
    handleMouseEnter(event){
        this.setState({
            count:this.state.count + 1 
        })
    }
   
    render(){
        return(
            <div><h1>Add To cart</h1>
                <label onMouseEnter={(event)=>this.handleMouseEnter(event)}>
        Hover over me! Count: {this.state.count}
      </label><br/><br/>
                <button onClick={(event)=>this.incrementCounter(event)}> cart : {this.state.cart} </button>
            </div>
        )
    }

}