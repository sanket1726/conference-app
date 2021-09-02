import React, { memo } from "react";
import useStyles from "../styles/useStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import { IconButton, Typography } from "@material-ui/core";
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navBar}>
      <Toolbar>
        <RecordVoiceOverIcon className={classes.icon} />
        <Typography variant='h4' color='inherit' noWrap>
          Risher Tech Conferences
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
