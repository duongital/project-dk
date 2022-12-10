import Image from 'next/image'

import CD from 'assets/CD.jpg'
import CR from 'assets/CR.jpg'
import CDCR from 'assets/CDCR.jpg'

function Introduction() {
  return (
    <section className="container mx-auto flex flex-wrap justify-around my-24">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center gap-y-4 mb-12">
        <Image className="rounded-full" src={CR} alt="CR" width={200} height={200} />
        <h1 className="text-3xl font-light text-primary">Đại Dương</h1>
        <i className="text-center text-gray-600">
          Chàng IT nhà huê với nhiều đam mê và nỗ lực xây dựng đế chế duongital phủ rộng khắp thế giới. Tương lai sẽ sở
          hữu nhiều căng biệt thự triệu đô. Hiện tại có khối tài sản là nhiều tấm lòng vàng.
        </i>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center gap-y-4 mb-12">
        <Image className="rounded-full" src={CD} alt="CD" width={200} height={200} />
        <h1 className="text-3xl font-light text-primary">Hoàng Khánh</h1>
        <i className="text-center text-gray-600">
          Cô em thành thị với nhiều năng lượng nhất thời, hay mơ mộng và lúc này lúc nọ. Nếu muốn hiểu được Khánh thì
          mọi người phải dự đoán được chỉ số vn-index ngày mai, đặc biệt là mã HSG.
        </i>
      </div>
    </section>
  )
}

export default Introduction
