import { SignIn } from "@clerk/nextjs";
import { NextPage } from "next";
import { FaLock, FaUser } from "react-icons/fa";

const Login: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-white">
        <SignIn />
      </main>
    </>
  );
};

export default Login;
