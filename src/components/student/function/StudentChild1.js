const StudentChild1 = (props) => {
    return(
        <>
                <p> I am StudentChild Class Component</p>
                <p> <b> Hello I'm  props.name <br/>
                 My address is {props.address}<br/>
                My score is {props.score}
                 </b>
                </p>
        </>
    )
}

export default StudentChild1;