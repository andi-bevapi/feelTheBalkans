import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Carousel from "../Carousel/Carousel";

import "./Services.css";
const Services = () => {

  const imageService = [
    "https://static.showit.co/800/h1HGhyOYQVmpHY9fz3NLew/shared/camille-brodard-rpbllkjf5wm-unsplash.jpg",
    "https://static.showit.co/800/E8dTI7yUTeu43R89VMRAvQ/shared/anh-q-tran-rzizmvbjkbc-unsplash.jpg",
    "https://static.showit.co/800/QnlwWnuBRlKEoA-FGjAo7g/shared/dan-calderwood-pbokkdfu7ic-unsplash.jpg",
    "https://static.showit.co/800/5WByD4EZRnWs2ricbYFpkA/shared/alevision-co-s9waweyfpwo-unsplash.jpg",
  ];

  return (
    <>
      <Box className="mainContainer" component="main" sx={{ p: 3 }}>
        <div className="videoServiceContainer">
          <video width="100%" className="video" autoPlay muted loop>
            <source
              src="http://static.showit.co/file/QN9v2CgGTJKu-fjdMZ1e1w/172695/production_id_3853624.mp4"
              type="video/mp4"
            />
          </video>
          <div className="serviceVideo">
            <h1>Services</h1>
          </div>
        </div>

        <div className="hostVacations">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div className="welcomeContainerService">
                <h1>Let us host your vacation</h1>
              </div>
              <div className="horizontalLine"></div>
              <p className="vacationText">
                If you’re being honest, when you plan your own vacation, it’s a
                lot like hosting your own birthday party…and where’s the fun in
                that? So put away the confetti poppers and helium tank…we have
                you covered. We start with a thorough inquiry form, and then
                move onto a brief intake call- just to make sure that we fully
                “get” you. From there, we’ll put together a bundled concept
                perfectly tailored to your personal style. Hesitant because you
                love being the party planner? Don’t worry- we think of this as a
                team effort.
              </p>
              <div className="buttonContainer">
                <Link to="/services">
                  <Button variant="contained">Learn About our process</Button>
                </Link>
              </div>
            </Grid>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} sm={12} />
              <Grid item md={4} sm={12} className="service">
                <div
                  className="serviceContainer blogService"
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
              <Grid item md={4} sm={12} className="service">
                <div
                  className="serviceContainer blogService"
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
            </Grid>

            <Grid item md={12} className="displayFlex">
              <Grid item md={2} sm={12} />
              <Grid item md={4} sm={12} className="service">
                <div
                  className="serviceContainer blogService"
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

              <Grid item md={4} sm={12} className="service">
                <div
                  className="serviceContainer blogService"
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

        <div className="serviceLevels">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div className="welcomeContainerService">
                <h1>Our Service Levels</h1>
              </div>
              <div className="horizontalLine"></div>
              <p className="vacationText">
                If you’re being honest, when you plan your own vacation, it’s a
                lot like hosting your own birthday party…and where’s the fun in
                that? So put away the confetti poppers and helium tank…we have
                you covered. We start with a thorough inquiry form, and then
                move onto a brief intake call- just to make sure that we fully
                “get” you. From there, we’ll put together a bundled concept
                perfectly tailored to your personal style. Hesitant because you
                love being the party planner? Don’t worry- we think of this as a
                team effort.
              </p>
            </Grid>
          </Grid>
        </div>

        <div className="contactSectionContainer">
          <Grid container spacing={2}>
            <Grid item md={12} className="contactSection">
                <h3> kindly download our</h3>
                <div className="horizontalLine"></div>
                <h1>How we work & packages guide</h1>

                <Grid item md={12} className="displayFlex serviceFormContainer">
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
        </div>

        <div className="serviceSecion">
        <Grid container spacing={2}>
          <Grid item md={12} className="displayFlex">
            <Grid item md={2} />

            <Grid item md={5} className="imageContainerService">
              <div className="firstImage">
                <img
                  src="https://static.showit.co/800/Z9MkKV_vT9GwCMZETDbsTA/172695/annie-spratt-csh0dwy_hnm-unsplash_1.jpg"
                  width={490}
                  height={595}
                  alt=""
                />
              </div>
              <div className="secondImage">
                <img
                  src="https://static.showit.co/800/QvuXg87ZQ3yyiKno6nY6pA/shared/annie-spratt-ufa495wz0x8-unsplash_1.jpg"
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

        <div className="getAway">
        <Grid container spacing={2}>
            <Grid item md={12} className="awayContainer">
              <h1>Ready To Get Away?</h1>
              <h4>
                  <Button variant="contained" className="subscribeButton">let's plan your trip</Button>
              </h4>
              <Carousel />
            </Grid>
        </Grid>
        </div>



      </Box>
    </>
  );
};

export default Services;
