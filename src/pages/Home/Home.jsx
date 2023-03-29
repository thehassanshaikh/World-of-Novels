import { useBooks } from "../../Context/Context"
import "./Home.css"
export const Home = () => {

    const books = useBooks();

    console.log(books)

    

    return (

        <section className="home-section">
            <div className="sidebar-container">
                <h1>Sidebar</h1>
            </div>
            <div className="books-container">
                <div className="card">
                    <div className="img-con">
                        <img src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <h4 className="book-title">How to win in Life</h4>
                    <h4 className="author">James Clear</h4>
                    <div className="coins-container">
                        <button className="coin-btn">View More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="img-con">
                        <img src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <h4 className="book-title">How to win in Life</h4>
                    <h4 className="author">James Clear</h4>
                    <div className="coins-container">
                        <button className="coin-btn">View More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="img-con">
                        <img src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <h4 className="book-title">How to win in Life</h4>
                    <h4 className="author">James Clear</h4>
                    <div className="coins-container">
                        <button className="coin-btn">View More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="img-con">
                        <img src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <h4 className="book-title">How to win in Life</h4>
                    <h4 className="author">James Clear</h4>
                    <div className="coins-container">
                        <button className="coin-btn">View More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="img-con">
                        <img src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <div className="details-con">
                        <h4 className="book-title">How to win in Life</h4>
                        <h4 className="author">James Clear</h4>
                    </div>
                    <div className="coins-container">
                        <button className="coin-btn">View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}