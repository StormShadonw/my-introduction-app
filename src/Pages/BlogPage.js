import { Link, useParams } from 'react-router-dom';
import { blogsData } from "./../BlogsData.js"; 

function BlogPage() {
    var urlParams = useParams();
    var slug = urlParams.slug;

    var blog = blogsData.find(blog => blog.slug === slug);

    if(blog === undefined) {
        return <h2>Blog not found</h2>
     }

    return(
        <>
        <h2>Blogs Page</h2>
        <h3>{blog.title}</h3>
        <span>{blog.author}</span>
        <p>{blog.content}</p>
        </>
    )
}

export { BlogPage };