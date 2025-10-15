import logo from "../images/logo.jpg";
import snacksImage from "../images/snacks.jpg";
import Elanji from "../images/Elanji.jpeg";
import kaypola from "../images/kaypola.jpeg";
import ullivada from "../images/ullivada.webp";
import star from "../images/star.png";
import { Link } from "react-router-dom";
import React from "react";

function HomePage() {
  return (
    <React.Fragment>
      <HeroSection />
      <Main />
      <Testimonials />
      <About />
      <Contact />
    </React.Fragment>
  );
}

function TopNav() {
  return (
    <nav id="navigation">
      <img src={logo} alt="logo" />
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/reservations">
        <button>Reservations</button>
      </Link>
      <Link to="/orderonline">
        <button>Order online</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
}

function HeroSection() {
  return (
    <header id="heroSection">
      <content>
        <h1>Tattukkada</h1>
        <h2>Kochi</h2>
        <p>Authntic Kerala Food with a mix of traditional and modern cuisine</p>
        <p>Open from 10:00 AM to 12:00 pm and 4pm to 10pm</p>
        <button>Reserve a table</button>
      </content>
      <img src={snacksImage} alt="snacksImage" />
    </header>
  );
}

function Main() {
  return (
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
  );
}

function Star({ num }) {
  let stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(<img src={star} alt="star" />);
  }
  return <div id="stars">{stars}</div>;
}

function Testimonials() {
  return (
    <header id="testimonials">
      <h1>Testimonials</h1>
      <section>
        <section1>
          <Star num={5} />
          <h1>Ranchal</h1>
          <p>Kaypola or nothing!</p>
        </section1>
        <section2>
          <Star num={5} />
          <h1>Atul</h1>
          <p>Chai se pyaar hai!</p>
        </section2>
        <section3>
          <Star num={5} />
          <h1>Kammath</h1>
          <p>Ullivada the masterpiece!</p>
        </section3>
      </section>
    </header>
  );
}

function About() {
  return (
    <header id="about">
      <h1>About Us</h1>
      <p>
        Started in 2020 by a group of friends who were passionate about kerala
        spices and flavours
      </p>
      <p>
        We use the fresh ingredients and the best quality products to make our
        food
      </p>
      <p>
        With 50 tea varieties and 100 snacks, we are sure to have something for
        everyone
      </p>
    </header>
  );
}

function Login() {
  return <div>Login</div>;
}

function Reservations() {
  return (
    <form id="reservations">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time ">
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

function OrderOnline() {
  return <div>OrderOnline</div>;
}

function Contact() {
  return (
    <content id="footer">
      <img src={logo} alt="logo" />
      <p>Phone: 9876543210</p>
      <p>Email: tattukkada@gmail.com</p>
      <p>Address: somewhere, Kochi</p>
      <p>Copyright @ 2025 Tattukkada</p>
    </content>
  );
}

export { TopNav, HomePage, Login, About, Reservations, OrderOnline, Contact };
