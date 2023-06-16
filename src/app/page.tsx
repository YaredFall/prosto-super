import Image from 'next/image'
import { tw } from "twind";
import Carousel from "@/components/Slider/Carousel";

export default function Home() {
  return (
    <main className={""}>
      <Carousel />
    </main>
  )
}
