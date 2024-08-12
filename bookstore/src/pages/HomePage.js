import React, { useState } from 'react';
import { booksData } from '../data';

function HomePage() {
  // Dummy login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Book data
  const [books, setBooks] = useState(booksData);
  const [viewMode, setViewMode] = useState('grid'); // 'list' or 'grid'

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  // State for rating and review
  const [currentBookId, setCurrentBookId] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle rating filter change
  const handleRatingFilter = (e) => {
    setRatingFilter(parseFloat(e.target.value));
  };

  // Handle like button click
  const handleLike = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, likes: book.likes + 1 } : book
      )
    );
  };

  // Handle dislike button click
  const handleDislike = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, dislikes: book.dislikes + 1 } : book
      )
    );
  };

  // Handle rating and review submission
  const handleSubmitReview = () => {
    if (currentBookId && rating > 0 && reviewSummary && reviewDescription) {
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === currentBookId
            ? {
                ...book,
                reviews: [
                  ...book.reviews,
                  {
                    rating,
                    summary: reviewSummary,
                    description: reviewDescription,
                    date: new Date().toLocaleDateString(),
                  },
                ],
              }
            : book
        )
      );
      // Reset state after submission
      setCurrentBookId(null);
      setRating(0);
      setReviewSummary('');
      setReviewDescription('');
    }
  };

  // Filtered books based on search and rating
  const filteredBooks = books.filter(
    (book) =>
      (book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.ISBN.includes(searchTerm)) &&
      book.rating >= ratingFilter
  );

  const [bookClicked,setBookClicked]=useState(null)

  return (
    <div style={{ padding: '100px' }}>
      {/* Login button */}
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

        {/* Search bar */}
        <input
         
         style={{width:"500px"}}
          type="text"
          placeholder="Search by name, author, publisher, or ISBN"
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Rating filter */}
        <select value={ratingFilter} onChange={handleRatingFilter}>
          <option value={0}>All Ratings</option>
          <option value={4}>4 Stars & Above</option>
          <option value={4.5}>4.5 Stars & Above</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>

      {/* View toggle buttons */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', margin: 'auto', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={() => setViewMode('list')}>List View</button>
        <button onClick={() => setViewMode('grid')}>Grid View</button>
      </div>

      {/* Book List */}
      <div style={{ display: viewMode === 'grid' ? 'grid' : 'block', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {filteredBooks.map((book) => (
          <div
          onClick={()=>setBookClicked(book.id)}
           key={book.id} style={{ border: '2px solid black', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>{book.name}</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={book.thumbnail} alt={book.name} height={200} width={140} />
              <div style={{ textAlign: 'left', padding: '10px', display: 'flex', flexDirection: 'column', gap: '0px' }}>
                <p>Edition: {book.edition}</p>
                <p>Year: {book.year}</p>
                <p>Author: {book.author}</p>
                <p>Publisher: {book.publisher}</p>
               {bookClicked === book.id&&
               <>
                <p>ISBN: {book.ISBN}</p>
                <p>Rating: {book.rating}</p>
                <p>Likes: {book.likes}</p>
                <p>Dislikes: {book.dislikes}</p>
               </>}
              </div>
            </div>

            {/* Like and Dislike buttons for all users */}
            {isLoggedIn && bookClicked === book.id&& (
              <div>
                <button onClick={() => handleLike(book.id)}>👍 Like ({book.likes})</button>
                <button onClick={() => handleDislike(book.id)}>👎 Dislike ({book.dislikes})</button>
              </div>
            )}

            {/* Review section */}
            {bookClicked === book.id&&
            <div>
              <strong>Rating: {book.rating} ⭐ </strong>
              <h4>Reviews:</h4>
              {book.reviews.map((review, index) => (
                <div style={{border:"1px solid black", marginBottom:"5px"}} key={index}>
                  <p>{review.summary}</p>
                  <p>{review.description}</p>
                  <p>{review.date}</p>
                </div>
              ))}
            </div>}

            {/* Logged-in users can rate and write a review */}
            {isLoggedIn && currentBookId === book.id && bookClicked === book.id&& (
              <div style={{display:"flex",flexDirection:"column",gap:"3px" ,textAlign:"left"}}>
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
                <br/>
                <label>Review(0-5)</label>
                <input
                  type="text"
                  value={reviewSummary}
                  onChange={(e) => setReviewSummary(e.target.value)}
                  placeholder="Review Summary"
                />
                <br/>
                <label>Description</label>
                <textarea
                  value={reviewDescription}
                  onChange={(e) => setReviewDescription(e.target.value)}
                  placeholder="Review Description"
                  rows={5}
                />
                <button onClick={handleSubmitReview}>Submit Review</button>
              </div>
            )}
            {isLoggedIn && currentBookId !== book.id && bookClicked === book.id&&(
              <div>
                <button onClick={() => setCurrentBookId(book.id)}>Rate & Write Review</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
