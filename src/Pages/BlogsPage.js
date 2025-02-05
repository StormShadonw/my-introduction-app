import { Link } from 'react-router-dom';
import { blogsData } from './../BlogsData';

function BlogsPage() {
    return(
        <>
        <h2>Blogs Page</h2>
        <ul>
            {blogsData.map(blog => (
                <BlogLink blog={blog}></BlogLink>
            ))}
        </ul>
        </>
    )
}

export { BlogsPage };

function BlogLink({blog}) {
    return(
        <li>
            <Link to={blog.slug}>{blog.title}</Link>
        </li>
    )
}