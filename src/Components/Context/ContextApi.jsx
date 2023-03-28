// import { createContext } from "react"
import { useEffect, useState } from "react"

export const ContextApi = () => {
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

    console.log(books);


    return (
        <h1>Context Api</h1>
    )
}