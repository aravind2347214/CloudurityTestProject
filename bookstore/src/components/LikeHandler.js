import React from 'react'

function LikeHandler(props) {
    const { handleLike, handleDislike ,book} = props;
  return (
                  <div>
                    <div onClick={() => handleLike(book.id)}>👍 Like ({book.likes})</div>
                    <div onClick={() => handleDislike(book.id)}>👎 Dislike ({book.dislikes})</div>
                </div>
  
  
  )
}

export default LikeHandler
