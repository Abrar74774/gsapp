import './App.css';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {

	const container = useRef()
	const main = useRef()

	useGSAP(() => {
		// ScrollTrigger.create({
		// 	trigger: ".container",
		// 	pin: true,
		// 	start: "top top",
		// 	end: "+=1200",
		// 	markers: true
		// });
		gsap.to(".container", {
			y: '-100%',
			scrollTrigger: {
				markers: true,
				trigger: ".container",
				pin: true,
				anticipatePin: 1,
				start: "top top",
				end: "+=500"
			}
		})

		gsap.to(".container", {
			scale: '0.2',
			duration: 1,
			scrollTrigger: {
				markers: true,
				trigger: ".s2",
				pin: true,
				anticipatePin: 1,
				start: "top bottom",
				end: "+=500"
			}
		})
		
		// gsap.to(".container", {
		// 	width: '100%',
		// 	height: '100%',
		// 	scrollTrigger: {
		// 		trigger: ".container",
		// 		pin: true,
		// 		anticipatePin: 1,
		// 		start: "top bottom",
		// 		end: "+=400"
		// 	}
		// })
	}, {scope: main})

	return (
		<div className="App" ref={main}>
			<div style={{ height: '50vh'}}>
				<header className="App-header">
					GSAP animations
				</header>
			</div>
			<div ref={container} className='container'>
				Hello
			</div>
			<div className="section s1"></div>
			<div className="section s2"></div>
			<div className="section s3"></div>
			<div className="section s4"></div>
			<div className="section s5"></div>
		</div>
	);
}

export default App;
