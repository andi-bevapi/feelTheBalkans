import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import StraightIcon from "@mui/icons-material/Straight";
import { Link } from "react-router-dom";
import "./Blog.css";
import { useState } from "react";



const Blog = () => {
  const postCarousel = [
    {
      image:
        "https://explorateurtravel.com/wp-content/uploads/2022/03/0J7A3054-1920x1000-1.jpg",
      postTitle: "Friday Feature: Utah",
      postDescription:
        "If you are looking for a domestic adventure that has everything you could possibly think of… Utah is the place for you! Utah is home to 3.5 geographic regions 5 national parks, 45 state parks, and is filled with plenty of historic sites and monuments. It has perfect powder for skiers and snowboarders, rugged red",
      readMore: "Read More",
    },
    {
      image:
        "https://explorateurtravel.com/wp-content/uploads/2022/02/OIP28629.jpg",
      postTitle: "Our Recent Stay: Ashford Castle",
      postDescription:
        "Jennifer Jacob recently returned from a FAM trip, hosted by Crafted Ireland and Index Select, where she had the opportunity to stay at Ashford Castle. Jennifer arrived via a helicopter transfer, on the helipad, situated right at the front of the property. There is no better way to arrive to a Castle than that. Keep ",
      readMore: "Read More",
    },
    {
      image:
        "https://explorateurtravel.com/wp-content/uploads/2022/01/exterior-vintage-car-10-1366x768-fp_mm-fpoff_0_02B252812529.jpg",
      postTitle: "Our Recent Stay: Adare Manor",
      postDescription:
        "Jennifer Jacob recently returned from a FAM trip through Crafted Ireland, where she had the opportunity to stay at one of Ireland’s top five-star luxury hotels, Adare Manor. This resort is a neo-gothic masterpiece that has vast history, impeccable service, a world class staff, and a truly spectacular setting. The stunning 840-acre property houses 104",
      readMore: "Read More",
    },
    {
      image:
        "https://explorateurtravel.com/wp-content/uploads/2021/12/cody-board-YW5EjYFYjfs-unsplash-scaled.jpg",
      postTitle: "Our Top 5 Tours in Cancun",
      postDescription:
        "We have gathered our top 5 favorite tours in Cancun and we wanted to share them with you. Keep reading to see our picks, and if you’d like, you can book the tour for yourself for your upcoming trip to Cancun, Mexico. Salud! 1. Chichen Itza All-Inclusive, Tequila tasting, Cenote Swim, Buffet & Valladolid Get",
      readMore: "Read More",
    },
    {
      image:
        "https://explorateurtravel.com/wp-content/uploads/2021/12/kate-hliznitsova-KrwKynN1eYo-unsplash-scaled.jpg",
      postTitle: "Our Top 5 Tours in Napa",
      postDescription:
        "We have gathered our top 5 favorite tours in Napa and we wanted to share them with you. Keep reading to see our picks, and if you’d like, you can book the tour for yourself for your upcoming trip to California. Cheers! All links are commissionable. 1. Private Limousine Wine Country Tour of Napa Experience",
      readMore: "Read More",
    },
  ];

  const [imagePost, setImagePost] = useState(0);

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
      <Box className="mainContainer" component="main" sx={{ p: 3 }}>
        <div className="imageContainer"></div>
        <div className="posterBg"></div>

        <div className="postSection">
          <Grid container spacing={2}>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} className="imageCarousel" />

              <Grid item md={1} sm={1} className="leftButtonContainer">
                <Button className="goBackButton" onClick={handleBack}>
                  <StraightIcon className="goBack" />
                </Button>
              </Grid>

              <Grid item md={4} sm={12} className="carouselContainer">
                <div className="imageCarouselContainer">
                  <img
                    src={`${postCarousel[imagePost].image}`}
                    alt={postCarousel[imagePost].image}
                  />
                </div>
              </Grid>
              <Grid item md={3} sm={12} className="postContainer">
                <div className="postInformation">
                  <h3>RECENT POSTS</h3>
                  <Link to={"/"}>
                    <h1>{postCarousel[imagePost].postTitle}</h1>
                  </Link>
                  <p>{postCarousel[imagePost].postDescription}</p>

                  <Link to="/" className="readMore">
                    {postCarousel[imagePost].readMore}
                  </Link>
                </div>
              </Grid>
              <Grid item md={1} sm={1} className="rightButtonContainer">
                <Button className="goForwardButton" onClick={handleForward}>
                  <StraightIcon className="goForward" />
                </Button>
              </Grid>
              <Grid item md={2} className="imageCarousel" />
            </Grid>
          </Grid>
        </div>

        <div className="blogSection">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <h1 className="titleContainer">Latest on the Blog...</h1>
            </Grid>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} />
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://explorateurtravel.com/wp-content/uploads/2022/04/pexels-vasilis-karkalas-11086827-scaled.jpg"
                    alt="karkalas-11086827-scaled"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Friday Feature: Utah</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <p>
                      If you are looking for a domestic adventure that has
                      everything you could possibly think of… Utah is the place
                      for you! Utah is home to 3.5 geographic regions, 5
                      national parks, 45 state parks, and is filled with plenty
                      of historic sites and monuments. It has perfect powder for
                      skiers and snowboarders, rugged red […]
                    </p>
                    <div className="blogPostLink">
                      <Link to="/" className="readMore">
                        {postCarousel[imagePost].readMore}
                      </Link>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://explorateurtravel.com/wp-content/uploads/2022/03/0J7A3054-1920x1000-1.jpg"
                    alt="0J7A3054-1920x1000-1"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Our Recent Stay: Secret Bay</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <p>
                      If you are looking for a domestic adventure that has
                      everything you could possibly think of… Utah is the place
                      for you! Utah is home to 3.5 geographic regions, 5
                      national parks, 45 state parks, and is filled with plenty
                      of historic sites and monuments. It has perfect powder for
                      skiers and snowboarders, rugged red […]
                    </p>
                    <div className="blogPostLink">
                      <Link to="/" className="readMore">
                        {postCarousel[imagePost].readMore}
                      </Link>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={2} />
            </Grid>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} />
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://explorateurtravel.com/wp-content/uploads/2022/04/pexels-vasilis-karkalas-11086827-scaled.jpg"
                    alt="11086827-scaled"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Friday Feature: Utah</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <p>
                      If you are looking for a domestic adventure that has
                      everything you could possibly think of… Utah is the place
                      for you! Utah is home to 3.5 geographic regions, 5
                      national parks, 45 state parks, and is filled with plenty
                      of historic sites and monuments. It has perfect powder for
                      skiers and snowboarders, rugged red […]
                    </p>
                    <div className="blogPostLink">
                      <Link to="/" className="readMore">
                        {postCarousel[imagePost].readMore}
                      </Link>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://explorateurtravel.com/wp-content/uploads/2022/03/0J7A3054-1920x1000-1.jpg"
                    alt="0J7A3054-1920x1000"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Our Recent Stay: Secret Bay</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <p>
                      If you are looking for a domestic adventure that has
                      everything you could possibly think of… Utah is the place
                      for you! Utah is home to 3.5 geographic regions, 5
                      national parks, 45 state parks, and is filled with plenty
                      of historic sites and monuments. It has perfect powder for
                      skiers and snowboarders, rugged red […]
                    </p>
                    <div className="blogPostLink">
                      <Link to="/" className="readMore">
                        {postCarousel[imagePost].readMore}
                      </Link>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={2} />
            </Grid>

            <Grid item md={12}>
              <div className="paginationContainer">
                <Stack spacing={2}>
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="photoSection">
          <Grid container spacing={2}>
            <Grid item md={12} className="displayFlex">
              <div className="imageSectionContainer">
                <img
                  src="https://static.showit.co/1600/gBh5YPenQJWSUemno_Fyzw/shared/linh-nguyen-dne9iz1kqzk-unsplash.jpg"
                  alt="dne9iz1kqzk-unsplash"
                />
                <div className="backgroundCover"></div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Blog;
