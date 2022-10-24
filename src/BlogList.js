import React from 'react';
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return ( 
        <div className="blog-list ml-2">
            <h2 className="text-xl text-center font-bold uppercase underline mb-5 mt-2">{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview shadow" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2 className="text-2xl font-semibold uppercase mt-2 hover:underline">{ blog.title }</h2>
                    </Link>
                    <p className="lowercase text-right">Written by: { blog.author }</p>
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>
     );
}

export default BlogList;