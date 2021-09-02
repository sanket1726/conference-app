import "../styles/App.css";
import ConferenceCards from "./ConferenceCards";
import Header from "./Header";

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* Conference Cards */}
      <ConferenceCards />
    </div>
  );
}

export default App;
