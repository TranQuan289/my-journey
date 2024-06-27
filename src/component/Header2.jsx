export function Header2({num}) {
    return (
        <>
         <div className='flex flex-col items-center justify-center min-h-screen bg-white'> 
        <button onClick={() => {}}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          count is {num}
        </button>
        <p className="text-center mt-4 text-gray-500">
          page 2222222
        </p>
      </div>
        </>
    )
}