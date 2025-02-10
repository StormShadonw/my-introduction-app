import { Link, useNavigate, useParams } from 'react-router-dom';
import { useBlogs } from "./../BlogsData.js"; 
import { useAuth } from '../hooks/customHooks/auth.js';

function BlogPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    var urlParams = useParams();
    var slug = urlParams.slug;
    var blogs = useBlogs();

    var blog = blogs.blogsData.find(blog => blog.slug === slug);

    if(blog === undefined) {
        return <h2>Blog not found</h2>
     }

     const returnToBlogsPage = () => {
        navigate(-1);
     }

     var canDelete = auth.user?.isAdmin || auth.user?.username === blog.author;
     var canEdit = auth.user?.isAdmin || (auth.user?.isEditor || auth.user?.username === blog.author);

     const deleteBlog = (slug) => {
        var deleted = window.confirm("Press a button!");
        if(deleted) {
            blogs.blogsData.splice(blogs.blogsData.findIndex(blog => blog.slug === slug), 1);
        }
        console.log("Deleting blog with slug: ", slug);
     };

    return(
        <>

        <h2>Blog</h2>
        <h3>{blog.title}</h3>
        <button onClick={returnToBlogsPage}>Volver atras</button>
        <span>{blog.author}</span>
        <p>{blog.content}</p>
        {canDelete && (
            <>
                <button onClick={() => deleteBlog(blog.slug)}>Eliminar Blog</button>
            </>

        )}

        {canEdit && (
            <button>Eliminar comentarios</button>
        )}
        </>
    )
}

export { BlogPage };