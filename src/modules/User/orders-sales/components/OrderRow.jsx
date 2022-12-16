import Link from "next/link";
import East from "@mui/icons-material/East";
import { Box, Chip, IconButton, Typography } from "@mui/material";

import TableRow from "../../../../common/components/TableRow";
import { convertToDate } from "../../../../common/helpers/convertToDate"
import { getColor, getStatusSaleTranslate } from "../../../../common/helpers/getStatus";


const OrderRow = ({ item }) => {

  return (
    <Link href={`/usuario/ordenes-venta/${item._id}`}>
      <a>
        <TableRow
          sx={{
            my: "1rem",
            padding: "6px 18px",
          }}
        >
          
          <Box m={0.75}>
            <Chip
              size="small"
              label={getStatusSaleTranslate(item.status)}
              sx={{
                p: "0.25rem 0.5rem",
                fontSize: 12,
                color: !!getColor(item.status)
                  ? `${getColor(item.status)}.900`
                  : "inherit",
                backgroundColor: !!getColor(item.status)
                  ? `${getColor(item.status)}.100`
                  : "none",
              }}
            />
          </Box>
          <Typography className="pre" m={0.75} textAlign="left">
             {convertToDate(item.created_at)}
          </Typography>

          <Typography m={0.75} textAlign="left">
            ${item.total}
          </Typography>

          <Typography
            color="grey.600"
            textAlign="center"
            sx={{
              flex: "0 0 0 !important",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <IconButton>
              <East
                fontSize="small"
                color="inherit"
                sx={{
                  transform: ({ direction }) =>
                    `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
                }}
              />
            </IconButton>
          </Typography>
        </TableRow>
      </a>
    </Link>
  );
};

export default OrderRow;
