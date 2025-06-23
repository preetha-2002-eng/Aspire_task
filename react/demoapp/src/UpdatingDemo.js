import React , {Component} from "react";

export default class UpdatingDemo extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name:'Hari'
      }
    }
    ChangeName(event){
        this.setState({
            name:'Kumar'
        })
    }
    render(){
        return(
            <div>Updating l;;'Demo
                <h2 style={{color:'blue'}}>Welcome the king {this.state.name} </h2> 
                <button onClick={(event)=>this.ChangeName(event)}>Update Name</button> 
                </div>
        )
    }
    componentDidMount(){
        console.log("Comonent is updating in the DOM")
    }
}