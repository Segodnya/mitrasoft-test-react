import React from "react";
import { Pagination } from "react-bootstrap";

const MyPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} />
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item onClick={() => onPageChange(totalPages)}>
        {totalPages}
      </Pagination.Item>
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} />
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
};

export default MyPagination;
