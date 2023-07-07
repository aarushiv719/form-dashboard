import { useRef, useEffect } from "react";

function TableauEmbed() {
	const divElement = useRef(null); // Create a ref object

	useEffect(() => {
		const url =
			"https://public.tableau.com/views/Team22Dashboard/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

		let viz = new window.tableau.Viz(divElement.current, url);

		// Cleanup function: This will be called when the component unmounts, removing the Tableau Viz
		return () => {
			viz.dispose();
		};
	}, []); // Empty dependency array means this effect runs once when component mounts.

	return (
		<div ref={divElement} style={{ width: "100%", height: "800px" }}>
			{/* Tableau Viz will be loaded here */}
		</div>
	);
}

export default TableauEmbed;
