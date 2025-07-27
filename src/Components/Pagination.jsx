import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        style={{
          margin: "0 5px",
          padding: "6px 10px",
          //   border: "1px solid #ccc",
          //   background: "#eee",
          cursor: "pointer",
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        <IoIosArrowBack />
      </button>

      {/* Page numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          style={{
            background: currentPage === num ? "#E5E7EB" : "#fff",
            color: currentPage === num ? "#4B5563" : "#000",
          }}
          className="mx-1 px-3 py-1 shadow-2xl shadow-blue-900 cursor-pointer rounded-md font-semibold"
        >
          {num}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{
          margin: "0 5px",
          padding: "6px 10px",
          //   border: "1px solid #ccc",
          //   background: "#eee",
          cursor: "pointer",
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
