import Image from 'next/image'

import FlowerLeft from 'assets/floral-left.png'
import FlowerRight from 'assets/floral-right.png'

function Cover() {
  const SIZE = 200
  return (
    <div className="flex justify-between items-center my-12">
      <Image placeholder="blur" width={SIZE} height={SIZE} alt="left" src={FlowerLeft} />
      <div className="flex flex-col text-center text-3xl md:text-6xl whitespace-nowrap text-secondary">
        <h1>Đại Dương</h1>
        <h1 className="text-sm">&</h1>
        <h1>Hoàng Khánh</h1>
      </div>
      <Image placeholder="blur" width={SIZE} height={SIZE} alt="right" src={FlowerRight} />
    </div>
  )
}

export default Cover
