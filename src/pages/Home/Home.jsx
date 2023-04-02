import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { NovelsData, fiction } from "../../data";
import "./Home.css"
import { SideBar } from "../../Components/SideBar/SideBar";
import { UserAuth } from "../../Context/AuthContext";
import { BsCoin } from "react-icons/bs";
import { Link } from "react-router-dom";


export const Home = () => {


    // const [getNovels, setNovels] = useState(NovelsData);
    const { novelsData } = UserAuth();


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
                            <h4 className="book-title">{book.title}</h4>
                            <h4 className="author">{book.author}</h4>
                            <div className="coins-container">
                                <div className="coin-condition-con">
                                    <p className="coins"><BsCoin />{book.coin}</p>
                                    <p className="condition">Condition: <span className={book.condition === "0" ? 'Good' : book.condition === "1" ? 'Average' : 'Bad'}>{book.condition === "0" ? 'Good' : book.condition === "1" ? 'Average' : 'Bad'}
                                    </span></p>
                                </div>
                                <Link to={`/singleBook/${book.title}`}><button className="coin-btn">View More</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}