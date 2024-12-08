import Layout from "../components/Layout";
import TopRatedMovies from "../components/movies/TopRatedMovies";
import UpcomingMovies from "../components/movies/UpcomingMovies";

const Movies = () => {
	return (
		<Layout>
			<h1>Peliculas</h1>
            <div className="dual-carousel">
				<div className="carousel-wrapper">
					<TopRatedMovies />
				</div>
				<div className="carousel-wrapper">
					<UpcomingMovies />
				</div>
			</div>
		</Layout>
	);
};
export default Movies;
