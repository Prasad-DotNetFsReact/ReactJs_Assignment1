import { useState } from "react";

const Details = () => {
    const[name,setName] = useState('');
    const[address,setAddress]= useState('');
    
    const handleNameChange = (e) => {
        setName(e.target.value);
      };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert(`Name: ${name}\nAddress: ${address}`);
  
        setName('');
        setAddress('');
      };


    return(
        <>
            <h4>Your Details</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:
                        <input typeof="text" value={name} onChange={handleNameChange} />
                    </label>
                </div>
                <div>
                    <label>address:
                        <input type="text" value={address} onChange={handleAddressChange}/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Details;