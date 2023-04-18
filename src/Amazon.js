const firstBook = {
  title: "ralia",
  author: "sugar ray",
  img: "https://m.media-amazon.com/images/I/A1PPOwy0N-L._AC_UL400_.jpg",
};
const secondBook = {
  title: "sugar girl",
  author: "sugar ray leonard",
  img: "https://m.media-amazon.com/images/I/A1PPOwy0N-L._AC_UL400_.jpg",
};
const extraFeat = {
  feature: "as i dey try stuffs nau",
};
const Amazon = (props) => {
  return (
    <>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h2>{props.author}</h2>
      <h4>{props.feature}</h4>
    </>
  );
};
export const Amazonn = () => {
  return (
    <div>
      <Amazon
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        feature={extraFeat.feature}
      />
      <Amazon
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </div>
  );
};
