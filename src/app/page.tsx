import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <HeaderMenu />
      <Header />
      <Education />
      <Projects />
      <Work />
      <Footer />
    </>
  );
}
