import { lazy, Suspense } from "react";

import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./sections/Header/Header.jsx";
import Hero from "./sections/Hero/Hero.jsx";

const Benefits = lazy(() => import("./sections/Benefits/Benefits.jsx"));
const Collaboration = lazy(() =>
  import("./sections/Collaboration/Collaboration.jsx")
);
const Services = lazy(() => import("./sections/Services/Services.jsx"));
const Pricing = lazy(() => import("./sections/Pricing/Pricing.jsx"));
const Roadmap = lazy(() => import("./sections/Roadmap/Roadmap.jsx"));
const Footer = lazy(() => import("./sections/Footer/Footer.jsx"));

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Suspense
          fallback={
            <div className="h-[40rem] flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Pricing />
          <Roadmap />
          <Footer />
        </Suspense>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
