import { Link, useNavigate, useParams } from 'react-router-dom';
import { blogsData } from "./../BlogsData.js"; 
import { useAuth } from '../hooks/customHooks/auth.js';

function BlogPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    var urlParams = useParams();
    var slug = urlParams.slug;

    var blog = blogsData.find(blog => blog.slug === slug);

    if(blog === undefined) {
        return <h2>Blog not found</h2>
     }

     const returnToBlogsPage = () => {
        navigate(-1);
     }

    return(
        <>
        <h2>Blog</h2>
        <h3>{blog.title}</h3>
        <button onClick={returnToBlogsPage}>Volver atras</button>
        <span>{blog.author}</span>
        <p>{blog.content}</p>
        {(auth.user?.isAdmin || auth.user?.username === blog.author ) && (
            <button>Eliminar Blog</button>
        )}

        {(auth.user?.isAdmin || auth.user?.isEditor ) && (
            <button>Eliminar comentarios</button>
        )}
        </>
    )
}

export { BlogPage };