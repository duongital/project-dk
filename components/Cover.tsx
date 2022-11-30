import Image from 'next/image'

import FlowerLeft from 'assets/floral-left.png'
import FlowerRight from 'assets/floral-right.png'

function Cover() {
  const SIZE = 200
  return (
    <div className="flex justify-between items-center my-12">
      <Image width={SIZE} height={SIZE} alt="left" src={FlowerLeft} />
      <div className="flex flex-col text-center text-6xl w-fit break-keep">
        <h1>Đại Dương</h1>
        <h1>&</h1>
        <h1>Hoàng Khánh</h1>
      </div>
      <Image width={SIZE} height={SIZE} alt="right" src={FlowerRight} />
    </div>
  )
}

export default Cover
