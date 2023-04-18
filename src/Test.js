import "./index.css";

export const Test = () => {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

const Book = () => {
  return (
    <>
      <Image />
      <Article />
      <Author />
    </>
  );
};
const Article = () => {
  return <h1>Ogboju ode ninu igbo irunmole</h1>;
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41cz4hZbMAL._AC_UL400_.jpg"
    alt="imagef"
  />
);
const Author = () => <h2>Agbowuro Ayodele</h2>;
