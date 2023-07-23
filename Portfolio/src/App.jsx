import "./App.css";
import Companies from "./Components/Companies";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Hero2 from "./Components/Hero2";
import Navbar from "./Components/Navbar";
import RecentProjects from "./Components/RecentProjects";

function App() {
  return (
    <>
      <div className="NavBar">
        <div>
          <Navbar />
        </div>
      </div>
      <div className="hero1">
        <div className="brightness1">
          <Hero />
        </div>
        <div className="brightness2"></div>
      </div>

      <div className="hero2">
        <Hero2 />
      </div>

      <div className="RecentProject">
        <RecentProjects />
      </div>

      <div className="Companies">
        <Companies />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
