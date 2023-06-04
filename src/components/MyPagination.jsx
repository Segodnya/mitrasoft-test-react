import React from "react";
import { Pagination } from "react-bootstrap";

const MyPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      style={{
        padding: "10px 0",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} />
      <>{`Page ${currentPage} of ${totalPages}`}</>
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} />
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
};

export default MyPagination;
