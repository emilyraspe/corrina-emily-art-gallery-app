export default function Spotlight({ image, artist }) {
  return (
    <>
      <h1>{artist}</h1>
      <img width={"250px"} src={image}></img>
    </>
  );
}
