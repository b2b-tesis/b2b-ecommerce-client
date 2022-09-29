import { useState } from "react";

export const useSearchProduct = () => {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handleCurrentlyPage = (currentlyPage) => {
    setPage(currentlyPage);
    window.scroll(0,0);
  }

  const sortOptions = [
    {
      keyFilter:'l-h',
      label: "Precio Menor a Mayor",
      value: "Precio Menor a Mayor",
    },
    {
      keyFilter:'h-l',
      label: "Precio Mayor a Menor",
      value: "Precio Mayor a Menor",
    },
  ];

  return {
    sortOptions,
    handleCurrentlyPage,
    page,
    totalPages
  };
};

