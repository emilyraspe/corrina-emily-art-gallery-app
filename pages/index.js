import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtPieces() {
  const {data} = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(data[0]);

  // return (

  // )
}

