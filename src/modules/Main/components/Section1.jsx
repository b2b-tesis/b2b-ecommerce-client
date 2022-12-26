import { Box, Container } from "@mui/material";
import Carousel from "../../../common/components/carousel/Carousel";
import CarouselCard1 from "../../../common/components/carousel/carouselCard/CarouselCard1";

const data = [
  {
    title: "Fashionable Collection",
    photoUrl: "/assets/images/banners/banner-15.jpg",
    description: "Get Free Shipping on all orders over $99.00",
    buttonText: "Shop Now",
    buttonLik: "#",
  },
  {
    title: "Fashionable Collection",
    photoUrl: "/assets/images/banners/banner-2.png",
    description: "Get Free Shipping on all orders over $99.00",
    buttonText: "Shop Now",
    buttonLik: "#",
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
          totalSlides={2}
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
