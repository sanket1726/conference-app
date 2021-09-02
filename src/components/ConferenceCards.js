import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useStyles from "../styles/useStyles";
import axios from "../axios/axios";
import { IconButton, TextField } from "@material-ui/core";
import FilterMenu from "./FilterMenu";
import CancelIcon from "@material-ui/icons/Cancel";
import ConferenceCard from "./ConferenceCard";

const ConferenceCards = () => {
  const [freeConferences, setFreeConferences] = useState([]);
  const [paidConferences, setPaidConferences] = useState([]);
  const [searchedConferences, setSearchedConferences] = useState([]);
  const [showFree, setShowFree] = useState(true);
  const [showPaid, setShowPaid] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  // Dependency array is kept empty so that this will fetch data only once. We can persist data if required using local storage or redux-persist
  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        const { free, paid } = response.data;
        setFreeConferences(free);
        setPaidConferences(paid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function for handling filter I can also implement this using useReducer
  const handleFilter = (filterType) => {
    console.log(filterType);
    if (filterType === "Both") {
      setShowPaid(true);
      setShowFree(true);
    } else if (filterType === "Free") {
      setShowPaid(false);
      setShowFree(true);
    } else {
      setShowPaid(true);
      setShowFree(false);
    }
  };

  // Function for handling search
  const handleSearch = () => {
    if (searchInput !== "") {
      console.log(searchInput);
      const allConferences = freeConferences.concat(paidConferences);
      const searchResults = allConferences.filter(
        (conf) =>
          conf.confName.toLowerCase().includes(searchInput.toLowerCase()) ||
          conf.city.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(allConferences);
      console.log(searchResults);
      setSearchedConferences(searchResults);
    }
  };

  // Function for clearing search
  const handleClearSearch = () => {
    setSearchedConferences([]);
    setSearchInput("");
  };

  // Styling using const parameters decalred in styles.js
  const classes = useStyles();

  return (
    // A common pattern in React is for a component to return multiple elements.
    // Fragments let you group a list of children without adding extra nodes to the DOM.
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid}>
          <Grid item xs={12} className={classes.menuBar}>
            <div
              style={{
                marginRight: "10px",
                display: "flex",
                placeItems: "center",
                marginLeft: "10px",
              }}
            >
              <TextField
                id='standard-basic'
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <IconButton
                onClick={() => {
                  handleClearSearch();
                }}
              >
                <CancelIcon />
              </IconButton>

              <Button
                variant='contained'
                color='secondary'
                className={classes.searchButton}
                onClick={() => {
                  handleSearch();
                }}
              >
                Search
              </Button>
            </div>
            <div>
              <FilterMenu
                filterBy={(filterType) => {
                  handleFilter(filterType);
                }}
              />
            </div>
          </Grid>

          {/* End hero unit */}
          <Grid container spacing={4}>
            {searchedConferences.length === 0 &&
              showFree === true &&
              freeConferences &&
              freeConferences.map((card) => (
                <ConferenceCard
                  key={`${card.confName}${card.conference_id}`}
                  card={card}
                />
              ))}
            {searchedConferences.length === 0 &&
              showPaid === true &&
              paidConferences &&
              paidConferences.map((card) => (
                <ConferenceCard
                  key={`${card.confName}${card.conference_id}${Math.random()}`}
                  card={card}
                />
              ))}
            {searchedConferences.length > 0 &&
              showPaid === true &&
              paidConferences &&
              searchedConferences.map((card) => (
                <ConferenceCard
                  key={`${card.confName}${card.conference_id}${Math.random()}`}
                  card={card}
                />
              ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default ConferenceCards;
