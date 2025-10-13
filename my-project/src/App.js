import "./App.css";
import logo from "./images/logo.jpg";
import snacksImage from "./images/snacks.jpg";
import Elanji from "./images/Elanji.jpeg";
import kaypola from "./images/kaypola.jpeg";
import ullivada from "./images/ullivada.webp";
function App() {
  return (
    <body id="pageLayout">
      <nav id="navigation">
        <img src={logo} alt="logo" />
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Reservations</button>
        <button>Order online</button>
        <button>Login</button>
      </nav>
      <header id="heroSection">
        <content>
          <h1>Tattukkada</h1>
          <h2>Kochi</h2>
          <p>
            Authntic Kerala Food with a mix of traditional and modern cuisine
          </p>
          <p>Open from 10:00 AM to 12:00 pm and 4pm to 10pm</p>
          <button>Reserve a table</button>
        </content>
        <img src={snacksImage} alt="snacksImage" />
      </header>
      <main id="highlights">
        <heading>
          <h1>Specials</h1>
          <button>Online Menu</button>
        </heading>
        <section>
          <special1>
            <img src={Elanji} alt="Elanji" />
            <h1>Elanji</h1>
            <p>A mix of grated coconut and dryfruits!</p>
          </special1>
          <special2>
            <img src={kaypola} alt="Kaypola" />
            <h1>Kaypola</h1>
            <p>Fruits in an Egg cake!</p>
          </special2>
          <special3>
            <img src={ullivada} alt="Ullivada" />
            <h1>Ullivada</h1>
            <p>Onion with batter deep fried!</p>
          </special3>
        </section>
      </main>
      <header id="testimonials">
        <h1>Testimonials</h1>
      </header>
      <footer id="footer">
        <h1>Footer</h1>
      </footer>
    </body>
  );
}

export default App;
