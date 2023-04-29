import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn-ghost btn text-lg normal-case">Btech Dashboard</a>
        </div>
        <div className="dropdown">
          <UserButton />
        </div>
      </div>
    </>
  );
}
