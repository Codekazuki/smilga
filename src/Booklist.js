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
};

const Booklist = () => {
  return (
    <div>
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
      />
    </div>
  );
};

const Team = (props) => {
  return (
    <section>
      <h1> {props.name} </h1>
      <h2>{props.position}</h2>
      <img src={props.image} alt={props.position} />
    </section>
  );
};

export default Booklist;
