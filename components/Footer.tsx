import Image from 'next/image'

import CDCR from 'assets/CDCR.jpg'

function Footer() {
  return (
    <section className="container mx-auto">
      <Image placeholder="blur" src={CDCR} alt="CDCR" />
      <div className="text-center my-24">
        <h1 className="text-3xl font-hand">Thanks for scrolling to the footer</h1>
        <p>if u found a 🐞, please ignore 👻, hava nice day!</p>
        <p className="text-xs text-secondary">
          <a target="_blank" rel="noreferrer" href="https://github.com/duongital/project-dk">
            open src by @duongital
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
