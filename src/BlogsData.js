import React from "react";

const BlogsContext = React.createContext();


function BlogsProvider({ children }) {

    const blogsData = [
        {
            title: "Blog Post 1",
            slug: "1",
            content: "This is the first blog post",
            author: "llopez",
        },
        {
            title: "Blog Post 2",
            slug: "2",
            content: "This is the second blog post",
            author: "John Lopez",
        },
        {
            title: "Blog Post 3",
            slug: "3",
            content: "This is the third blog post",
            author: "Angela Sullivan",
        },
    ];

    const [blogs, setBlogs] = React.useState(blogsData);

    const removeBlog = (slug) => {
        setBlogs(blogs.filter(blog => blog.slug !== slug));
    }


    const blogsValue = { blogs, removeBlog };
    
    return (
        <BlogsContext.Provider value={blogsValue}>
            {children}
        </BlogsContext.Provider>
    )
}

function useBlogs() {
    const blogs = React.useContext(BlogsContext);
    return blogs;
}

export { 
    BlogsProvider,
    useBlogs
}