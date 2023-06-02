import React from "react";
import "./First.css";

export function First() {
  return (
    <section className="first">
      <Book />
      <Book />
      <Book />
      <Book />
      <Newbook />
    </section>
  );
}
const Newbook = () => {
  return (
    <section className="book">
      <Authour />
      <Newimage />
      <Title />
      <Messsage />
    </section>
  );
};
const Book = (props) => {
  return (
    <div className="book">
      <Authour />
      <Image />
      <Title />
      <Messsage />
    </div>
  );
};

const Newimage = () => <img src="./asset/wisdom.jpg" alt="" />;
const Authour = () => (
  <h1 style={{ fontSize: "2.5rem", color: "green" }}>Ayodele Agbowuro</h1>
);
const Image = () => (
  <img
    src="https://media.istockphoto.com/id/1362996689/photo/chocolate-splashed-on-transparent-background-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=MPRdBa3qccn0WtMq7jL79WntZtnwf-GqxnmRjt6dYus="
    alt=""
  />
);
const Title = () => <h4>the title</h4>;
const Messsage = () => <h3>hiiiiiiiiiiiiii</h3>;
