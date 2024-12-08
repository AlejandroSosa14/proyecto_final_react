import Layout from "../components/Layout";
import PopularMovies from "../components/Movies/PopularMovies";
import PopularSeries from "../components/series/PopularSeries";
import "../css/Home.css";

const Home = () => {
	return (
		<Layout>
			<h1>Home</h1>
			<div className="dual-carousel">
				<div className="carousel-wrapper">
					<PopularMovies />
				</div>
				<div className="carousel-wrapper">
					<PopularSeries />
				</div>
			</div>
		</Layout>
	);
};
export default Home;
