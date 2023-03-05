import getUser from "@/lib/getUser"
import getUserAlbums from "@/lib/getUserAlbums"
import { Suspense } from "react"
import UserAlbums from "./components/UserAlbums"
import type { Metadata } from 'next'
import FollowButton from "./components/FollowButton"


type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId }}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  return {
    title: user.name,
    description: `this is the page of ${user.name}`
  }
}

export default async function UserPage({ params: { userId }}: Params) {
  const userData: Promise<User> = getUser(userId)
  const userAlbumsData: Promise<Albums[]> = getUserAlbums(userId)
  const user = await userData

  return (
    <main className="max-w-[1000px] m-auto p-[10px]">
      <div className="flex flex-row items-center my-8">
        <div className="w-full flex flex-col">
          <h2 className="font-bold text-[24px] mb-[10px]">{user.name}</h2>
          <p>Website: <a className="font-bold" href={user.website} target="_blank">{user.website}</a></p>
        </div>

        <FollowButton />
      </div>

        <section className="flex flex-wrap gap-[10px] justify-start">
          <Suspense fallback={<h2>Loading ...</h2>}>
            {/* @ts-expect-error Server Compoent */}
            <UserAlbums promise={userAlbumsData}/>
          </Suspense>
        </section>
    </main>
  )
}
