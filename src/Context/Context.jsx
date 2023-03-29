import { createContext } from "react"
import { useEffect, useState, useContext } from "react"


const BookData = createContext();
export const useBooks = () => {
    return useContext(BookData)
}

export const BooksList = ({children}) => {
    const [books, setBooks] = useState([]);

    const BOOKS_API_KEYS = "R9RzIuWAbOrLBX5GIoyFdvZ9nAAAOL1M";

    useEffect(() => {
        const fetchBooks = async () => {
            let response = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${BOOKS_API_KEYS}`)
            response = await response.json();
            setBooks(response.results.books)
        }
        fetchBooks();
    }, [])

    // console.log(books);

   


    return (
        <BookData.Provider value={books}>
            {children}
        </BookData.Provider>
    )
}