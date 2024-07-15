 import {NavLink} from 'react-router-dom'
 export default function Header() {
   return (
     <>
       <div className='w-[430px] md:w-[750px] lg:w-[1010pxpx] xl:w-[1280px] h-11 px-4 py-2 xl:px-[90px] bg-white justify-between items-center inline-flex'>
         <div className='justify-start items-center gap-3 flex'>
           <div className="text-zinc-900 text-lg font-bold font-['Lato']">
             TimbuCloudShop
           </div>
         </div>
         <div className='w-6 h-6 relative' />
         <NavLink to='/cart'> cart</NavLink>
       </div>
     </>
   );
 }
