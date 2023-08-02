"use client";
import React, { useState } from "react";
import { Pagination } from "flowbite-react";

export default function PaginationWithIcons({}) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
      }}
      showIcons
      totalPages={100}
    />
  );
}
