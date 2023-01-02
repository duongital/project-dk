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
        <h1 className="text-2xl md:text-4xl text-center font-light uppercase">Gửi lời yêu thương</h1>
        <p className="text-center w-full md:w-2/3 mx-auto my-4">
          Hãy cùng gửi đến đôi bạn trẻ Dương & Khánh những lời yêu thương cho hành trình mới của mình nhé!{' '}
        </p>
        <div className="w-full text-center my-8">
          <button
            onClick={openModal}
            className="uppercase inline-flex items-center rounded-md border border-transparent bg-secondary px-4 py-2 text-base font-light text-white shadow-sm hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2"
          >
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
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-md bg-primary py-6 text-left align-middle shadow-lg transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-light leading-6 text-secondary uppercase text-center"
                    >
                      Viết lời chúc
                    </Dialog.Title>
                    <article className="container py-12">
                      <div className="flex justify-between items-start">
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-y-4 w-full pl-4 md:pl-6 pr-4 md:pr-0"
                        >
                          <label htmlFor="author" className="flex flex-col ">
                            <span className="text-secondary">Người gửi</span>
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
                            <span className="text-secondary">Lời chúc</span>
                            <textarea
                              className="text-secondary p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
                              value={message.content}
                              rows={5}
                              required
                              onChange={(e) => {
                                setMessage({ ...message, content: e.target.value })
                              }}
                              name="content"
                            />
                          </label>
                          <button
                            disabled
                            className="bg-secondary w-fit rounded-md text-white py-2 px-12 mx-auto"
                            type="submit"
                          >
                            Gửi
                          </button>
                        </form>
                        <div className="hidden md:block">
                          <Image placeholder="blur" src={ComposeFlower} width={300} height={300} alt="flower" />
                        </div>
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
