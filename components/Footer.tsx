import Image from 'next/image'

import CDCR from 'assets/CDCR.jpg'

function Footer() {
  return (
    <section className="container mx-auto">
      <Image placeholder="blur" src={CDCR} alt="CDCR" />
      <div className="text-center my-24">
        <h1 className="text-4xl">Cám ơn mọi người đã kéo đến đây</h1>
        <p>website có bug gì hú mình nha, hava nice day!</p>
        <p className="text-xs text-secondary">
          <a target="_blank" rel="noreferrer" href="https://github.com/duongital/project-dk">
            open source by @duongital
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
