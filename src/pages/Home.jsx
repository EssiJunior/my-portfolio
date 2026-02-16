// REACT COMPONENTS
import { memo } from "react";

// HOOKS
import { useTheme } from "styled-components";

// CUSTOMIZED CONTAINERS
import Hero from "@/containers/Hero/Hero";
import About from "@/containers/About/About";
import Experience from "@/containers/Experience";
import Skills from "@/containers/Skills/Skills";
import Education from "@/containers/Education/Education";
import Projects from "@/containers/Projects/Projects";
import ContactBloc from "@/containers/ContactBloc/ContactBloc";

// CUSTOMIZED COMPONENTS
import SEO from "@/components/SEO/SEO";

// UTILITIES
import { themeProps } from "@/utils/prop-types";
import { baseURL } from "@/utils";

const Home = memo(function Home({ skillsRef, educationRef }) {
  const theme = useTheme();

  return (
    <main
      className="home"
      style={{
        backgroundColor: `${theme.colors.bg}`,
        color: `${theme.colors.text}`,
      }}
    >
      <SEO
        title={`Essi Junior's portfolio - Homepage`}
        description="This is Essi Junior's portfolio website homepage. Here you can view all his professional skills, academic level, resume, public works and work mentatility."
        name="Essi Junior"
        type="homepage"
        link={`${baseURL}`}
      />

      <Hero />
      <About />
      <Experience />
      <Skills skillsRef={skillsRef} />
      <Education educationRef={educationRef} />
      <Projects />
      <ContactBloc />
    </main>
  );
})

Home.propTypes = themeProps;
export default Home;