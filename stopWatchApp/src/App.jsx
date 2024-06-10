import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import StopWatch from "./components/StopWatch/StopWatch";

function App() {
	return (
		<>
			<h2 className="stopwatch_css">StopWatch</h2>
			<div className="card">
				<StopWatch />
			</div>
		</>
	);
}

export default App;
