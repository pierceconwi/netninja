import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    // pulls id from dynamic path /blogs/:id 
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/'+id);

    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2 className="mb-2 font-bold text-2xl text-center">{ blog.title }</h2>
                    <p className="mt-2 mb-2 text-right">Written by: { blog.author }</p>
                    <div className="mt-2 mb-1">{ blog.body }</div>
                </article>
            )}
        </div>
     );
};
 
export default BlogDetails;