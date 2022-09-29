import { useEffect, useRef, useState } from "react"; 

import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Box, Card, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import BazaarButton from "../BazaarButton";
import { useRouter } from "next/router";

export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
})); 

export const SearchResultCard = styled(Card)(() => ({
  zIndex: 99,
  top: "100%",
  width: "100%",
  position: "absolute",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
}));

const SearchBox = () => {
  const parentRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const { push } = useRouter();


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);    
  };

  const handleRedirectToSearch = () => {
    if(searchTerm.trim().length === 0) return;
    push(`/producto/busqueda/${searchTerm}`);
  }

  const categoryDropdown = (
        <BazaarButton
          type="submit"
          onClick={handleRedirectToSearch}
          variant="contained"
          sx={{
            height: 44,
            paddingRight:5,
            paddingLeft:5,
          }}
        >
          Buscar
        </BazaarButton>
  );


  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        fullWidth
        name="searchTerm"
        value={searchTerm}
        variant="outlined"
        placeholder="Busca sólo productos"
        onChange={handleSearch}
        InputProps={{
          sx: {
            height: 44,
            paddingRight: 0,
            borderRadius: 300,
            color: "grey.700",
            overflow: "hidden",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
          endAdornment: categoryDropdown,
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />

    </Box>
  );
};

export default SearchBox;
