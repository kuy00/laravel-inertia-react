import Layout from "./Layout";
import { Head } from "@inertiajs/react";

type HomeProps = {
  message: string;
}

const Home = (props: HomeProps) => {
  const {
    message,
  } = props;

  return (
    <Layout>
      <Head title="Home" />
      <h1>{message}</h1>
    </Layout>
  );
};

export default Home;
