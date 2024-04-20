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

		gsap.timeline({
			// yes, we can add it to an entire timeline!
			scrollTrigger: {
				trigger: ".main-container",
				pin: true, // pin the trigger element while active,
				// anticipatePin: 1,
				// pinSpacing: false,
				start: "top top", // when the top of the trigger hits the bottom of the viewport
				end: "+=2000", // end after scrolling 2000px beyond the start
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
				yPercent: 100
			})
			.from(".container .bg", {
				yPercent: -100,
			}, "<")
			.addLabel("showText")
			.fromTo(
				".text",
				{ y: "100%", stagger: 0.1 },
				{ y: "0", stagger: 0.1 },
			)
			.addLabel("showCursive")
			.from(
				".cursive", { xPercent: -100, y: 0 },
			)
			.from(
				".cursive-text", { xPercent: 100, y: 40 },
				"<"
			)
			.addLabel("center")
			.to(".container", {
				top: '50%',
				yPercent: -50
			})
			.addLabel("expand")
			.fromTo(".container", {
				backgroundSize: 'cover',
			}, {
				height: '100vh',
				width: '100vw',
				backgroundSize: '100vh 100vw',
				ease: "none"
			})

		gsap.timeline({
			scrollTrigger: {
				trigger: ".s1",
				start: "top bottom",
				end: "top top",
				scrub: true,
				invalidateOnRefresh: true
			},
		})
			.addLabel("fix")
			.fromTo(".container .bg", {
				backgroundPosition: "center 0"
			}, {
				backgroundPosition: "center 100vh",
				ease: "none",
			})

		gsap.utils.toArray(".section").forEach((section, i) => {
			section.bg = section.querySelector(".bg");
			gsap.fromTo(section.bg, {
				backgroundPosition: "center -100vh"
			}, {
				backgroundPosition: () => "center 100vh",
				ease: "none",
				scrollTrigger: {
					trigger: section,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
					invalidateOnRefresh: true
				}
			});

		});

		gsap.timeline({
			ease: "none",
			scrollTrigger: {
				trigger: ".remaining-container",
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.addLabel("fix")
			.fromTo(".remaining", {
				top: '-100vh'
			}, {
				top: '100vh',
				ease: "none"
			})

			// gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: ".remaining-container",
			// 		start: "top top"
			// 	}
			// })
			// .addLabel("setToNormal")
			// .set(".remaining-content, .remaining", {
			// 	height: "200vh",
			// })

	}, { scope: main })

	return (
		<div className="App" ref={main}>
			<div style={{ height: '100vh' }}>
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
					<div className="cursive">
						<div className="cursive-text">
							Escape
						</div>
					</div>
				</div>
				<div ref={container} className='container'>
					<div className="bg">

					</div>
				</div>
			</div>
			<div className="sections-container">
				<div className="section s1">
					<div className="bg"></div>
				</div>
				<div className="section s2">
					<div className="bg"></div>

				</div>
				<div className="section s3">
					<div className="bg"></div>

				</div>
				<div className="section s4">
					<div className="bg"></div>
				</div>
			</div>
			<div className="remaining-container">
				<div className="remaining">
					<div className="second-header">
						Logo 🌐
					</div>
					<div className="hero">
						<div className="title">
							Text <br />
							Here
						</div>
					</div>
					<div className="content">
						<img src="5.jpg" alt="a cityscape" />
						<div></div>
					</div>
					<div className="content">
						<div></div>
						<img src="6.jpg" alt="a cityscape 2" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
