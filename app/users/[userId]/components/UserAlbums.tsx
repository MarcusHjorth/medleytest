type Props = {
    promise: Promise<Albums[]>
}

export default async function UserAlbums({ promise }: Props) {
  const albums = await promise
  
  const content = albums.map(albums => {
    return ( 
        <article key={albums.id} className="bg-red-100 rounded-[10px] flex items-center justify-center h-[155px] w-[155px] p-[10px] overflow-hidden overflow-ellipsis hover:bg-red-50">
            <h2>{albums.title}</h2>
        </article>
    )
  })
    return content
}
