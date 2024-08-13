import React from "react";
import Bookinfo from "./Bookinfo";
import LikeHandler from "./LikeHandler";
import Reviews from "./Reviews";
import AddReview from "./AddReview";

function Book(props) {
    const {
        setReviewDescription,
        reviewDescription,
        setBookClicked,
        viewMode,
        book,
        handleSubmitReview,
        setCurrentBookId,
        setReviewSummary,
        reviewSummary,
        bookClicked,
        isLoggedIn,
        handleDislike,
        currentBookId,
        handleLike,
        rating,
        setRating,
    } = props;
    return (
        <div
            onClick={() => setBookClicked(book.id)}
            key={book.id}
            style={{
                border: "2px solid black",
                padding: "10px",
                display: "flex",
                flexDirection: `${viewMode==="list"?"row":"column"}`,
                margin:"10px 0px"
               
            }}
        >
           <Bookinfo
           book ={book}
           viewMode={viewMode}
           bookClicked={bookClicked}
           />

            {/* Like and Dislike buttons for all users */}
            {isLoggedIn && bookClicked === book.id && (
                <LikeHandler
                handleLike={handleLike}
                handleDislike = {handleDislike} 
                book={handleDislike}
                />
            )}

            {/* Review section */}

            <Reviews
            book={book}
            bookClicked={bookClicked}
            />

            {/* Logged-in users can rate and write a review */}
            {isLoggedIn && currentBookId === book.id && bookClicked === book.id && (
               <AddReview
               rating ={rating}
               setRating ={setRating}
               reviewSummary={reviewSummary}
               setReviewSummary={setReviewSummary}
               reviewDescription={reviewDescription}
               setReviewDescription={setReviewDescription}
               handleSubmitReview={handleSubmitReview}
               isLoggedIn={isLoggedIn}
               currentBookId={currentBookId}
               setCurrentBookId={setCurrentBookId}
               bookClicked={bookClicked}
               book={book}
               />
            )}
        </div>
    );
}

export default Book;
