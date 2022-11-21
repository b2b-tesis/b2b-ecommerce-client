import React from "react"; 
import { Call, Place } from "@mui/icons-material";
import DescriptionIcon from '@mui/icons-material/Description';
import { Avatar, Box, Button, Card, Rating } from "@mui/material";

import FlexBox from "../../../../common/components/flexbox/FlexBox";
import FlexBetween from "../../../../common/components/flexbox/FlexBetween";
import { H3, Span } from "../../../../common/components/Typography";

const ShopIntroCard = ({userData}) => {
  const {picture, banner, name, social_media, terms, phone, description, province, district} = userData;

  return (
    <Card
      sx={{
        mb: 4,
        pb: 2.5,
      }}
    >
      <Box
        height="202px"
        sx={{
          background: `url(${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${banner}) center/cover`,
        }}
      />
      <FlexBox mt={-8} px={3.75} flexWrap="wrap">
        <Avatar
          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${picture}`}
          sx={{
            mr: "37px",
            width: "120px",
            height: "120px",
            border: "4px solid",
            borderColor: "grey.100",
          }}
        />

        <Box
          sx={{
            flex: "1 1 0",
            minWidth: "250px",
            "@media only screen and (max-width: 500px)": {
              marginLeft: 0,
            },
          }}
        >
          <FlexBetween flexWrap="wrap" mt={0.375} mb={3}>
            <Box
              my={1}
              p="4px 16px"
              borderRadius="4px"
              display="inline-block"
              bgcolor="secondary.main"
            >
              <H3 fontWeight="600" color="grey.100">
                {name}
              </H3>
            </Box>
          </FlexBetween>

          <FlexBetween flexWrap="wrap">
            <Box>

              <FlexBox color="grey.600" gap={1} mb={1} maxWidth={270}>
                <Place
                  fontSize="small"
                  sx={{
                    fontSize: 18,
                    mt: "3px",
                  }}
                />
                <Span color="grey.600">
                  Provincia y Distrito: {province} - {district} 
                </Span>
              </FlexBox>

              <FlexBox color="grey.600" gap={1} mb={1}>
                <Call
                  fontSize="small"
                  sx={{
                    fontSize: 18,
                    mt: "2px",
                  }}
                />
                <Span color="grey.600">{phone}</Span>
              </FlexBox>
              <FlexBox color="grey.600" gap={1} mb={1}>
                <DescriptionIcon
                  fontSize="small"
                  sx={{
                    fontSize: 18,
                    mt: "2px",
                  }}
                />
               <div style={{display:"flex"}}>
                 <Span color="grey.600">{description}</Span>
               </div>
              </FlexBox>

            </Box>

            <FlexBox gap={2}>
              <a href={social_media.facebook} target="_blank">
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    my: 1.5,
                  }}
                >
                  Contactar por Facebook
                </Button>
              </a>
              <a href={terms} target="_blank">
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    my: 1.5,
                  }}
                >
                  Términos y Condiciones
                </Button>
              </a>
            </FlexBox>
          </FlexBetween>
        </Box>
      </FlexBox>
    </Card>
  );
};

export default ShopIntroCard;
