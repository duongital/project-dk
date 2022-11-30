import { useEffect } from 'react'
import PocketBase from 'pocketbase'
import useSWR, { useSWRConfig } from 'swr'

type Card = {
  id: string
  content: string
  author: string
  created: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ComingSoon() {
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

  if (error) return <div>lỗi</div>
  if (!data) return <div>đang tải...</div>

  return (
    <article className="container mx-auto my-12">
      <div className="flex flex-wrap">
        {data.items
          ?.sort((a: Card, b: Card) => new Date(b.created).getTime() - new Date(a.created).getTime())
          .map((item: Card) => (
            <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={item.id}>
              <div className="border p-2 rounded-md bg-card">
                <p className="text-center text-xs">{item.content}</p>
                <hr className="border-gray-400/50 my-4" />
                <h1 className="text-md text-center font-bold">{item.author}</h1>
                {/* <pre className="text-xs">{JSON.stringify(item.created)}</pre> */}
              </div>
            </section>
          ))}
      </div>
    </article>
  )
}
