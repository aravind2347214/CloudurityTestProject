import React from "react";

function Bookinfo(props) {
    const {book, viewMode, bookClicked} = props;
    return (
        <>
            <h2>{book.name}</h2>
            <div style={{
                display: "flex",
                flexDirection: `${viewMode==="list"?"row":"column"}`,
                 }}>
                {viewMode === "grid" && <img src={book.thumbnail} alt={book.name} height={200} width={140} />}
                <div style={{textAlign: "left", padding: "10px", display: "flex",flexDirection: `${viewMode==="list"?"row":"column"}`, gap: "5px"}}>
                    <p style={{background:"lightgray",padding:"5px"}}>Edition: {book.edition}</p>
                    <p style={{background:"lightgray",padding:"5px"}}>Year: {book.year}</p>
                    <p  style={{background:"lightgray",padding:"5px"}}> Author: {book.author}</p>
                    <p style={{background:"lightgray",padding:"5px"}}>Publisher: {book.publisher}</p>
                    <p style={{background:"lightgray",padding:"5px"}}>Likes: {book.likes}</p>
                    <p style={{background:"lightgray",padding:"5px"}}>Dislikes: {book.dislikes}</p>
                    {bookClicked === book.id && (
                        <>
                            <p>ISBN: {book.ISBN}</p>
                            <p>Rating: {book.rating}</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Bookinfo;
