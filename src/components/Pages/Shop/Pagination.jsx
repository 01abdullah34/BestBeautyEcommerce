// Pagination.js
import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="pagination">
      {Array.from(
        { length: Math.ceil(totalItems / itemsPerPage) },
        (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
