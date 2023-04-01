import "./SingleBook.css"

const SingleBook = () => {
    return (
        <section className="single-book-section">
            <div className="singleBook-section">
                <div className="img-and-details-con">
                    <div className="single-img">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.qjVUfudkp3vzpaTQfmLXvQHaLH&pid=Api&P=0" alt="" />
                    </div>
                    <div className="single-details">
                        <h2 className="single-book-title">The Secret Life of Bees</h2>
                        <h4 className="single-author"><span>Author:</span> Julia Rodriguez</h4>
                        <h4 className="single-grey">Category: Fantacy</h4>
                        <p className="single-grey single-short-decription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio molestias expedita tempore aperiam velit magnam</p>
                        <h2 className="single-coin">Coin: <span>351</span></h2>
                        <button className="single-add-btn">Add to Cart</button>
                    </div>
                </div>
                <div className="desc-con">
                    <div className="single-description">
                        <h4>Description:</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, dolore asperiores distinctio ullam voluptates atque earum? Obcaecati sit illo delectus non debitis doloremque deleniti eaque, alias tempore aliquam ipsam ducimus?</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SingleBook;