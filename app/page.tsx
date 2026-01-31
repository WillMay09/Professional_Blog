import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {HeroPage} from "./components/heroPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Footer />
    </>
  );
}
