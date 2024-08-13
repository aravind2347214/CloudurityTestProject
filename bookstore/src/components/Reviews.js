import React from 'react'

function Reviews(props) {
    const {bookClicked,book}=props
  return (
<div>
                {bookClicked === book.id && (
                    <>
                        <strong>Rating: {book.rating} ⭐ </strong>
                        <h4>Reviews:</h4>
                        {book.reviews.map((review, index) => (
                            <div style={{border: "1px solid black", marginBottom: "5px"}} key={index}>
                                <p>{review.summary}</p>
                                <p>{review.description}</p>
                                <p>{review.date}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
  )
}

export default Reviews
