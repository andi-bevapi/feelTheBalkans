import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import StraightIcon from "@mui/icons-material/Straight";
import CarouselComents from "../CarouselComents/CarouselComents";

import "./About.css";

const About = () => {
  return (
    <>
      <Box className="mainContainer" component="main" sx={{ p: 3 }}>


        <div className="videoServiceContainer">
          <video width="100%" className="video" autoPlay muted loop>
            <source
              src="https://static.showit.co/file/fyRPvx8RQoG3HXyBY7Hjww/172695/pexels_videos_1675442.mp4"
              type="video/mp4"
            />
          </video>
          <div className="aboutVideo">
            <h1>We are Feel the Balkans</h1>
          </div>
          <div className="videoDescription-explore">
            <h3>Let's explore</h3>
            <StraightIcon className="explore-icon" />
          </div>
        </div>

        <div className="vacationDestination">
          <Grid container spacing={2}>
            <Grid item md={12} className="vacationContainer">
              <div className="welcomeContainer">
                <h1>YOUR VACATION IS DESTINED TO BE</h1>
                <div className="horizontalLine"></div>

                <p className="vacationText">
                  If you’re being honest, when you plan your own vacation, it’s
                  a lot like hosting your own birthday party…and where’s the fun
                  in that? So put away the confetti poppers and helium tank…we
                  have you covered. We start with a thorough inquiry form, and
                  then move onto a brief intake call- just to make sure that we
                  fully “get” you. From there, we’ll put together a bundled
                  concept perfectly tailored to your personal style. Hesitant
                  because you love being the party planner? Don’t worry- we
                  think of this as a team effort.
                </p>

                <div className="buttonContainer">
                  <Link to="/services">
                    <Button variant="contained">Learn more</Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="aboutSecion">
          <Grid container spacing={2}>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} />

              <Grid item md={5} className="imageContainerAbout">
                <div className="firstImage">
                  <img
                    src="https://static.showit.co/800/pX6H76utS7ecwDbBVU3uPQ/shared/alyssa-strohmann-cgxxpcurhdo-unsplash.jpg"
                    width={490}
                    height={875}
                    alt=""
                  />
                </div>
                <div className="secondImage">
                  <img
                    src="https://static.showit.co/800/MDHNGE2rTr6FpCQoPjUAvA/shared/dsc00078.jpg"
                    width={490}
                    height={875}
                    alt=""
                  />
                </div>
              </Grid>

              <Grid item md={6} className="exploreur">
                <h1>EXPLORATEUR TRAVEL WAS FOUNDED IN 2015</h1>
                <p>
                  To provide a modernized solution to travel planning. Our
                  philosophy is that travel isn’t only about seeing a
                  destination, but it is about feeling the culture. We focus on
                  experiential travel, allowing you to fully immerse yourself
                  into your chosen destination.
                </p>
                <h2>About Us</h2>
                <Button variant="contained">Learn more</Button>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div className="commentSection">
          <Grid container spacing={2}>
            <Grid item md={12} className="commentContainer">
                <CarouselComents />
                <div></div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default About;
