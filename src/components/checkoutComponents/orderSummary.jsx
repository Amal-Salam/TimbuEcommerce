export default function OrderSummary(){
    return (
      <>
        <div className='w-[430px] h-[41px] pl-4 pr-3 py-3 bg-slate-700 justify-start items-center gap-2.5 inline-flex'>
          <div className="text-white text-sm font-bold font-['Lato']">
            Cart Summary
          </div>
        </div>
        <div className='w-[430px] h-[51px] p-4 border-b border-stone-300 flex-col justify-start items-start gap-2 inline-flex'>
          <div className='self-stretch justify-between items-center inline-flex'>
            <div className="text-zinc-900 text-base font-bold font-['Lato']">
              Subtotal
            </div>
            <div className="text-zinc-800 text-base font-bold font-['Lato']">
              $ 100.09
            </div>
          </div>
        </div>
        <div className='w-[430px] h-[51px] p-4 border-b border-stone-300 flex-col justify-start items-start gap-2 inline-flex'>
          <div className='self-stretch justify-between items-center inline-flex'>
            <div className="text-zinc-900 text-base font-bold font-['Lato']">
              Delivery
            </div>
            <div className="text-zinc-800 text-base font-bold font-['Lato']">
              $ 300.08
            </div>
          </div>
        </div>
        <div className='w-[430px] h-[51px] p-4 border-b border-stone-300 flex-col justify-start items-start gap-2 inline-flex'>
          <div className='self-stretch justify-between items-center inline-flex'>
            <div className="text-zinc-900 text-base font-bold font-['Lato']">
              Total
            </div>
            <div className="text-zinc-800 text-base font-bold font-['Lato']">
              $ 400.17
            </div>
          </div>
        </div>
        <div className='w-[430px] h-[330px] flex-col justify-start items-center gap-6 inline-flex'>
          <div className='self-stretch h-[194px] flex-col justify-start items-start flex'>
            <div className='self-stretch pl-4 pr-3 py-3 bg-slate-700 justify-start items-center gap-2.5 inline-flex'>
              <div className="text-white text-sm font-bold font-['Lato']">
                Cart Summary
              </div>
            </div>
            <div className='self-stretch h-[51px] p-4 border-b border-stone-300 flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-base font-bold font-['Lato']">
                  Subtotal
                </div>
                <div className="text-zinc-800 text-base font-bold font-['Lato']">
                  $ 100.09
                </div>
              </div>
            </div>
            <div className='self-stretch h-[51px] p-4 border-b border-stone-300 flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-base font-bold font-['Lato']">
                  Delivery
                </div>
                <div className="text-zinc-800 text-base font-bold font-['Lato']">
                  $ 300.08
                </div>
              </div>
            </div>
            <div className='self-stretch h-[51px] p-4 border-b border-stone-300 flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-base font-bold font-['Lato']">
                  Total
                </div>
                <div className="text-zinc-800 text-base font-bold font-['Lato']">
                  $ 400.17
                </div>
              </div>
            </div>
          </div>
          <div className='w-[392px] h-28 flex-col justify-start items-start gap-3 flex '>
            <div className='self-stretch px-6 py-3.5 bg-yellow-600 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
              <div className="text-white text-lg font-bold font-['Lato']">
                Payment
              </div>
            </div>
            <div className='self-stretch px-6 py-3.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
              <div className="text-white text-lg font-bold font-['Lato']">
                Cancel
              </div>
            </div>
          </div>
        </div>
      </>
    );
}