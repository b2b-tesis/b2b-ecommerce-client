import { useEffect, useRef, useState } from "react"; // styled components
import Link from "next/link";

import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Box, Card, MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import BazaarButton from "../BazaarButton";

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
  const [resultList, setResultList] = useState([]);
  const parentRef = useRef();
  const [message, setMessage] = useState('');


  const handleDocumentClick = () => setResultList([]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleSearch = event => {
    setMessage(event.target.value);

    
  };

  const handleConsoleLog = () => {
    console.log(message);
  }

  const categoryDropdown = (
        <BazaarButton
          type="submit"
          onClick={handleConsoleLog}
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
        name="message"
        value={message}
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

      {!!resultList.length && (
        <SearchResultCard elevation={2}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item} passHref>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )}
    </Box>
  );
};

export default SearchBox;
