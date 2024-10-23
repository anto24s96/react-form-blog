import { useState } from "react";
import { FaTrashAlt as Trash } from "react-icons/fa";

const Form = () => {
    // State per memorizzare la lista di articoli del blog
    const [blog, setBlog] = useState([]);

    // Dati di default per un nuovo blog
    const defaultBlogData = {
        title: "",
        content: "",
        author: "",
    };

    // State per memorizzare i dati dell'articolo corrente in fase di creazione
    const [blogData, setBlogData] = useState(defaultBlogData);

    // Funzione per gestire il submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aggiungo l'articolo alla lista dei blog
        setBlog((array) => [...array, blogData]);
        //Resetto il campo input
        setBlogData(defaultBlogData);
    };

    // Funzione per rimuovere un articolo dal blog tramite indice
    const removeBlog = (indexToDelete) => {
        setBlog((array) => array.filter((_, i) => i !== indexToDelete));
    };

    // Funzione per aggiornare lo stato del form man mano che l'utente digita
    const changeBlogData = (key, newValue) => {
        setBlogData((data) => ({ ...data, [key]: newValue }));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="blog-form">
                <div className="form-element">
                    <label htmlFor="blog-title">Titolo Blog:</label>
                    <input
                        id="blog-title"
                        type="text"
                        value={blogData.title}
                        placeholder="Inserisci il titolo del blog"
                        onChange={(e) =>
                            changeBlogData("title", e.target.value)
                        }
                        className="input-field"
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="blog-content">Descrizione:</label>
                    <textarea
                        id="blog-content"
                        value={blogData.content}
                        rows="10"
                        cols="50"
                        placeholder="Inserisci una descrizione per il Blog..."
                        onChange={(e) =>
                            changeBlogData("content", e.target.value)
                        }
                        className="input-field"
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="blog-author">Autore:</label>
                    <input
                        id="blog-author"
                        type="text"
                        value={blogData.author}
                        placeholder="Inserisci l'autore"
                        onChange={(e) =>
                            changeBlogData("author", e.target.value)
                        }
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Aggiungi
                </button>
            </form>

            <h2 className="blog-list-title">Blogs:</h2>
            <div style={{ overflowY: "auto", height: "200px" }}>
                <ul className="blog-list">
                    {blog.map((post, index) => (
                        <li key={index} className="blog-item">
                            <span className="blog-title">
                                Titolo: {post.title}
                            </span>
                            <p>Descrizione: {post.content}</p>
                            <div>Autore: {post.author}</div>
                            <span className="delete-btn">
                                <Trash onClick={() => removeBlog(index)} />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Form;
