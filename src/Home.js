const Home = () => {
    let name = 'mario';

    const handleClick = (e) => {
        console.log('Hello, punks', e);
    };
        /* Below: (r) is the received value of (e) from the onClick anonymous function */
    const handleClickAgain = (name, r) => {
        console.log("Hello " + name, r.target);
    };

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <p>Hello, { name }!</p>
            <br />
            <button onClick={handleClick}>Click me</button>
            {/* Below: (e) is the click event, and can be passed like so back into the handeClickAgain() func for use within */}
            <button onClick={(e) => {handleClickAgain('pierce', e)}}>Click me again</button>
        </div>
     );
}
 
export default Home;