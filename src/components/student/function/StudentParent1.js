import StudentChild1 from "./StudentChild1";
const StudentParent1 = () =>{
    return(
        <>
            <h1> I am Parent Function Component</h1>
            <h4>Students using Function components</h4>
            <StudentChild1
             name="Prasad" 
             address="Solapur,MH" 
             score="70%"/>
        </>
    )
}

export default StudentParent1;