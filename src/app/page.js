
import Image from "next/image";
import Nav from "./Components/Nav";
import Blox from "./Components/Blox";
import Activity from "./Components/Activity";
import Certificate from "./Components/Certificate";
import Good from '../../public/good.JPG';

export default function Home() {
  return (
    <>
      <Nav />
      {/* <Dropdown /> */}
      <Blox />
      <Activity />
      <Certificate />
    </>
  );
}
