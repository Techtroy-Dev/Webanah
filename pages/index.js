/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { Scrolls } from "../src/components/Sub-Components/scrollbars"
import Home from "../src/components/Main-Components/home/home"
import WhatWeDo from "../src/components/Main-Components/home/what-we-do"
import BestSolution from "../src/components/Main-Components/home/best-solution"
import WhyWeStandOut from "../src/components/Main-Components/home/why-we-stand-out"
import React, { useState } from "react";
import Head from "next/head"
import gsap from "gsap"
import { useRef, useEffect, useCallback } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Layout from "../src/components/Main-Components/Layout"
// import Layout from "../src/components/Main-Components/Layout";
// import Link from "next/link"

const Space = styled.div`
  padding: 5% 0;
`

const Container = styled.div`
  width: 400%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
`

const Panel = styled.div`
  // X-Small devices (portrait phones, less than 576px)
  width: 100%;
  height: 100%;
  padding: 0;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
	  padding: 0;
   }
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
	  padding: 0;
   }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
	  padding: 0;
   }
  
  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
	  padding: 0 7.5rem; 
	  }
  
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {  }

  will-change: transform;
`

function Main({ ...props }) {
	const containerRef = useRef(null)
	const [section, setSection] = useState(0); // Section of page we are currently ON.
	const sectionTitles = ['HOME', 'WHAT WE DO', 'BEST SOLUTION', 'WHY WE STAND OUT']
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		let duration = 1,
			sections = containerRef.current.querySelectorAll(".panel"),
			sectionIncrement = duration / (sections.length - 1),
			tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					start: "top top",
					end: "+=5000"
				}
			});
		// console.log(sections)
		tl.to(sections, {
			xPercent: -100 * (sections.length - 1),
			duration: duration,
			ease: "none"
		});

		// everything below this is just for the fading/scaling up which is NOT scrubbed - it's all dynamic, triggered when each section enters/leaves so that the fading/scaling occurs at a consistent rate no matter how fast you scroll!
		sections.forEach((section, index) => {
			let tween = gsap.from(section, {
				opacity: 0,
				// scale: 0.6,
				duration: 1.5,
				force3D: true,
				paused: true
			});
			// console.log(index)
			addSectionCallbacks(tl, {
				start: sectionIncrement * (index - 0.99),
				end: sectionIncrement * (index + 0.99),
				onEnter: () => { tween.play(), setSection(index)/*, console.log("HOME onEnter: ", index)*/ },
				onLeave: () => { tween.reverse(), setSection(index + 1)/*, console.log("HOME onLeave: ", index)*/ },
				onEnterBack: () => { tween.play(), setSection(index)/*, console.log("HOME onEnterBack: ", index)*/ },
				onLeaveBack: () => { tween.reverse(), setSection(index - 1)/*, console.log("HOME onLeaveBack: ", index)*/ }
			});
			index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
		});

		// helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
		function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
			let trackDirection = animation => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
				let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
					prevTime = animation.time();
				animation.direction = animation.reversed() ? -1 : 1;
				animation.eventCallback("onUpdate", () => {
					let time = animation.time();
					if (prevTime !== time) {
						animation.direction = time < prevTime ? -1 : 1;
						prevTime = time;
					}
					onUpdate && onUpdate.call(animation);
				});
			},
				empty = v => v; // in case one of the callbacks isn't defined
			timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
			start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
			timeline.duration() >= end && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end); // NEW
			// end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end); // OLD
		}
		console.log("HOME mounted");
		return () => { tl.pause().kill(), console.log("HOME unmounted"); };
	}, []);

	return (
		<>
			{/* <Layout /> */}
			<Head>
				<title>Home</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="shortcut icon" href="/images/Webanah_logo.png" type="image/png"></link>
			</Head>
			<Scrolls total={4} current={section} sectionTitles={sectionTitles} />
			<Layout backgroundimage='/images/background1.png'>
				{/* <Home />
				<Space />
				<WhatWeDo />
				<Space />
				<BestSolution />
				<Space />
				<WhyWeStandOut />
				<Space /> */}
				<div>
					<Container ref={containerRef}>
						<Panel className="panel">
							<Home />
						</Panel>
						<Panel className="panel">
							<WhatWeDo />
						</Panel>
						<Panel className="panel">
							<BestSolution />
						</Panel>
						<Panel className="panel">
							<WhyWeStandOut />
						</Panel>
					</Container>
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: { title: "This is server prop" },
	};
}
export default Main;
