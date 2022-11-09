import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Box className="mainContainer" component="main" sx={{ p: 3 }}>
        <div className="videoServiceContainer">
          <video width="100%" className="video" autoPlay muted loop>
            <source
              src="https://static.showit.co/file/KISQZ_7nQMa976W76eDCTg/172695/pexels-roman-odintsov-5666506_1_1.mp4"
              type="video/mp4"
            />
          </video>
          <div className="aboutVideo">
            <h1>Ready to get away ?</h1>
          </div>
        </div>

        <div className="contactTitleSection">
          <Grid container spacing={2}>
            <Grid item md={12} className="titleContactContainer">
              <p>
                If you don't have an agent in mind, please complete the form
                below, and we will play matchmaker with an agent to give you the
                best experience!
              </p>
              <div className="horizontalLine"></div>
            </Grid>
          </Grid>
        </div>

        <div className="contactFormSection">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div className="formContainer">
                <h1>Client Information</h1>

                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  className="formField"
                />

                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  className="formField"
                />

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="formField"
                />

                <TextField
                  id="outlined-basic"
                  label="Phone number"
                  variant="outlined"
                  className="formField"
                />

                <TextField
                  id="outlined-basic"
                  label="Is there anything that you must do or see?"
                  variant="outlined"
                  className="formField"
                />

                <TextField
                  id="outlined-basic"
                  label="How did you hear about us? Tell us who we can thank!?"
                  variant="outlined"
                  className="formField"
                />

                <Button variant="contained" className="submitFormContact">
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Contact;
