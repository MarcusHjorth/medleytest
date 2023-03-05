import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    const userData: Promise<User[]> = getAllUsers()

    const users = await userData

    const content = (
        <section className="max-w-[1000px] m-auto text-center my-8">
            {users.map(user => {
                return(
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )
    return content
}
