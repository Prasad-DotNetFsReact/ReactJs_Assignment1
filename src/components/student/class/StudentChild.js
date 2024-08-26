import { Component } from "react";
 
export default class StudentChild extends Component
{
    render(){
        return(
         <>
        <p> I am StudentChild Class Component</p>
        <p> <b> Hello I'm  {this.props.name} <br/>
        My address is {this.props.address}<br/>
        My score is {this.props.score}
          </b>
             </p>
        </>
    )}
}