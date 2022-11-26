import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PocketBase from 'pocketbase'

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
      <div className="block text-center">
        <button onClick={openModal} className="bg-pink-400 text-white p-4 rounded-md uppercase">
          Gửi lời chúc
        </button>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Nhắn gửi iu thương...
                    </Dialog.Title>
                    <article className="container mx-auto py-12">
                      <h1>create message:</h1>
                      <form onSubmit={handleSubmit} className="flex flex-col">
                        <input
                          className="border my-2 p-2"
                          value={message.author}
                          onChange={(e) => {
                            setMessage({ ...message, author: e.target.value })
                          }}
                          type="text"
                          placeholder="author"
                          name="author"
                        />
                        <input
                          className="border my-2 p-2"
                          value={message.content}
                          required
                          onChange={(e) => {
                            setMessage({ ...message, content: e.target.value })
                          }}
                          type="text"
                          placeholder="content"
                          name="content"
                        />
                        <button className="border bg-blue-400 rounded-md text-white py-2" type="submit">
                          Send message
                        </button>
                      </form>
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
