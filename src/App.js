import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import UserCard from "./Components/UserCard/UserCard";
import Footer from "./Components/Footer/Footer";
// import { Button } from "semantic-ui-react";
import { itemsData } from "./Components/ItemList/ItemList"
import Counter from "./Components/itemCount/itemCount"

class App extends Component {
  constructor() {
    super();
    // this.state = {
    // counter: 1,
    // };
    this.state = {
    items: []
    };
  }

    componentDidMount() {
    setTimeout(() => {
      console.log("ComponentDidMount");
      this.setState({ items: itemsData });
    }, 2000);
  }

  // ///Itemcount
  // handleCounterUp = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // handleCounterDown = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };

  render() {
        console.log(this.state.items);

    return (
      
      <div className="App">
        <Header
          // title={"Raven_Zone"}
          // color={"yellow"}
          // subtitle={"Bienvenido a la Family"}
        />

        <div className="UserSection">
          <UserCard
            producto={"Ryzen 5 3600X"}
            precio={"Lanzado en 30 de Noviembre del 2020."}
            description={"Procesador gamer AMD Ryzen 5 3600X 100-10000"}
            img={
              "https://bingua.com/images/cotizacion_images/20201128_142222_5188.jpg.jpg"
            }/>

          <UserCard
            producto={"Ryzen 5 3600X"}
            precio={"Lanzado en 30 de Noviembre del 2020."}
            description={"Procesador gamer AMD Ryzen 5 3600X 100-10000"}
            img={
              "https://bingua.com/images/cotizacion_images/20201128_142222_5188.jpg.jpg"
            }/>

          <UserCard
            producto={"Ryzen 5 3600X"}
            precio={"Lanzado en 30 de Noviembre del 2020."}
            description={"Procesador gamer AMD Ryzen 5 3600X 100-10000"}
            img={
              "https://bingua.com/images/cotizacion_images/20201128_142222_5188.jpg.jpg"
            }/>

          <UserCard
            producto={"Ryzen 5 3600X"}
            precio={"Lanzado en 30 de Noviembre del 2020."}
            description={"Procesador gamer AMD Ryzen 5 3600X 100-10000"}
            img={
              "https://bingua.com/images/cotizacion_images/20201128_142222_5188.jpg.jpg"
            }/>

        </div>
        <section className="Listado">
        <h1>Listado de Productos</h1>
        {this.state.items.map((item) => {
          return (
            <div>
            <ul key={item.id}>
              <li>
                {item.nombre} - precio: ${item.precio}
              </li>
            </ul>
            </div>
          );
        })}
       <Counter/>

        </section>



          {/* <div className="CounterSection">
          <h3>Añadir</h3>
          <span className="span-counter">{this.state.counter}</span>
          <div className="btn-section">
            <Button attached="left" onClick={this.handleCounterDown}>
              -
            </Button>
            <Button attached="right" onClick={this.handleCounterUp}>
              +
            </Button>
          </div>
        </div> */}

        <Footer />
      </div>
    );
  }
}

export default App;
