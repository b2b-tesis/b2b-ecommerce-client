import React from "react";
import { Box } from "@mui/material";

import { H5, H6, Paragraph, Span } from "../../common/components/Typography";
import FlexBox from "../../common/components/flexbox/FlexBox";
import BazaarAvatar from "../../common/components/BazaarAvatar";
import BazaarRating from "../../common/components/BazaarRating";

const ProductReview = () => {

  return (
    <Box>
      {commentList.map((item, ind) => (
            <Box mb={4} maxWidth="600px">
            <FlexBox alignItems="center" mb={2}>
              <BazaarAvatar src={item.imgUrl} height={48} width={48} />
              <Box ml={2}>
                <H5 mb={0.5}>{item.name}</H5>
                <FlexBox alignItems="center">
                  <BazaarRating value={item.rating} color="warn" readOnly />
                  <H6 mx={1.25}>{item.rating}</H6>
                  {/* <Span>{getDateDifference(item.date)}</Span> */}
                  <Span>{item.date}</Span>
                </FlexBox>
              </Box>
            </FlexBox>
      
            <Paragraph color="grey.700">{item.comment}</Paragraph>
          </Box>
      ))}
    </Box>
  );
};

const commentList = [
  {
    name: "Jannie Schumm",
    imgUrl: "/assets/images/faces/7.png",
    rating: 4.7,
    date: "2021-02-14",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
  },
  {
    name: "Joe Kenan",
    imgUrl: "/assets/images/faces/6.png",
    rating: 4.7,
    date: "2019-08-10",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
  },
  {
    name: "Jenifer Tulio",
    imgUrl: "/assets/images/faces/8.png",
    rating: 4.7,
    date: "2021-02-05",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
  },
];

export default ProductReview;
