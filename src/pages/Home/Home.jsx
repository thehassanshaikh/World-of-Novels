import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { NovelsData, fiction} from "../../data";
import "./Home.css"
import { SideBar } from "../../Components/SideBar/SideBar";
import { UserAuth } from "../../Context/AuthContext";

export const Home = () => {


   // const [getNovels, setNovels] = useState(NovelsData);
    const {novelsData}= UserAuth();
 

    return (

        <section className="home-section">
           <SideBar />
            <div className="books-container">
                {novelsData?.map((book, index) => (
                    <div className="card" key={index}>
                        <div className="img-con">
                            <img className="book-img" src={book.image} alt={book.title} />
                        </div>
                        <div className="book-details-con">
                            <ul className="book-ratings">
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiOutlineStar /></li>
                                <li><AiOutlineStar /></li>
                            </ul>
                            <h4 className="book-title">{book.title}</h4>
                            <h4 className="author">{book.author}</h4>
                            <div className="coins-container">
                                <div className="coin-condition-con">
                                    <p className="coins">Coin : {book.coin}</p>
                                    <p className="condition">Condition: <span className={book.condition === "0" ? 'Good' : book.condition === "1" ? 'Average' : 'Bad'}>{book.condition === "0" ? 'Good' : book.condition === "1" ? 'Average' : 'Bad'}
                                    </span></p>
                                </div>
                                <button className="coin-btn">View More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}