import "./App.css";

import {
  TopNav,
  HeroSection,
  Main,
  Testimonials,
  About,
  Footer,
} from "./components/main";
function App() {
  return (
    <body id="pageLayout">
      <TopNav />
      <HeroSection />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </body>
  );
}

export default App;
