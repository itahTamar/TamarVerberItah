import AboutMe from "../component/AboutMe";
import ContactMe from "../component/ContactMe";
import MyProjects from "../component/MyProjects";
import Navbar from "../component/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <AboutMe />
        <MyProjects />
        <ContactMe />
      </div>
    </>
  );
};

export default LandingPage;
