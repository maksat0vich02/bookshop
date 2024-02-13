import Header from "./components/header";
import Home from "./pages/Home";
import HomeGenres from "./pages/Home/HomeGenres";
import NewBook from "./pages/Home/NewBook";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HomeGenres />
      <NewBook />
    </div>
  );
}

export default App;
