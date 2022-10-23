import { useEffect } from 'react'
import PocketBase from 'pocketbase'
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Messages() {
  const { data, error } = useSWR('http://52.221.227.71/api/collections/messages/records', fetcher)
  const { mutate } = useSWRConfig()

  useEffect(() => {
    const client = new PocketBase('http://52.221.227.71')
    client.realtime.subscribe('messages', () => {
      mutate('http://52.221.227.71/api/collections/messages/records')
    })
    return () => {
      client.realtime.unsubscribe('messages')
    }
  }, [])

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <article className="container mx-auto py-12">
      <h1 className="text-2xl underline">messages</h1>
      {data.items?.map((item: any) => (
        <section className="border p-4 my-2 rounded-md" key={item.id}>
          <h1>author: {item.author}</h1>
          <h1>content: {item.content}</h1>
        </section>
      ))}
    </article>
  )
}
