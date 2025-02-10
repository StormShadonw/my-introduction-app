import { Link, Outlet } from 'react-router-dom';
import { useBlogs } from '../BlogsData';

function BlogsPage() {
    const blogs = useBlogs();
    return(
        <>
        <h2>Blogs</h2>

        <Outlet></Outlet>

        <ul>
            {blogs.blogsData.map(blog => (
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