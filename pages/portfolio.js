/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import styled from "@emotion/styled"
import Head from "next/head"
import { Scrolls } from "../src/components/Sub-Components/scrollbars"
import Logfolio from "../src/components/Main-Components/portfolio/logofolio"
import Branding from "../src/components/Main-Components/portfolio/branding"
import Websites from "../src/components/Main-Components/portfolio/websites"
import Layout from "../src/components/Main-Components/Layout"

const Space = styled.div`
  @media (max-width: 991.98px) {
      padding: 10% 0;
   }
`

const Container = styled.div`
  width: 300vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  @media (max-width: 991.98px) {
	  width: auto;
	  height: auto;
	  flex-direction: column;
	  gap: 15vh;
   }
`

const Panel = styled.div`
  // X-Small devices (portrait phones, less than 576px)
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
	  width: 100vw;
  	  height: 100vh;
   }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
	  padding: 0 7.5rem;
	  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {  }

  will-change: transform;
`

const Portfolio = () => {
    const containerRef = useRef(null)
    const [section, setSection] = useState(0); // Section of page we are currently ON.
    const sectionTitles = ['LOGOFOLIO', 'BRANDING', 'WEBSITES']
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const innerWidth = window.innerWidth;
        // console.log('innerWidth: ', innerWidth);
        if (innerWidth > 991.98) {
            let duration = 0.25,
                sections = containerRef.current.querySelectorAll(".panel"),
                sectionIncrement = duration / (sections.length - 1),
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        scrub: true,
                        snap: 1 / (sections.length - 1),
                        start: "top top",
                        end: "+=2000"
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
                    // opacity: 0,
                    // scale: 0.6,
                    duration: 0,
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
            console.log("PORTFOLIO mounted");
            return () => { tl.pause().kill(), console.log("PORTFOLIO unmounted"); };
        }
    }, []);
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/images/Webanah_logo.png" type="image/png"></link>
            </Head>
            <Scrolls total={3} current={section} sectionTitles={sectionTitles} />
            <Layout backgroundimage='/images/background2.png'>
                {/* <PortfolioCard /> */}
                <div>
                    <Space />
                    <Container ref={containerRef}>
                        <Panel className="panel">
                            <Logfolio />
                        </Panel>
                        <Panel className="panel">
                            <Branding />
                        </Panel>
                        <Panel className="panel">
                            <Websites />
                        </Panel>
                        {/* <Panel className="panel">
                            <MobileApps />
                        </Panel> */}
                    </Container>
                    <Space />
                </div>
            </Layout>
        </>
    )
}

export default Portfolio