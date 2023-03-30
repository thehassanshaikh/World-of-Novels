import { useBooks } from "../../Context/Context"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
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
                        <img className="book-img" src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <div className="book-details-con">
                        <ul className="book-ratings">
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiOutlineStar /></li>
                            <li><AiOutlineStar /></li>
                        </ul>
                        <h4 className="book-title">How to win in Life</h4>
                        <h4 className="author">By James Clear</h4>
                        <div className="coins-container">
                            <div className="coin-condition-con">
                                <p className="coins">Coin : 30</p>
                                <p className="condition">Condition: <span className="good">Good</span></p>
                            </div>
                            <button className="coin-btn">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-con">
                        <img className="book-img" src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <div className="book-details-con">
                        <ul className="book-ratings">
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiOutlineStar /></li>
                            <li><AiOutlineStar /></li>
                        </ul>
                        <h4 className="book-title">How to win in Life</h4>
                        <h4 className="author">By James Clear</h4>
                        <div className="coins-container">
                            <div className="coin-condition-con">
                                <p className="coins">Coin : 30</p>
                                <p className="condition">Condition: <span className="good">Good</span></p>
                            </div>
                            <button className="coin-btn">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-con">
                        <img className="book-img" src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <div className="book-details-con">
                        <ul className="book-ratings">
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiOutlineStar /></li>
                            <li><AiOutlineStar /></li>
                        </ul>
                        <h4 className="book-title">How to win in Life</h4>
                        <h4 className="author">By James Clear</h4>
                        <div className="coins-container">
                            <div className="coin-condition-con">
                                <p className="coins">Coin : 30</p>
                                <p className="condition">Condition: <span className="good">Good</span></p>
                            </div>
                            <button className="coin-btn">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-con">
                        <img className="book-img" src="https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg" alt="" />
                    </div>
                    <div className="book-details-con">
                        <ul className="book-ratings">
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiFillStar /></li>
                            <li><AiOutlineStar /></li>
                            <li><AiOutlineStar /></li>
                        </ul>
                        <h4 className="book-title">How to win in Life</h4>
                        <h4 className="author">By James Clear</h4>
                        <div className="coins-container">
                            <div className="coin-condition-con">
                                <p className="coins">Coin : 30</p>
                                <p className="condition">Condition: <span className="good">Good</span></p>
                            </div>
                            <button className="coin-btn">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}