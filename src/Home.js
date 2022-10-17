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

    // runs every render of this component (initial render, plus when React State changes - every subsequent render)
    useEffect(() => {
        // grab json data via endpoint. fetch() returns a promise, so okay to use .then
        fetch('http://localhost:8000/blogs')
            // take the promise and converts to json
            .then(res => {
                return res.json(); 
            })
            // take result of previous return and use setBlogs() to render the now-ready json data
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <p>Hello, { name }!</p>
            <br />
            <button onClick={() => setName('button clicker')}>Click me</button>
            <hr />
            {isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
     );
}
 
export default Home;