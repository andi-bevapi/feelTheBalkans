import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StraightIcon from "@mui/icons-material/Straight";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import "./Homescreen.css";
import { useState } from "react";

function Homescreen() {
  const imageService = [
    "https://static.showit.co/400/hNyiq411SX6oDeh5c3t-JQ/172695/karsten-winegeart-ok2thq_vrmi-unsplash.jpg",
    "https://static.showit.co/800/AXg5g9s7Ra-P0-wCL_546w/172695/wayan-parmana-zzsawsrxrqy-unsplash.jpg",
    "https://static.showit.co/400/a--40EObRjqiab3yw7xBJQ/172695/larry-crayton-kxoansu63ne-unsplash.jpg",
    "https://static.showit.co/400/-3s9gEHAQgChvxqH7be5sA/172695/jakob-owens-siniljkxhmc-unsplash.jpg",
  ];

  const imageBlog = [
    "https://explorateurtravel.com/wp-content/uploads/2022/04/pexels-vasilis-karkalas-11086827-scaled.jpg",
    "https://explorateurtravel.com/wp-content/uploads/2022/03/0J7A3054-1920x1000-1.jpg",
    "https://explorateurtravel.com/wp-content/uploads/2022/02/OIP28629.jpg",
  ];

  const imageData = [
    {
      imgSrc:
        "https://static.showit.co/1200/tTHV9sjSTE-4u32YtW235Q/shared/johnny-africa-_zx0s27d3fw-unsplash.jpg",
      headerTitle: "HAPPY TRAVELERS",
      paragraph:
        "My wife and I had never been to Europe prior to our trip. However, over the years we’ve talked about things we would love to see and do during our first venture across the pond. I brought those ideas to Jennifer and she took them to the next level and beyond our expectations. We spent 2 weeks in Italy (Florence and Rome) and Greece (Santorini and Athens). From coordinating all of our transportation to choosing the absolute best excursions and restaurants in each city my wife and I were able to maximize our experience in each destination. Beyond just maximizing our time, they were able to maximize every dollar spent while working within our budget on this experience we will never forget. If you’re ever considering a special trip, look no further than Explorateur Travel, you wont be disappointed!",
    },
  ];
  const [imageCarousel, setImageCarousel] = useState([0]);

  return (
    <Box className="mainContainer" component="main" sx={{ p: 3 }}>
      
        <div className="videoContainer">
          <video width="100%" className="video" autoPlay muted loop>
            <source
              src="http://static.showit.co/file/IAAFmLExRQCxbO-5ZlEWJQ/172695/8mb_video-fjy-1qiscmxu.mp4"
              type="video/mp4"
            />
          </video>
          <div className="videoDescription">
            <h4>
              Connecting clients with the world through tailor-made itineraries
            </h4>
            <h1>as unique as you are</h1>
          </div>
          <div className="videoDescription-explore">
            <h3>Let's explore</h3>
            <StraightIcon className="explore-icon" />
          </div>
        </div>

      <div className="welcomeSection">
        <Grid container spacing={2}>
          <Grid item md={12}>
            <div className="welcomeContainer">
              <h1>WELCOME TO EXPLORATEUR TRAVEL</h1>
            </div>

            <div className="welcomeParagraph">
              <p>
                When you work with Explorateur, you aren’t simply a confirmation
                number, or a call in a hold cue. Your investment is personal to
                us. From our thorough inquiry form to the moment that you return
                home, we are an advocate for your vacation experience. We take
                the extra steps to ensure that each detail of your vacation is
                perfectly customized to your travel style.
              </p>
            </div>

            <div className="motoTitle">
              <h1>Experience. Expand. Explore.</h1>
            </div>

            <div className="buttonContainer">
              <Link to="/services">
                <Button variant="contained">Learn more</Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="servicesSection">
        <Grid container spacing={2}>
          <Grid item md={12}>
            <div className="serviceTitle">
              <h1>Our services</h1>
            </div>

            <div className="serviceParagraph">
              <p>YOUR KIND OF TRAVEL</p>
            </div>
          </Grid>

          <Grid item md={12} className="displayFlex">
            <Grid item md={2} sm={12} />

            <Grid item md={2} sm={12} className="service">
              <div
                className="serviceContainer"
                style={{ backgroundImage: `url(${imageService[0]})` }}
              >
                <p>
                  We believe that independent travel can create a unique level
                  of connection with the world. From brief getaways to lengthy
                  sabbaticals, we are able to curate the perfect trip for one!
                </p>
                <Link to="/services">
                  <h3>Solo adventures</h3>
                </Link>
              </div>
            </Grid>

            <Grid item md={2} sm={12} className="service">
              <div
                className="serviceContainer"
                style={{ backgroundImage: `url(${imageService[1]})` }}
              >
                <p>
                  We believe that independent travel can create a unique level
                  of connection with the world. From brief getaways to lengthy
                  sabbaticals, we are able to curate the perfect trip for one!
                </p>
                <Link to="/services">
                  <h3>Honeymoons + romance</h3>
                </Link>
              </div>
            </Grid>

            <Grid item md={2} sm={12} className="service">
              <div
                className="serviceContainer"
                style={{ backgroundImage: `url(${imageService[2]})` }}
              >
                <p>
                  We believe that independent travel can create a unique level
                  of connection with the world. From brief getaways to lengthy
                  sabbaticals, we are able to curate the perfect trip for one!
                </p>
                <Link to="/services">
                  <h3>Solo adventures</h3>
                </Link>
              </div>
            </Grid>

            <Grid item md={2} sm={12} className="service">
              <div
                className="serviceContainer"
                style={{ backgroundImage: `url(${imageService[3]})` }}
              >
                <p>
                  We believe that independent travel can create a unique level
                  of connection with the world. From brief getaways to lengthy
                  sabbaticals, we are able to curate the perfect trip for one!
                </p>
                <Link to="/services">
                  <h3>Solo adventures</h3>
                </Link>
              </div>
            </Grid>
            <Grid item md={2} sm={12} />
          </Grid>
        </Grid>
      </div>

      <div className="subscribeSection">
        <Grid container spacing={2}>
          <Grid item md={12} className="displayFlex">
            <Grid item md={2} sm={12} className="subscribeImg">
              <img
                src="https://static.showit.co/800/rDK57rH3Qv-KeEwAscA4MA/shared/submark_1_9.png"
                width={500}
                alt=""
              />
            </Grid>

            <Grid item sm={1} className="subscribeForm" />

            <Grid item md={8} sm={12} className="subscribeForm">
              <h3>Find out how we work!</h3>
              <p>Access our "How we work" guide + subscribe!</p>

              <Grid item sm={12} className="displayFlex customWidth">
                <Grid item md={3}>
                  <TextField
                    className="nameInput"
                    color="secondary"
                    placeholder="First Name"
                  />
                </Grid>

                <Grid item md={3} className="lastnameInput">
                  <TextField color="secondary" placeholder="Last Name" />
                </Grid>

                <Grid item md={3} className="emailInput">
                  <TextField color="secondary" placeholder="Email Address" />
                </Grid>

                <Grid item md={3} className="subscribeForm">
                  <Button variant="contained" className="subscribeButton">
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="explorateurSecion">
        <Grid container spacing={2}>
          <Grid item md={12} className="displayFlex">
            <Grid item md={2} />

            <Grid item md={5} className="imageContainerHome">
              <div className="firstImage">
                <img
                  src="https://static.showit.co/800/KPmaiUR9T8qp6DJXFv_cGw/172695/pexels-meruyert-gonullu-6243726.jpg"
                  width={490}
                  height={595}
                  alt=""
                />
              </div>
              <div className="secondImage">
                <img
                  src="https://static.showit.co/1200/QnlwWnuBRlKEoA-FGjAo7g/shared/dan-calderwood-pbokkdfu7ic-unsplash.jpg"
                  width={490}
                  height={595}
                  alt=""
                />
              </div>
            </Grid>

            <Grid item md={6} className="exploreur">
              <h1>EXPLORATEUR TRAVEL WAS FOUNDED IN 2015</h1>
              <p>
                To provide a modernized solution to travel planning. Our
                philosophy is that travel isn’t only about seeing a destination,
                but it is about feeling the culture. We focus on experiential
                travel, allowing you to fully immerse yourself into your chosen
                destination.
              </p>
              <h2>About Us</h2>
              <Button variant="contained">Learn more</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="blogPostsSection">
        <Grid container spacing={2}>
          <Grid item md={12}>
            <div className="blogTitle">
              <h1>On the blog</h1>
            </div>
            <div className="horizontalLine"></div>
          </Grid>

          <Grid item md={12} className="displayFlex">
            <Grid item md={2} sm={12} />

            <Grid item md={4} sm={12} className="postImage">
              <div
                className="postImageContainer"
                style={{ backgroundImage: `url(${imageBlog[0]})` }}
              ></div>
              <div className="postDescription">
                <h3>Friday Feature: Utah</h3>
                <p>
                  Jennifer Jacob was invited to Dominica and to stay at Secret
                  Bay and had the best time. From the beautiful property to the
                  ‘fire’ activities, there was no shortage of a bad time on this
                  trip!
                  <br />
                  <TrendingFlatIcon className="postIcon" />
                </p>
              </div>
            </Grid>

            <Grid item md={4} sm={12} className="postImage">
              <div
                className="postImageContainer"
                style={{ backgroundImage: `url(${imageBlog[1]})` }}
              ></div>
              <div className="postDescription">
                <h3>Our Recent Stay: Ashford Castle</h3>
                <p>
                  Jennifer Jacob was invited to Dominica and to stay at Secret
                  Bay and had the best time. From the beautiful property to the
                  ‘fire’ activities, there was no shortage of a bad time on this
                  trip!
                  <br />
                  <TrendingFlatIcon className="postIcon" />
                </p>
              </div>
            </Grid>

            <Grid item md={4} sm={12} className="postImage">
              <div
                className="postImageContainer"
                style={{ backgroundImage: `url(${imageBlog[2]})` }}
              ></div>
              <div className="postDescription">
                <h3>Our Recent Stay: Ashford Castle</h3>
                <p>
                  Jennifer Jacob was invited to Dominica and to stay at Secret
                  Bay and had the best time. From the beautiful property to the
                  ‘fire’ activities, there was no shortage of a bad time on this
                  trip!
                  <br />
                  <TrendingFlatIcon className="postIcon" />
                </p>
              </div>
            </Grid>
            <Grid item md={2} sm={12} />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default Homescreen;
