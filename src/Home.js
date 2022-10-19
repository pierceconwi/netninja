import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // React state set-up for welcome message
    const [name, setName] = useState("visitor");

    // React state set-up for blog data:
    const [blogs, setBlogs] = useState(null);
    // React state set-up for data
    const [isLoading, setIsLoading] = useState(true);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    };
    // React state set-up for error catching
    const [error, setError] = useState(null);

    // runs every render of this component (initial render, plus when React State changes - every subsequent render)
    useEffect(() => {
        // grab json data via endpoint. fetch() returns a promise, so okay to use .then
        fetch('http://localhost:8000/blogs')
            // take the promise and converts to json
            .then(res => {
                // throw an error if the promise's status code is NOT "ok"
                if(!res.ok) {
                    throw Error('Could not fetch data from resource');
                }
                // then complete conversion of json data
                return res.json(); 
            })
            // take result of previous return and use setBlogs() to render the now-ready json data
            .then(data => {
                setBlogs(data);
                // now that data is loaded and rendered, change state of loading status
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                // catch any errors
                setError(err.message);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="home">
            <h1>Homepage</h1>
            <br />
            <div>
                <img src={require("./images/logo192.png")} alt={"One option"}/>
                {/* <img src={Picture} alt="Another option" /> */}
            </div>
            <div className="text-center">
                <p>Hello, { name }!</p>
                <br />
                <button onClick={() => setName('button clicker')}>Click me</button>
            </div>
            <hr />
            { error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
            <br />
        </div>
     );
}
 
export default Home;