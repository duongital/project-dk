import Image from 'next/image'

import CD from 'assets/CD.jpg'
import CR from 'assets/CR.jpg'

import IconMetamask from 'assets/icon-metamask.svg'
import IconVietcombank from 'assets/icon-vietcombank.svg'

function Introduction() {
  return (
    <section className="container mx-auto flex flex-wrap justify-around my-24 px-4 sm:px-0">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center gap-y-4 mb-12">
        <Image className="rounded-full" src={CR} alt="CR" width={200} height={200} />
        <h1 className="text-3xl font-light text-secondary">Đại Dương</h1>
        <i className="text-center text-gray-600">
          Chàng IT nhà huê với nhiều đam mê và nỗ lực xây dựng đế chế <strong>@duongital</strong> phủ rộng khắp thế
          giới. Tương lai sẽ sở hữu nhiều căn biệt thự triệu đô. Hiện tại có khối tài sản là nhiều tấm lòng vàng.
        </i>
        <div className="text-center">
          <p className="font-bold text-sm opacity-50">Quỹ đen của chú rễ</p>
          <div className="flex gap-x-2 items-center text-secondary">
            <Image width={24} height={24} src={IconMetamask} alt="metamask" />
            <pre className="text-xs">0x293f661a339d87CA2055E91C12Bac4cF08d16666</pre>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center gap-y-4 mb-12">
        <Image className="rounded-full" src={CD} alt="CD" width={200} height={200} />
        <h1 className="text-3xl font-light text-secondary">Hoàng Khánh</h1>
        <i className="text-center text-gray-600">
          Cô em thành thị với nhiều năng lượng nhất thời, hay mơ mộng và lúc này lúc nọ. Nếu muốn hiểu được Khánh thì
          mọi người phải dự đoán được chỉ số vn-index ngày mai, đặc biệt là mã HSG.
        </i>
        <div className="text-center">
          <p className="font-bold text-sm opacity-50">Két sắt của cô dâu</p>
          <div className="flex gap-x-2 items-center text-secondary">
            <Image width={24} height={24} src={IconVietcombank} alt="vietcombank" />
            <pre className="text-xs">9902540756</pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
