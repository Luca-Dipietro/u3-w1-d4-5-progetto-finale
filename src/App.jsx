import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/Header";
import MyNavBar from "./components/MyNavBar";
import MoviesGallery from "./components/MoviesGallery";
import MyFooter from "./components/MyFooter";
// import Profile from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <div className="header">
        <MyNavBar />
        <Header />
      </div>
      <div className="row-film mt-3">
        <MoviesGallery title="Star Wars Gallery" searchTitle="Star Wars" />
        <MoviesGallery title="Marvel Gallery" searchTitle="Marvel" />
        <MoviesGallery title="Harry Potter Gallery" searchTitle="Harry Potter" />
        <MoviesGallery title="The Lord Of The Rings Gallery" searchTitle="The Lord Of The Rings" />
        <MoviesGallery title="Pirates of the Caribbean Gallery" searchTitle="Pirates of the Caribbean" />
      </div>
      {/* <div className="profile-container">
        <Profile />
      </div> */}
      <div className="footer">
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
