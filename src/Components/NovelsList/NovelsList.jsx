// import { createContext } from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { UserAuth } from "../../Context/AuthContext";

export const NovelsList = () => {
    const [books, setBooks] = useState([]);
    const {logOut,user} = UserAuth();
    const BOOKS_API_KEYS = "R9RzIuWAbOrLBX5GIoyFdvZ9nAAAOL1M";
    const navigate=useNavigate();
    const signout = async() =>{
        try {
         console.log("Hello")
              await logOut();
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(() => {
        const fetchBooks = async () => {
            let response = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${BOOKS_API_KEYS}`)
            response = await response.json();
            setBooks(response.results.books)
        }
        fetchBooks();
    }, [])

    useEffect(() => {
        if (!user) {
          navigate('/')
        }},[user])

    console.log(books);


    return (
        <>
        <h1>Context Api</h1>
        <button onClick={signout}>Sign Out</button>
        </>
    )
}