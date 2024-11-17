import Link from "next/link";
import Main from "./components/Main";
import AuthService from "@/service/AuthService";

export default async function Home() {

  // const user = await AuthService.getSession();

  return (
    <>
      <Main />
    </>
  );
}
