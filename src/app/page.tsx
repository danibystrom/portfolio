import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <HeaderMenu />
      <Header />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}
