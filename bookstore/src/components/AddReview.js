import React from "react";

function AddReview(props) {
    const {
        rating,
        setRating,
        reviewSummary,
        setReviewSummary,
        reviewDescription,
        setReviewDescription,
        handleSubmitReview,
        isLoggedIn,
        currentBookId,
        setCurrentBookId,
        bookClicked,
        book

    } = props;
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "3px", textAlign: "left"}}>
            <h4>Write a Review:</h4>
            <label>Reating(0-5)</label>
            <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
                placeholder="Rating (1-5)"
            />
            <br />
            <label>Review(0-5)</label>
            <input
                type="text"
                value={reviewSummary}
                onChange={(e) => setReviewSummary(e.target.value)}
                placeholder="Review Summary"
            />
            <br />
            <label>Description</label>
            <textarea
                value={reviewDescription}
                onChange={(e) => setReviewDescription(e.target.value)}
                placeholder="Review Description"
                rows={5}
            />
            <button onClick={handleSubmitReview}>Submit Review</button>

            {isLoggedIn && currentBookId !== book.id && bookClicked === book.id && (
                <div>
                    <button onClick={() => setCurrentBookId(book.id)}>Rate & Write Review</button>
                </div>
            )}
        </div>
    );
}

export default AddReview;
