import ItemList from "../app/components/list"

export default async function Home() {
  return (
    <div className='bg-base-300 w-screen min-h-screen flex justify-center'>
      <div className="m-8 bg-base-100 w-full rounded-md flex justify-center">
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <div className="card-body">
            <h2 className="card-title text-primary text-3xl">Countries</h2>

            <ItemList />

          </div>
        </div>
      </div>
    </div>
  )
}