import { useState } from 'react'
import PocketBase from 'pocketbase'

export default function CreateMessage() {
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
  }

  return (
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
  )
}
