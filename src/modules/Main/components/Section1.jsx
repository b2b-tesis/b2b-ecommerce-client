import { Box, Container } from "@mui/material";
import Carousel from "../../../common/components/carousel/Carousel";
import CarouselCard1 from "../../../common/components/carousel/carouselCard/CarouselCard1";

const data = [
  {
    title: "Banner 1",
    photoUrl: "/assets/images/banners/banner-bazaar4.jpeg"
  },
  {
    title: "Banner 2",
    photoUrl: "/assets/images/banners/banner-bazaar5.jpeg"
  },
  {
    title: "Banner 3",
    photoUrl: "/assets/images/banners/banner-bazaar6.jpeg"
  },
];

const Section1 = () => {
  return (
    <Box bgcolor="grey.100" mb={7.5}>
      <Container
        sx={{
          py: 4,
        }}
      >
        <Carousel
          spacing="0px"
          totalSlides={3}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
        >
          {data.map((data, ind) => (
            <CarouselCard1 carousel={data} buttonColor="dark" key={ind} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Section1;
