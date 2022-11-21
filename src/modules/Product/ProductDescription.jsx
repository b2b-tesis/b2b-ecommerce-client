import { Box } from "@mui/material";
import { H3 } from "../../common/components/Typography";

const ProductDescription = ({description}) => {
  return (
    <Box>
      <H3 mb={2}>Especificación:</H3>
      <Box>
       {description}
      </Box>
    </Box>
  );
};

export default ProductDescription;
