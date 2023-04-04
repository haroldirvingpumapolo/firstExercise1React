import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Project from "./components/Project";
import Spense from "../src/assets/Spense.png";
import YelpCamp from "../src/assets/YelpCamp.png";
import Callout from "./components/Callout";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div class="background_color-flex">
        <div class="background_color-container">
          <Navbar />
          <Hero />
          <Brands />
          <div class="container-projects">
            <Project
              img={Spense}
              alt={"Spense"}
              title={"Spense.com →"}
              text={
                "Reathing the way writers get paid, an open -source platform designed to hekp writers docus more on weiting, and less on when and how they|| get paid. Project in collaboration with Codewell.cc"
              }
            />
            <Project
              img={YelpCamp}
              alt={"YelpCamp"}
              title={"YelpCamp.com →"}
              text={
                "Allowing backpack travelers to perfectly pllan their trip through an open-source platform somilar to TripAdvisor. Woth  over 1m MAU, YelpCamp has been the crowd`s favorite in 2021."
              }
            />
          </div>
        </div>
      </div>
      <div class="main co_funder">
        <div class="container co_funder-container">
          <div class="co_funder-text">
            <h2>A co-founder at one of the world's largest communities.</h2>
            <p>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              fugiat nostrum quidem labore unde necessitatibus distinctio vero
              bus, qui eius harum quia quodr distinctio incidunt.
              <br />
              <br />
              recusandae maiores quos itaque pariatur distinctio incidunt
              suscipit a nam eos hic id doloribus, qui eius harum quia quod.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a
              <br />
              <br />
            </p>
          </div>
          <p class="co_funder-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugiat
            nostrum quidem labore.
            <br />
            <br />
            aperiam ea cum odit. Officiis sequi architecto, corrupti !
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            impedit exercitationem recusandae maiores quos itaque pariatur
            distinctio incidunt suscipit a nam eos hic id doloribus adipisicing
            elit.
            <br />
            <br />
            qui eius harum quia quod. Lorem ipsum dolor sit amet consectetur
            adipisicing .
          </p>
        </div>
      </div>

      <div class="background_color-flex">
        <div class="background_color-container">
          <Callout />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
