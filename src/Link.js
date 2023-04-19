export const Link = () => {
  return (
    <div>
      <Club />
    </div>
  );
};

const Club = () => {
  return (
    <div>
      <Image />
      <Feature />
      <Description />
    </div>
  );
};

const Image = () => {
  return (
    <img
      src="https://media.istockphoto.com/id/1349288517/photo/christmas-bell-on-transparent-background.jpg?b=1&s=170667a&w=0&k=20&c=I6n9QR38pIvmo_i3jQp7yMJDKGUKqPEGbYN10AbO2ts="
      alt=""
    />
  );
};
const Feature = () => {
  return <h1>Doing good at all times</h1>;
};
const Description = () => {
  return <h4> Lorem ipsum dolor sit amet.</h4>;
};
