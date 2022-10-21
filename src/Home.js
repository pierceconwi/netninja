import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    // React state set-up for welcome message
    const [name, setName] = useState("visitor");

    return (
        <div className="home">
            <h1 class="text-center text-2xl font-bold">Welcome</h1>
            <br />
            {/* <div>
                <img src={require("./images/logo192.png")} alt={"One option"}/>
                <img src={Picture} alt="Another option" />
            </div> */}
            <div className="text-center">
                <p>Hello, { name }!</p>
                <br />
                <button onClick={() => setName('button clicker')}>Click me</button>
            </div>
            <hr />
            { error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <br />
        </div>
     );
};
 
export default Home;