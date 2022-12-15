import Image from 'next/image'

import FlowerLeft from 'assets/floral-left.png'
import FlowerRight from 'assets/floral-right.png'

function Cover() {
  const SIZE = 200
  return (
    <div className="flex justify-between items-center my-12">
      <Image placeholder="blur" width={SIZE} height={SIZE} alt="left" src={FlowerLeft} />
      <div className="flex flex-col text-center whitespace-nowrap text-secondary font-hand">
        <h1 className="text-3xl md:text-6xl">Save the date</h1>
        <h1 className="text-sm md:text-md">on</h1>
        <h2 className="text-md md:text-2xl">17-18 dec 2022</h2>
      </div>
      <Image placeholder="blur" width={SIZE} height={SIZE} alt="right" src={FlowerRight} />
    </div>
  )
}

export default Cover
