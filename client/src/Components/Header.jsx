import React from "react";

function Header({ filterItems }) {
  const handleClick = (e) => {
    const category = e.target.dataset.id;
    filterItems(category);
  };

  return (
    <header>
      <h1>Our Menu</h1>
      <div className="btn-container">
        <button className="filter-btn" data-id="all" onClick={handleClick}>
          All
        </button>
        <button className="filter-btn" data-id="breakfast" onClick={handleClick}>
          Breakfast
        </button>
        <button className="filter-btn" data-id="lunch" onClick={handleClick}>
          Lunch
        </button>
        <button className="filter-btn" data-id="shakes" onClick={handleClick}>
          Shakes
        </button>
      </div>
    </header>
  );
}

export default Header;
