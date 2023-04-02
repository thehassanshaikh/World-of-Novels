import "./SingleBook.css";
import { BsCoin } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { NovelsData } from "../../data";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { UserAuth } from "../../Context/AuthContext";

const SingleBook = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { setCartItem, addCartItem } = UserAuth();

  const [getNovel, setNewNovel] = useState(
    NovelsData.filter((novel) => novel.title === title)
  );

  const addCart = (novel) => {
    navigate(`/cart`);
    setCartItem([...addCartItem, novel]);
  };

  return (
    <>
      <NavBar />
      <section className="single-book-section">
        <div className="singleBook-section">
          <div className="img-and-details-con">
            <div className="single-img">
              <img src={getNovel[0]?.image} alt={getNovel[0]?.title} />
            </div>
            <div className="single-details">
              <h2 className="single-book-title">{getNovel[0]?.title}</h2>
              <h4 className="single-author">
                Author:{" "}
                <span className="single-grey">{getNovel[0]?.author}</span>
              </h4>
              <h4>
                Category:{" "}
                <span className="single-grey">{getNovel[0]?.category}</span>
              </h4>
              <p className="single-grey single-short-decription">
                {getNovel[0]?.shortDescription}
              </p>
              <h4>
                Sub category:{" "}
                <span>
                  {getNovel[0]?.subcategory.map((sub, index) => {
                    if (index === getNovel[0].subcategory.length - 1) {
                      return sub;
                    } else {
                      return sub + ", ";
                    }
                  })}
                </span>
              </h4>
              <h2 className="single-coin">
                <BsCoin />
                <span>{getNovel[0]?.coin}</span>
              </h2>
              <button
                className="single-add-btn"
                onClick={() => addCart(getNovel[0])}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="desc-con">
            <div className="single-description">
              <h4>Description:</h4>
              <p>{getNovel[0]?.description}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBook;
