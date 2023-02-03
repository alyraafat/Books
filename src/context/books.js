import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books,setBooks] = useState([]);

    const fetchBooks = useCallback(async ()=>{
        const res = await axios.get("http://localhost:3001/books");
        setBooks(res.data);
    },[]);

    const editBookById = async (id,title)=>{
        const res = await axios.put(`http://localhost:3001/books/${id}`,{
            title:title
        });

        const editedBooks = books.map((book)=>{
            if(book.id===id){
                return {...book,...res.data}
            }
            return book;
        });

        setBooks(editedBooks);
    };

    const deleteBookById = async (id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`);

        const deletedBooks = books.filter((book)=>{
            return book.id!==id;
        });

        setBooks(deletedBooks);
    };

    const createBook = async (title)=>{
        const res = await axios.post(`http://localhost:3001/books`,{
            title:title
        });

        const newBooks = [...books,{...res.data}]
        // or [...books,res.data]

        setBooks(newBooks);
    };

    const valueToShare = {
       books,
       setBooks,
       fetchBooks,
       editBookById,
       deleteBookById,
       createBook 
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;