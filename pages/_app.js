import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "./components/Layout/Layout";

const fetcher = async (url) => await fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {data: pieces, error, isLoading} = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  if (error) return <div>Failed to Load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component {...pageProps} 
      pieces = {pieces}/>
    </>
  );
}
