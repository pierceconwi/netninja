import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // React state set-up for welcome message
    const [name, setName] = useState("visitor");

    // React state set-up for blog data:
    const [blogs, setBlogs] = useState([
        {title: 'My New Website', body: 'Our new blog is finally live! Please look forward to more updates!', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'To celebrate the launch of our new blog, we will be chugging caviar in the break room this Friday at 6 PM.', author: 'yoshi', id: 2},
        {title: 'Web Dev Top Tips', body: 'Since we lost so many developers to caviar poisoning last Friday, I would like to step in with some quick dev tips to help you recent hires settle into your new roles.', author: 'mario', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    };

    // runs every render of this component (initial render, plus when React State changes - every subsequent render)
    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <p>Hello, { name }!</p>
            <br />
            <button onClick={() => setName('button clicker')}>Click me</button>
            <hr />
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
           {/* Blogs filtered by author via id:
           <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
        </div>
     );
}
 
export default Home;