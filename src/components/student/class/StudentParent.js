import { Component } from "react";
import StudentChild from "./StudentChild";
 
export default class StudentParent extends Component
{
    render(){
        return(
         <>
        <h1> I am Parent Class Component</h1>
        <h4>Students using class components</h4>

        <StudentChild name="Prasad" address="Solapur,MH" score="70%"/>
        </>
    )}
}