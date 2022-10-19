
export const useListProducts = () => {

  const tableHeading = [
    {
      id: "name",
      label: "Name",
      align: "left",
    },
    {
      id: "isAvailable",
      label: "Disponibilidad",
      align: "center",
    },
      {
      id: "category",
      label: "Categoría",
      align: "center",
    },
    {
      id: "action",
      label: "Action",
      align: "center",
    },
  ];


  return {
    tableHeading
  };
};

