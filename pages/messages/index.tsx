import { useEffect } from 'react'
import PocketBase from 'pocketbase'
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Messages() {
  console.log(process.env.NEXT_PUBLIC_HOST)
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_HOST}/api/collections/messages/records`, fetcher)
  const { mutate } = useSWRConfig()

  useEffect(() => {
    const client = new PocketBase(process.env.NEXT_PUBLIC_HOST)
    client.realtime.subscribe('messages', () => {
      mutate(`${process.env.NEXT_PUBLIC_HOST}/api/collections/messages/records`)
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
      <div className="flex flex-wrap">
        {data.items?.map((item: any) => (
          <section className="w-1/3 m-2" key={item.id}>
            <div className="border p-4 rounded-md">
              <h1>author: {item.author}</h1>
              <h1>content: {item.content}</h1>
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
