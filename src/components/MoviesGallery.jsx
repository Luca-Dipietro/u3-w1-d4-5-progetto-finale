import { Component } from "react";
import { Container, Col, Spinner, Alert } from "react-bootstrap";
import Slider from "react-slick";

class MoviesGallery extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };

  fetchMovies = (searchTitle) => {
    this.setState({ isLoading: true });
    console.log("Fetch on loading...");
    fetch(`http://www.omdbapi.com/?apikey=d04e425&s=${searchTitle}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        } else {
          console.log("Fetch completed");
          return response.json();
        }
      })
      .then((movie) => {
        this.setState({ movies: movie.Search });
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        this.setState({ isError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  componentDidMount() {
    this.fetchMovies(this.props.searchTitle);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: "80px",
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <Container fluid className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-light mb-0">{this.props.title}</h4>
          {this.state.isLoading && <Spinner animation="border" variant="primary" />}
        </div>
        {this.state.isError && <Alert variant="danger">Failed to fetch movies</Alert>}
        <div className="slide-container">
          <Slider {...settings}>
            {this.state.movies.map((movie) => (
              <Col key={movie.imdbID}>
                <div className="d-flex justify-content-center">
                  <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
                </div>
              </Col>
            ))}
          </Slider>
        </div>
      </Container>
    );
  }
}

export default MoviesGallery;
