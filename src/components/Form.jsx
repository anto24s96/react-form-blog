import { useState } from "react";
import { FaTrashAlt as Trash } from "react-icons/fa";

const Form = () => {
    // State per memorizzare la lista di articoli del blog
    const [blog, setBlog] = useState([]);

    // Dati di default per un nuovo blog (solo il titolo per ora)
    const defaultBlogData = {
        title: "",
    };

    // State per memorizzare i dati dell'articolo corrente in fase di creazione
    const [blogData, setBlogData] = useState(defaultBlogData);

    // Funzione per gestire il submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        setBlog((array) => [...array, blogData]); // Aggiungo l'articolo alla lista dei blog
        setBlogData(defaultBlogData); // Resetta il form dopo l'invio
    };

    // Funzione per rimuovere un articolo dal blog, dato l'indice
    const removeBlog = (indexToDelete) => {
        setBlog((array) => array.filter((_, i) => i !== indexToDelete)); // Filtra fuori l'articolo da rimuovere
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
                <button type="submit" className="submit-btn">
                    Aggiungi
                </button>
            </form>

            <h2 className="blog-list-title">Blogs:</h2>
            <ul className="blog-list">
                {blog.map((post, index) => (
                    <li key={index} className="blog-item">
                        <span className="blog-title">{post.title}</span>
                        <div className="delete-btn">
                            <Trash onClick={() => removeBlog(index)} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Form;
