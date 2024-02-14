import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/Home";
import HomeGenres from "./pages/Home/HomeGenres";
import NewBook from "./pages/Home/NewBook";
import About from "./pages/Home/about";
import Books from "./pages/Home/books-home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HomeGenres />
      <NewBook />
      <Books />
      <About />
      <Footer />
    </div>
  );
}

export default App;
