import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>ERROR: failed to load.</div>;
  if (!data) return <div>...loading</div>;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} error={error} />
      <Layout />
    </>
  );
}
