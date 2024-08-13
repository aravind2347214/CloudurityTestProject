import React from 'react'

function Actions(props) {
    const{
        setViewMode,
        setIsLoggedIn,
        isLoggedIn,
        searchTerm,
        handleSearch,
        ratingFilter,
        handleRatingFilter
        } = props
  return (
    <div>
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
      
    </div>
  )
}

export default Actions
