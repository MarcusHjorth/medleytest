export default async function getUserAlbums(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    
    if (!res.ok) throw new Error('failed to fetch user')
      
    return res.json()
}