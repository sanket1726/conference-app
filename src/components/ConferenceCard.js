import React, { memo } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/useStyles";
import { Link } from "@material-ui/core";

function ConferenceCard({ card }) {
  const classes = useStyles();

  // Image URL is having extra slash and double quote because of which images were not loading
  const formattedImageUrl = (imgUrl) => {
    const imgURL = imgUrl;
    let str = imgURL.replace(/\"/g, "");
    return str;
  };

  return (
    <Grid item xs={10} sm={6} md={3}>
      <Card
        className={classes.card}
        style={{
          // style was not getting applied from styles file
          boxShadow:
            "10px 10px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
      >
        <CardMedia
          className={classes.cardMedia}
          image={`${formattedImageUrl(card.imageURL)}`}
          title='conference poster'
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            <p className={classes.confName}>
              {card.confName}{" "}
              <span
                style={{ fontSize: "12px" }}
                className={`${
                  card.entryType === "Free"
                    ? classes.freeConf
                    : classes.paidConf
                }`}
              >
                [{card.entryType === "Free" ? "Free" : "Paid"}]
              </span>{" "}
            </p>
            <p className={classes.confVenue}>Venue : {card.venue}</p>
            <p className={classes.confWebsite}>
              Website :{" "}
              <Link
                onClick={() => {
                  window.open(card.confUrl, "_blank", "noopener,noreferrer");
                }}
              >
                {card.confUrl}
              </Link>
            </p>
            <p className={classes.confDate}>Date :- {card.confStartDate}</p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default memo(ConferenceCard);
