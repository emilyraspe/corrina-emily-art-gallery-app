export default function Spotlight({ image, artist }) {
  return (
    <>
      <h1>{artist}</h1>
      <img width={"200px"} src={image}></img>
    </>
  );
}
