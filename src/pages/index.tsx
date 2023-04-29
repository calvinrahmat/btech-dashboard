import Navbar from "components/Navbar";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col justify-between bg-white">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
