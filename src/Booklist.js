import "./First.css";

const player1 = {
  name: "Lampard",
  position: "Midfield",
  image: "./asset/lamps.jpg",
};

const player2 = {
  name: "Gerrard",
  position: "Midfield",
  image: "./asset/gerrard.png",
};
const player3 = {
  name: "Scholes",
  position: "Midfield",
  image: "./asset/scholes.jpg",
  alt: "Central midfielder",
};

const Booklist = () => {
  return (
    <div className="first">
      <Team
        name={player1.name}
        position={player1.position}
        image={player1.image}
      />
      <Team
        name={player2.name}
        position={player2.position}
        image={player2.image}
      />
      <Team
        name={player3.name}
        position={player3.position}
        image={player3.image}
        alt={player3.alt}
      />
    </div>
  );
};

const Team = (props) => {
  return (
    <section className="book">
      <h1> {props.name} </h1>
      <h2>{props.position}</h2>
      <img src={props.image} alt={props.alt} />
    </section>
  );
};

export default Booklist;
