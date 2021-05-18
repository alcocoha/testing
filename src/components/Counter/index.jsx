import React, { useState } from "react";

export default function Counter() {
	const [counts, serCounts] = useState(0);
	return (
		<div>
			<button onClick={() => serCounts(counts + 1)}>Click</button>
			<p>Click times: {counts}</p>
		</div>
	);
}
