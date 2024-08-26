
const EventDemo = () => {

    const EventL1 = () =>{
        alert('Hello');
    };
    const EventL2 = () =>{
       alert('Bye');
    };

    return(
        <>
        <button onClick={EventL1}
        >Click Me!</button>
        <button onClick={EventL2}
        >Click Me!</button>
        </>
    )
}

export default EventDemo;