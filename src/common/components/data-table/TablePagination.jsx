import { Pagination, styled } from "@mui/material";
export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.grey[900],
    border: `1px solid transparent`,
  },
  "& .MuiPaginationItem-page:hover": {
    borderRadius: 20,
    backgroundColor: "primary",
    color: theme.palette.info.primary,
    border: `1px solid ${theme.palette.info.primary}`,
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    borderRadius: 20,
    backgroundColor: "primary",
    color: theme.palette.info.primary,
    border: `1px solid ${theme.palette.info.primary}`,
    ":hover": {
      backgroundColor: "primary",
    },
  },
  "& .MuiPaginationItem-previousNext": {
    margin: 10,
    borderRadius: 20,
    color: theme.palette.info.primary,
    border: `1px solid ${theme.palette.info.primary}`,
    "&:hover": {
      backgroundColor: "primary",
    },
  },
}));

const TablePagination = (props) => <StyledPagination {...props} />;

export default TablePagination;
