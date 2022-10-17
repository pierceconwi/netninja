import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState("visitor");
    const [age, setAge] = useState(25);


    const handleClick = (e) => {
        setName("button master");
        setAge(34);
    };

        /* Below: (r) is the received value of (e) from the onClick anonymous function
    const handleClickAgain = (name, r) => {
        console.log("Hello " + name, r.target);
    }; */
    return (
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <p>Hello, { name }!</p>
            <p>You are { age } years old.</p>
            <br />
            <button onClick={handleClick}>Click me</button>
            {/* Below: (e) is the click event, and can be passed like so back into the handeClickAgain() func for use within 
            <button onClick={(e) => {handleClickAgain('pierce', e)}}>Click me again</button> */}
        </div>
     );
}
 
export default Home;