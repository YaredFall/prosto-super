import Image from 'next/image'
import Carousel from '@/components/BannerCarousel/Carousel'
import GoodsCategories from '@/components/GoodsCategories'

export default function Home() {
  return (
    <main className={""}>
      <Carousel />
      <GoodsCategories />
    </main>
  )
}
