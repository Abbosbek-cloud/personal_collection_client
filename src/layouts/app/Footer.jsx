import {
  Avatar,
  Button,
  Container,
  Grid,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MuiList from "../../components/MuiList";
import { pagesArr } from "./navigationList";
import { StyledFooter, StyledImageWrapper } from "../../styled/Components";

const Footer = () => {
  return (
    <StyledFooter>
      <Container component="div">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <StyledImageWrapper sx={{ mb: 2 }}>
              <Avatar src="/assets/favicon-32x32.png" alt="logo" />
              <Typography variant="h5" color="info">
                Personal Collections
              </Typography>
            </StyledImageWrapper>
            <Typography variant="p">
              It is the best place to save your collections. All of them is
              simple. Register your profile and save your collections! Make your
              collections public for all users!
            </Typography>
            <StyledImageWrapper sx={{ mt: 2 }}>
              <PhoneInTalkIcon />
              <Typography variant="p">+998 (93) 488-03-52</Typography>
            </StyledImageWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">Menu</Typography>
            <MuiList list={pagesArr} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Contact us
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              placeholder="Write your thoughts here!"
            />
            <Button
              variant="contained"
              color="info"
              sx={{ borderRadius: 0, width: "50%" }}
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
