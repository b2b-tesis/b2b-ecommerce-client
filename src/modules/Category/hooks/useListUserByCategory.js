import { useState } from "react";

export const useListByUserCategory = () => {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handleCurrentlyPage = (currentlyPage) => {
    setPage(currentlyPage);
    window.scroll(0,0);
  }

  const sortOptions = [
    {
      keyFilter:'a-z',
      label: "A-Z",
      value: "A-Z",
    },
    {
      keyFilter:'z-a',
      label: "Z-A",
      value: "Z-A",
    },
  ];
  
  const shopList = [
    {
      rating: 5,
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic.png",
      coverImgUrl: "/assets/images/banners/cycle.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 5,
      name: "Scroll Through",
      phone: "(613) 343-9004",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(1).png",
      coverImgUrl: "/assets/images/banners/banner.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 4.5,
      name: "Coveted Clicks",
      phone: "(613) 343-9004",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(2).png",
      coverImgUrl: "/assets/images/banners/banner-3.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 4,
      phone: "(613) 343-9004",
      name: "Constant Shoppers",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(3).png",
      coverImgUrl: "/assets/images/banners/banner-4.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 5,
      name: "Keyboard Kiosk",
      phone: "(613) 343-9004",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(4).png",
      coverImgUrl: "/assets/images/banners/banner-5.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 5,
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(5).png",
      coverImgUrl: "/assets/images/banners/banner-6.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 4,
      phone: "(613) 343-9004",
      name: "Word Wide Wishes",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(6).png",
      coverImgUrl: "/assets/images/banners/banner-7.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 5,
      name: "Cybershop",
      phone: "(613) 343-9004",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(7).png",
      coverImgUrl: "/assets/images/banners/banner-8.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
    {
      rating: 5,
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      shopUrl: "/shops/53244445",
      imgUrl: "/assets/images/faces/propic(8).png",
      coverImgUrl: "/assets/images/banners/banner-9.png",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    },
  ];
  return{
    sortOptions, shopList, handleCurrentlyPage, totalPages 
  }
}