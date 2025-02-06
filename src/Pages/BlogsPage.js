import { Link, Outlet } from 'react-router-dom';
import { blogsData } from './../BlogsData';

function BlogsPage() {
    return(
        <>
        <h2>Blogs</h2>

        <Outlet></Outlet>

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