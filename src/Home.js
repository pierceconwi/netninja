import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // React state set-up for welcome message
    const [name, setName] = useState("visitor");
    const [age, setAge] = useState(25);

    // React state set-up for blog data:
    const [blogs, setBlogs] = useState([
        {title: 'My New Website', body: 'Our new blog is finally live! Please look forward to more updates!', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'To celebrate the launch of our new blog, we will be chugging caviar in the break room this Friday at 6 PM.', author: 'yoshi', id: 2},
        {title: 'Web Dev Top Tips', body: 'Since we lost so many developers to caviar poisoning last Friday, I would like to step in with some quick dev tips to help you recent hires settle into your new roles.', author: 'mario', id: 3}
    ]);

    // Changes the React states to update welcome message
    const handleClick = (e) => {
        setName("button clicker!");
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
            <p>Hello, { name }! You are { age } years old.</p>
            <br />
            <button onClick={handleClick}>Click me</button>
            {/* Below: (e) is the click event, and can be passed like so back into the handeClickAgain() func for use within 
            <button onClick={(e) => {handleClickAgain('pierce', e)}}>Click me again</button> */}
            <hr />
           <BlogList blogs={blogs} title="All Blogs"/>
           <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/>
        </div>
     );
}
 
export default Home;