import { Fragment } from "react";
import { Done } from "@mui/icons-material";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

import FlexBox from "../../../../common/components/flexbox/FlexBox";
import FlexBetween from "../../../../common/components/flexbox/FlexBetween";
import PackageBox from "../../../../common/components/icons/PackageBox";
import TruckFilled from "../../../../common/components/icons/TruckFilled";
import Delivery from "../../../../common/components/icons/Delivery";
import useWindowSize from "../../../../common/hooks/useWindowSize";


const StyledFlexbox = styled(FlexBetween)(({ theme }) => ({
  flexWrap: "wrap",
  marginTop: "2rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  "& .line": {
    height: 4,
    minWidth: 50,
    flex: "1 1 0",
    [theme.breakpoints.down("sm")]: {
      flex: "unset",
      height: 50,
      minWidth: 4,
    },
  },
}));

const OrderStatus = ({orderStatus}) => {

  const orderStatusList = ["packaging", "shipping", "delivering", "complete"];
  const stepIconList = [PackageBox, TruckFilled, Delivery];
  const statusIndex = orderStatusList.indexOf(orderStatus);
  const width = useWindowSize();
  const theme = useTheme();
  const breakpoint = 350;

  return (
    <Card
    sx={{
      p: "2rem 1.5rem",
      mb: "30px",
    }}
  >
    <StyledFlexbox>
      {stepIconList.map((Icon, ind) => (
        <Fragment key={ind}>
          <Box position="relative">
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: ind <= statusIndex ? "primary.main" : "grey.300",
                color: ind <= statusIndex ? "grey.white" : "primary.main",
              }}
            >
              <Icon
                color="inherit"
                sx={{
                  fontSize: "32px",
                }}
              />
            </Avatar>
            {ind < statusIndex && (
              <Box position="absolute" right="0" top="0">
                <Avatar
                  sx={{
                    width: 22,
                    height: 22,
                    bgcolor: "grey.200",
                    color: "success.main",
                  }}
                >
                  <Done
                    color="inherit"
                    sx={{
                      fontSize: "1rem",
                    }}
                  />
                </Avatar>
              </Box>
            )}
          </Box>
          {ind < stepIconList.length - 1 && (
            <Box
              className="line"
              bgcolor={ind < statusIndex ? "primary.main" : "grey.300"}
            />
          )}
        </Fragment>
      ))}
    </StyledFlexbox>

    <FlexBox justifyContent={width < breakpoint ? "center" : "flex-end"}>
      <Typography
        p="0.5rem 1rem"
        textAlign="center"
        borderRadius="300px"
        color="primary.main"
        bgcolor="primary.light"
      >
        Estimated Delivery Date <b>4th October</b>
      </Typography>
    </FlexBox>
  </Card>
  );
};

export default OrderStatus;
