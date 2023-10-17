import React from "react";
import Image from "next/image";
export default function Home() {
	return (
		<React.Fragment>
			<div className="flex flex-col h-screen items-center justify-center gap-4">
				<Image
					src="/ticketmaster.svg"
					alt="ticketmaster"
					width="143"
					height="20"
				/>

				<h4>Go ahead and complete the project</h4>
			</div>
		</React.Fragment>
	);
}
