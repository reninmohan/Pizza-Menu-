import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js";
import "./index.css";

function Header() {
  // const style = { color: "red", fontSize: "100px" };
  return (
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzaNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Menu</h2>

      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic italian cruisine. 6 creative dishes to choose from. All
            from our stone oven. all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
function Pizza({ pizza }) {
  return (
    <li className={`${pizza.soldOut ? "pizza sold-out" : "pizza"}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours().toString();
  const openHour = 9;
  const closedHour = 24;
  const isOpen = hour >= openHour && hour <= closedHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} />
      ) : (
        <p>
          We're are happy to welcome you between {openHour}:00 and {closedHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order({ closedHour }) {
  return (
    <div className="order">
      <p>We're are open until {closedHour}:00 Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//creating root varible and rendering it on screen.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
