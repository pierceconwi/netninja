const BlogList = ({ blogs, title }) => {

    return ( 
        <div className="blog-list ml-2">
            <h2 className="text-3xl text-center font-bold uppercase underline mb-5 mt-2">{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview shadow" key={blog.id}>
                    <h2 className="text-2xl font-semibold uppercase mt-2">{ blog.title }</h2>
                    <p className="lowercase">Written by: { blog.author }</p>
                    <br />
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>
     );
};

export default BlogList;