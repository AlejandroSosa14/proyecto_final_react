import Layout from "../components/Layout";
import OnAirSeries from "../components/series/OnAirSeries";
import TopRatedSeries from "../components/series/TopRatedSeries";

const Series = () => {
	return (
		<Layout>
			<h1>Series</h1>
			<div className="dual-carousel">
				<div className="carousel-wrapper">
					<TopRatedSeries />
				</div>
				<div className="carousel-wrapper">
					<OnAirSeries />
				</div>
			</div>
		</Layout>
	);
};
export default Series;
