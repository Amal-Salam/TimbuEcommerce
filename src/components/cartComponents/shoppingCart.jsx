import Recommendations from "./recommendations";
import { NavLink } from "react-router-dom";

export default function ShoppingCart(){
    return (
      <>
        <div className='w-[430px] h-10 px-4 py-2 justify-start items-center gap-[246px] inline-flex'>
          <div className='justify-start items-center gap-3 flex'>
            <div className='w-6 h-6 relative origin-top-left -rotate-90' />
            <div className='justify-start items-center gap-3 flex'>
              <NavLink to='/'>
                <div className="text-zinc-900 text-base font-bold font-['Lato']">
                  {' '}
                  ---Cart
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className='w-[430px] h-[41px] pl-4 pr-3 py-3 bg-slate-700 justify-start items-center gap-2.5 inline-flex'>
          <div className="text-white text-sm font-bold font-['Lato']">
            Cart Summary
          </div>
        </div>
        <div className='w-[430px] h-[65px] px-4 py-3 border-b border-stone-300 flex-col justify-start items-start gap-2 inline-flex'>
          <div className='self-stretch justify-between items-center inline-flex'>
            <div className="text-zinc-900 text-base font-bold font-['Lato']">
              Subtotal
            </div>
            <div className="text-zinc-800 text-base font-bold font-['Lato']">
              $ 100.09
            </div>
          </div>
          <div className="self-stretch text-zinc-500 text-xs font-medium font-['Lato']">
            Delivery fees not included yet.
          </div>
        </div>
        <div className='w-[430px] h-[41px] pl-4 pr-3 py-3 bg-slate-700 justify-start items-center gap-2.5 inline-flex'>
          <div className="text-white text-sm font-bold font-['Lato']">Cart</div>
        </div>
        <div className='w-[430px] h-[182px] px-4 py-3 bg-white border-t border-b border-slate-700 flex-col justify-start items-start gap-3 inline-flex'>
          <div className='justify-start items-center gap-3 inline-flex'>
            <div className='w-[100px] h-[100px] relative bg-zinc-100' />
            <img
              className='w-[55px] h-[86px]'
              src='https://via.placeholder.com/55x86'
            />
            <div className='flex-col justify-center items-start gap-1 inline-flex'>
              <div className="self-stretch text-zinc-800 text-lg font-medium font-['Lato']">
                Mesh Chair
              </div>
            </div>
          </div>
          <div className='w-6 h-6 relative' />
          <div className='self-stretch justify-between items-center inline-flex'>
            <div className='justify-start items-start flex'>
              <div className='w-[30px] h-[30px] px-[9px] py-[3px] origin-top-left -rotate-180 bg-orange-200 rounded-tr-sm rounded-br-sm justify-center items-center flex'>
                <div className='w-3 h-6 relative flex-col justify-start items-start flex' />
              </div>
              <div className='w-[30px] h-[30px] pl-2.5 pr-[9px] py-1 bg-stone-300 justify-center items-center flex'>
                <div className="text-zinc-900 text-lg font-medium font-['Lato']">
                  1
                </div>
              </div>
              <div className='w-[30px] h-[30px] px-[9px] py-[3px] bg-yellow-600 rounded-tr-sm rounded-br-sm justify-center items-center flex'>
                <div className='w-3 h-6 relative flex-col justify-start items-start flex' />
              </div>
            </div>
            <div className="text-zinc-800 text-base font-medium font-['Lato'] leading-7">
              $ 100.09
            </div>
          </div>
        </div>
        <div className="w-[430px] h-[285px] flex-col justify-start items-center gap-3 inline-flex">
    <div className="self-stretch h-[223px] flex-col justify-start items-start flex">
        <div className="self-stretch pl-4 pr-3 py-3 bg-slate-700 justify-start items-center gap-2.5 inline-flex">
            <div className="text-white text-sm font-bold font-['Lato']">Cart</div>
        </div>
        <div className="self-stretch h-[182px] px-4 py-3 bg-white border-t border-b border-slate-700 flex-col justify-start items-start gap-3 flex">
            <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-[100px] h-[100px] relative bg-zinc-100" />
                <img className="w-[55px] h-[86px]" src="https://via.placeholder.com/55x86" />
                <div className="flex-col justify-center items-start gap-1 inline-flex">
                    <div className="self-stretch text-zinc-800 text-lg font-medium font-['Lato']">Mesh Chair</div>
                </div>
            </div>
            <div className="w-6 h-6 relative" />
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-start flex">
                    <div className="w-[30px] h-[30px] px-[9px] py-[3px] origin-top-left -rotate-180 bg-orange-200 rounded-tr-sm rounded-br-sm justify-center items-center flex">
                        <div className="w-3 h-6 relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="w-[30px] h-[30px] pl-2.5 pr-[9px] py-1 bg-stone-300 justify-center items-center flex">
                        <div className="text-zinc-900 text-lg font-medium font-['Lato']">1</div>
                    </div>
                    <div className="w-[30px] h-[30px] px-[9px] py-[3px] bg-yellow-600 rounded-tr-sm rounded-br-sm justify-center items-center flex">
                        <div className="w-3 h-6 relative flex-col justify-start items-start flex" />
                    </div>
                </div>
                <div className="text-zinc-800 text-base font-medium font-['Lato'] leading-7">$ 100.09</div>
            </div>
        </div>
    </div>
    <div className="w-[398px] h-[50px] px-6 py-3.5 bg-yellow-600 rounded-2xl justify-center items-center gap-2.5 inline-flex">
        <NavLink to='/checkout'>
        <div className="text-white text-lg font-bold font-['Lato']">Continue to checkout</div>
        </NavLink>
        
    </div>
</div>

       <Recommendations/>
      </>
    );
}