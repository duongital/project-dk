import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PocketBase from 'pocketbase'

import Image from 'next/image'

import ComposeFlower from 'assets/compose-flower.png'

function CreateMessage() {
  let [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState({
    author: '',
    content: '',
  })
  const client = new PocketBase(process.env.NEXT_PUBLIC_HOST)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(message)
    await client.records.create('messages', message)
    setMessage({
      author: '',
      content: '',
    })
    closeModal()
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div>
        <h1 className="text-4xl text-center font-light uppercase">Gửi lời yêu thương</h1>
        <p className="text-center w-full md:w-2/3 mx-auto my-4">
          Hãy cùng gửi đến đôi bạn trẻ Dương&Khánh những lời yêu thương cho hành trình mới của mình nhé!{' '}
        </p>
        <div className="w-full text-center my-8">
          <button onClick={openModal} className="bg-primary text-white p-4 rounded-md uppercase">
            Viết lời chúc
          </button>
        </div>
      </div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-primary py-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-2xl font-light leading-6 text-white uppercase text-center">
                      Viết lời chúc
                    </Dialog.Title>
                    <article className="container py-12">
                      <div className="flex justify-between">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full pl-6">
                          <label htmlFor="author" className="flex flex-col ">
                            <span className="text-white">Người gửi</span>
                            <input
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-2 text-secondary"
                              value={message.author}
                              onChange={(e) => {
                                setMessage({ ...message, author: e.target.value })
                              }}
                              type="text"
                              name="author"
                            />
                          </label>
                          <label htmlFor="content" className="flex flex-col text-white rounded-md">
                            <span className="text-white">Lời chúc</span>
                            <textarea
                              className="text-secondary p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
                              value={message.content}
                              rows={3}
                              required
                              onChange={(e) => {
                                setMessage({ ...message, content: e.target.value })
                              }}
                              defaultValue="..."
                              name="content"
                            />
                          </label>
                          <button className="bg-secondary w-fit rounded-md text-white py-2 px-12 mx-auto" type="submit">
                            Gửi
                          </button>
                        </form>
                        <Image src={ComposeFlower} width={300} height={100} alt="flower" />
                      </div>
                    </article>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  )
}

export default CreateMessage
