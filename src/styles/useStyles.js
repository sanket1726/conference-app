import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    boxShadow: "0px 2px 10px 3px black",
    // position: "fixed",
    fontWeight: 800,
  },
  icon: {
    marginRight: theme.spacing(3),
    color: "white",
    scale: 1.5,
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    maxWidth: "90%",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.4s ease-in-out",
    "&:hover": { transform: " scale(1.02)" },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuBar: {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    height: "5vh",
    backgroundColor: "white",
    marginBottom: "20px",
    boxShadow:
      "7px 5px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    borderRadius: "3px",
    marginTop: "8vh",
  },
  searchButton: {
    marginLeft: "5px",
  },
  confName: {
    fontWeight: 800,
    fontSize: "20px",
  },
  confVenue: {
    fontWeight: 600,
    fontSize: "15px",
  },
  confWebsite: {
    fontWeight: 600,
    fontSize: "15px",
  },
  confDate: { fontWeight: 600, fontSize: "15px" },
  freeConf: { color: "green", fontSize: "13px" },
  paidConf: { color: "orange", fontSize: "13px" },
}));

export default useStyles;
