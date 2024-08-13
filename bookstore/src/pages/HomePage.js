import React, { useState } from 'react';
import { booksData } from '../data';
import Actions from '../components/Actions';
import Book from '../components/Book';

function HomePage() {
  // Dummy login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Book data
  const [books, setBooks] = useState(booksData);
  const [viewMode, setViewMode] = useState('grid'); // 'list' or 'grid'
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [likedBooks, setLikedBooks] = useState([]);
  const [dislikedBooks, setDislikedBooks] = useState([]);
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
    if (likedBooks.includes(id)) {
      // Remove like
      setLikedBooks(likedBooks.filter((bookId) => bookId !== id));
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id ? { ...book, likes: book.likes - 1 } : book
        )
      );
    } else {
      // Add like and remove dislike if it exists
      setLikedBooks([...likedBooks, id]);
      setDislikedBooks(dislikedBooks.filter((bookId) => bookId !== id));
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id
            ? { ...book, likes: book.likes + 1, dislikes: book.dislikes - (dislikedBooks.includes(id) ? 1 : 0) }
            : book
        )
      );
    }
  };


  // Handle dislike button click
  const handleDislike = (id) => {
    if (dislikedBooks.includes(id)) {
      // Remove dislike
      setDislikedBooks(dislikedBooks.filter((bookId) => bookId !== id));
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id ? { ...book, dislikes: book.dislikes - 1 } : book
        )
      );
    } else {
      // Add dislike and remove like if it exists
      setDislikedBooks([...dislikedBooks, id]);
      setLikedBooks(likedBooks.filter((bookId) => bookId !== id));
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id
            ? { ...book, dislikes: book.dislikes + 1, likes: book.likes - (likedBooks.includes(id) ? 1 : 0) }
            : book
        )
      );
    }
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
    <Actions
     setViewMode ={setViewMode}
     setIsLoggedIn={setIsLoggedIn}
     isLoggedIn = {isLoggedIn}
     searchTerm ={searchTerm}
     handleSearch = {handleSearch}
     ratingFilter = {ratingFilter}
     handleRatingFilter = {handleRatingFilter}/>

      {/* Book List */}
      <div style={{ display: viewMode === 'grid' ? 'grid' : 'block', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {filteredBooks.map((book) => (
          <Book
          setReviewDescription={setReviewDescription}
          reviewDescription={reviewDescription}
          setBookClicked={setBookClicked}
          viewMode={viewMode}
          book={book}
          handleSubmitReview={handleSubmitReview}
          setCurrentBookId={setCurrentBookId}
          setReviewSummary={setReviewSummary}
          reviewSummary={reviewSummary}
          bookClicked={bookClicked}
          isLoggedIn={isLoggedIn}
          handleDislike={handleDislike}
          currentBookId={currentBookId}
          handleLike={handleLike}
          rating={rating}
          setRating={setRating}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
