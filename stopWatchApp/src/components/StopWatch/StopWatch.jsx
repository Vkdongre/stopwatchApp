import { useState, useRef } from "react";

const StopWatch = () => {
	const [time, setTime] = useState(0);
	const [btnName, setBtnName] = useState("Start");
	const timeIntervalId = useRef(null);

	const handleStart = () => {
		clearInterval(timeIntervalId.current);
		setBtnName("Start");
		timeIntervalId.current = setInterval(() => {
			setTime((prev) => prev + 1000);
		}, 1000);
	};

	const handlePause = () => {
		clearInterval(timeIntervalId.current);
		setBtnName("Resume");
	};
	const handleReset = () => {
		clearInterval(timeIntervalId.current);
		setTime(0);
		setBtnName("Start");
	};

	const formatTime = (time) => {
		let seconds = Math.floor((time / 1000) % 60);
		let minutes = Math.floor((time / (1000 * 60)) % 60);
		let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		return `${hours}:${minutes}:${seconds}`;
	};

	return (
		<div>
			<h1>{formatTime(time)}</h1>
			<div className="stopwatch_container">
				<button className="start_btn btn btn-primary" onClick={handleStart}>
					{btnName}
				</button>
				<button className="pause_btn btn btn-secondary" onClick={handlePause}>
					Pause
				</button>
				<button className="reset_btn btn btn-danger" onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	);
};
export default StopWatch;

// Code for time formatting
// const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
// const minutes = Math.floor(milliseconds / (1000 * 60));
// const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
// return `${hours.toString().padStart(2, "0")}:${minutes
// 	.toString()
// 	.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
