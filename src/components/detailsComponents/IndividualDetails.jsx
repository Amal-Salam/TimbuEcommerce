
export default function IndividualDetails(){

    return(
        <>
         <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            <div>
                <img src="" alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl uppercase font-bold'>name</h1>
                <p className='font-bold text-3xl'>
                    $price
                </p>
                <div className='flex gap-5'>
                    <div className='flex gap-2 justify-center items-center'>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' >-</button>
                        <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>quantity</span>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' >+</button>
                    </div>
                    <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl' >
                        Add To Cart
                    </button>
                </div>
                <p>
                    description
                </p>
            </div>
        </div>
   
        </>
    )
}