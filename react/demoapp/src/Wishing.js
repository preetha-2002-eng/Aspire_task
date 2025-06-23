import React, {Component} from "react";

export default class Wishing extends Component{
    constructor(props){
        super(props)

        this.state = {
            username:"Vimala"
        }
    }
    ChangeName(event){
        this.setState({
            username:event.target.value
        })
    }
    render(){
        return(
            <div>Wishing
                <h1>Hi {this.state.username} Welcome </h1>
                Enter the username: <input type='text' name='username' value={this.state.username}
                onChange={(event)=>this.ChangeName(event)}></input>
            </div>
        )
    }
}