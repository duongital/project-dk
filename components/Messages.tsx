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

  if (error) return <p className="text-center my-24">lỗi</p>
  if (!data) return <p className="text-center my-24">đang tải...</p>

  return (
    <article className="container px-4 md:px-0 mx-auto my-12">
      <div className="columns-1 md:columns-2 lg:columns-3">
        {data.items
          ?.sort((a: Card, b: Card) => new Date(b.created).getTime() - new Date(a.created).getTime())
          .map((item: Card) => (
            <section className="m-0 grid grid-rows-1 break-inside-avoid mb-4" key={item.id}>
              <div className="border p-4 md:p-6 rounded-md bg-card break-inside-avoid">
                <p className="text-center text-xs">{item.content}</p>
                <hr className="border-white my-4" />
                <h1 className="text-secondary text-sm text-center font-bold">{item.author}</h1>
                {/* <pre className="text-xs">{JSON.stringify(item.created)}</pre> */}
              </div>
            </section>
          ))}
      </div>
    </article>
  )
}
