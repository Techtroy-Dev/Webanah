/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import Head from "next/head"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import React, { useState, useEffect, useRef } from "react";
import { Scrolls } from "../src/components/Sub-Components/scrollbars"
import BusinessGrowthAgency from "../src/components/Main-Components/about-us/business-growth-agency"
import AboutUs from "../src/components/Main-Components/about-us/about-us"
import OurMission from "../src/components/Main-Components/about-us/our-mission"
import OurCoreValues from "../src/components/Main-Components/about-us/our-core-values"
import BuildTheBestExperience from "../src/components/Main-Components/about-us/build-the-best-experience"
import Testimonials from "../src/components/Main-Components/about-us/testimonials"
import LetsWorkTogether from "../src/components/Main-Components/about-us/lets-work-together"
import Layout from "../src/components/Main-Components/Layout"

const Space = styled.div`
  padding: 5% 0;
`

const Container = styled.div`
  width: 700vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
`

const Panel = styled.div`
  // X-Small devices (portrait phones, less than 576px)
  width: 100vw;
  height: 100vh;
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

const About = () => {
    const containerRef = useRef(null);
    const [section, setSection] = useState(0); // Section of page we are currently ON.
    const [toSection, setToSection] = useState(0);
    const sectionTitles = ['BUSINESS GROWTH AGENCY', 'ABOUT US', 'OUR MISSION', 'OUR CORE VALUES', 'BUILD THE BEST EXPERIENCE', 'TESTIMONIALS', 'LETS WORK TOGETHER']
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let duration = 0.25,
            sections = containerRef.current.querySelectorAll(".panel"),
            sectionIncrement = duration / (sections.length - 1),
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    start: "top top",
                    end: "+=1500"
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
            addSectionCallbacks(tl, {
                start: sectionIncrement * (index - 0.99),
                end: sectionIncrement * (index + 0.99),
                onEnter: () => { tween.play(), setSection(index)/*, console.log("ABOUT onEnter: ", index)*/ },
                onLeave: () => { tween.reverse(), setSection(index + 1)/*, console.log("ABOUT onLeave: ", index)*/ },
                onEnterBack: () => { tween.play(), setSection(index)/*, console.log("ABOUT onEnterBack: ", index)*/ },
                onLeaveBack: () => { tween.reverse(), setSection(index - 1)/*, console.log("ABOUT onLeaveBack: ", index)*/ }
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
        console.log("ABOUT mounted");
        return () => { tl.pause().kill(), console.log("ABOUT unmounted"); };
    }, []);

    // useEffect(() => {
    //     console.log("toSection: ", toSection)
    //     let duration = 1,
    //         sections = containerRef.current.querySelectorAll(".panel");

    //     timeLine.to(sections, {
    //         xPercent: 100 * toSection,
    //         duration: duration,
    //         ease: "none"
    //     });
    // }, [toSection]);


    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/images/Webanah_logo.png" type="image/png"></link>
            </Head>
            <Scrolls total={7} current={section} onNavigate={setToSection} sectionTitles={sectionTitles} />
            <Layout backgroundimage='/images/background2.png'>
                {/* <BusinessGrowthAgency />
            <Space />
            <AboutUs />
            <Space />
            <OurMission />
            <Space />
            <OurCoreValues />
            <Space />
            <BuildTheBestExperience />
            <Space />
            <LetsWorkTogether />
            <Space /> */}
                <Container ref={containerRef}>
                    <Panel className="panel">
                        <BusinessGrowthAgency />
                    </Panel>
                    <Panel className="panel">
                        <AboutUs />
                    </Panel>
                    <Panel className="panel">
                        <OurMission />
                    </Panel>
                    <Panel className="panel"
                        css={css`
                          display: flex;
                          flex-direction: column;
                          justify-content: center;
                          // X-Large devices (large desktops, 1200px and up)
                          @media (min-width: 1200px) { 
                          	  margin-bottom: 5rem;
                          	  }
                          `}
                    >
                        <OurCoreValues />
                    </Panel>
                    <Panel className="panel"
                        css={css`
                          padding-left: 0px;
                      /* padding-right: 5rem; */
                      `}>
                        <BuildTheBestExperience />
                    </Panel>
                    <Panel className="panel"
                        css={css`
                          display: flex;
                          flex-direction: column;
                          justify-content: center;
                          // X-Large devices (large desktops, 1200px and up)
                          @media (min-width: 1200px) { 
                          	  /* margin-bottom: 5rem; */
                          	  }
                          `}
                    >
                        <Testimonials />
                    </Panel>
                    <Panel className="panel">
                        <LetsWorkTogether />
                    </Panel>
                </Container>
            </Layout>
        </>
    )
}

export default About