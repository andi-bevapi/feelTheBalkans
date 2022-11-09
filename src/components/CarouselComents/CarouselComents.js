import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import StraightIcon from "@mui/icons-material/Straight";
import "./CarouselComents.css";

const CarouselComents = () => {
  const [imagePost, setImagePost] = useState(0);
  const postCarousel = [
    {
      image:
        "https://static.showit.co/1200/PxcnkD_QTK6NUX6oMAHW5g/shared/la-so-vk4vjtnvrtg-unsplash.jpg",
      postTitle: "Happy travelers",
      postDescription:
        "If you are looking for a domestic adventure that has everything you could possibly think of… Utah is the place for you! Utah is home to 3.5 geographic regions 5 national parks, 45 state parks, and is filled with plenty of historic sites and monuments. It has perfect powder for skiers and snowboarders, rugged red",
      readMore: "Read More",
    },
    {
      image:
        "https://static.showit.co/1200/E8dTI7yUTeu43R89VMRAvQ/shared/anh-q-tran-rzizmvbjkbc-unsplash.jpg",
      postTitle: "Happy travelers",
      postDescription:
        "Jennifer Jacob recently returned from a FAM trip, hosted by Crafted Ireland and Index Select, where she had the opportunity to stay at Ashford Castle. Jennifer arrived via a helicopter transfer, on the helipad, situated right at the front of the property. There is no better way to arrive to a Castle than that. Keep ",
      readMore: "Read More",
    },
    {
      image:
        "https://static.showit.co/1200/lUVaQ1wWRhy6jej-GvYjkw/shared/dimitri-iakymuk-7caibmzc9ae-unsplash.jpg",
      postTitle: "Happy travelers",
      postDescription:
        "Jennifer Jacob recently returned from a FAM trip through Crafted Ireland, where she had the opportunity to stay at one of Ireland’s top five-star luxury hotels, Adare Manor. This resort is a neo-gothic masterpiece that has vast history, impeccable service, a world class staff, and a truly spectacular setting. The stunning 840-acre property houses 104",
      readMore: "Read More",
    },
    {
      image:
        "https://static.showit.co/1200/tTHV9sjSTE-4u32YtW235Q/shared/johnny-africa-_zx0s27d3fw-unsplash.jpg",
      postTitle: "Happy travelers",
      postDescription:
        "We have gathered our top 5 favorite tours in Cancun and we wanted to share them with you. Keep reading to see our picks, and if you’d like, you can book the tour for yourself for your upcoming trip to Cancun, Mexico. Salud! 1. Chichen Itza All-Inclusive, Tequila tasting, Cenote Swim, Buffet & Valladolid Get",
      readMore: "Read More",
    },
    {
      image:
        "https://explorateurtravel.com/wp-content/uploads/2021/12/kate-hliznitsova-KrwKynN1eYo-unsplash-scaled.jpg",
      postTitle: "Happy travelers",
      postDescription:
        "We have gathered our top 5 favorite tours in Napa and we wanted to share them with you. Keep reading to see our picks, and if you’d like, you can book the tour for yourself for your upcoming trip to California. Cheers! All links are commissionable. 1. Private Limousine Wine Country Tour of Napa Experience",
      readMore: "Read More",
    },
  ];

  const handleBack = () => {
    setImagePost((prevState) => {
      if (prevState <= 0) {
        return (prevState = postCarousel.length - 1);
      } else {
        return prevState - 1;
      }
    });
  };

  const handleForward = () => {
    setImagePost((prevState) => {
      if (prevState >= postCarousel.length - 1) {
        return (prevState = 0);
      } else {
        return prevState + 1;
      }
    });
  };

  return (
    <>
      <Grid
        item
        md={12}
        className="displayFlex carouselPosts"
        style={{ backgroundImage: `url(${postCarousel[imagePost].image})` }}
      >
        <Grid item md={2} className="imageCarousel" />
        <Grid item md={1} sm={1} className="leftButtonContainer">
          <Button className="goBackButton" onClick={handleBack}>
            <StraightIcon className="goBack" />
          </Button>
        </Grid>

        <Grid item md={9} className="carouselContainer">
          <div className="carouselPostInfo">
              <Link to={"/"}>
                  <h1>{postCarousel[imagePost].postTitle}</h1>
              </Link>
                <p>{postCarousel[imagePost].postDescription}</p>
          </div>
        </Grid>

        <Grid item md={1} sm={1} className="rightButtonContainer">
          <Button className="goForwardButton" onClick={handleForward}>
            <StraightIcon className="goForward" />
          </Button>
        </Grid>
        <Grid item md={2} className="imageCarousel" />
        
      </Grid>
    </>
  );
};

export default CarouselComents;
