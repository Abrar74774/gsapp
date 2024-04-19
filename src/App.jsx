import './App.css';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin'

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

function App() {

	const container = useRef()
	const main = useRef()

	useGSAP(() => {

		const menuUp = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
		const menuDown = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

		gsap.timeline({
			// yes, we can add it to an entire timeline!
			scrollTrigger: {
				trigger: ".main-container",
				pin: true, // pin the trigger element while active,
				anticipatePin: 1,
				// pinSpacing: false,
				start: "top top", // when the top of the trigger hits the bottom of the viewport
				end: "+=2000", // end after scrolling 500px beyond the start
				scrub: 0.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				// snap: {
				// 	snapTo: "labels", // snap to the closest label in the timeline
				// 	duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
				// 	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
				// },
			},
		})
			.addLabel("show")
			.from(".container", {
				height: 0,
				bottom: 0,
				yPercent: 100
			})
			.addLabel("showText")
			.fromTo(
				".text",
				{ y: "100%", stagger: 0.1 },
				{ y: "0", stagger: 0.1 }
			)
			.addLabel("center")
			.to(".container", {
				top: '50%',
				yPercent: -50
			})
			.addLabel("expand")
			.to(".container", {
				height: '100vh',
				width: '100vw',
			})
		// .addLabel("second")
		// .to(".container", {
		// 	y: '-150%'
		// })
		// .addLabel("third")
		// .to(".container", {
		// 	scale: 3.3
		// })
		// .addLabel("third" )
		// .to(".s1", { y: 0})
		// .addLabel("fourth")
		// .to(".s2", { y: 0})
		// .addLabel("fifth")
		// .to(".s3", { y: 0})


	}, { scope: main })

	return (
		<div className="App" ref={main}>
			<div style={{ height: '100vh' }}>
				<header className="App-header">
					GSAP animations
				</header>
			</div>
			<div className="main-container">
				<div className="text-container">
					<div className="text-line">
						<div className="text">
							EXPERIENCE A
						</div>

					</div>
					<div className="text-line">
						<div className="text">
							PEERLESS
						</div>
					</div>
				</div>
				<div ref={container} className='container'>
					Hello
				</div>
			</div>
			<div className="section s1">

			</div>
			<div className="section s2">

			</div>
			<div className="section s3">

			</div>
			<div className="section s4">

			</div>
			<div className="section s5">

			</div>
		</div>
	);
}

export default App;
