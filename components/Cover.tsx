import Image from 'next/image'

import FlowerLeft from 'assets/floral-left.png'
import FlowerRight from 'assets/floral-right.png'

import Duong from 'assets/duong.svg'
import And from 'assets/&.svg'
import Khanh from 'assets/khanh.svg'

function Cover() {
  const SIZE = 400
  return (
    <div className="flex justify-between items-center">
      <Image width={SIZE} height={SIZE} alt="left" src={FlowerLeft} />
      <div className="flex flex-col">
        <Image height={80} width={100} alt="Duong" src={Duong} />
        <Image height={40} width={40} alt="and" src={And} />
        <Image height={120} width={500} alt="Khanh" src={Khanh} />
      </div>
      <Image width={SIZE} height={SIZE} alt="right" src={FlowerRight} />
    </div>
  )
}

export default Cover
