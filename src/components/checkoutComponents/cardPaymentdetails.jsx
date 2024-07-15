export default function CardPaymentDetails(){
    return (
      <>
        <div className='w-[430px] h-[41px] pl-4 pr-3 py-3 bg-slate-700 justify-start items-center gap-2.5 inline-flex'>
          <div className="text-white text-sm font-bold font-['Lato']">
            Payment
          </div>
        </div>
        <div className='w-[430px] h-[82.36px] px-4 justify-start items-start gap-2 inline-flex'>
          <div className='grow shrink basis-0 h-[82.36px] flex-col justify-start items-end gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Card number
            </div>
            <div className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'>
              <div className="text-neutral-600 text-xs font-light font-['Lato']">
                Card number
              </div>
            </div>
          </div>
        </div>
        <div className='w-[430px] h-[82.36px] px-4 justify-start items-start gap-2 inline-flex'>
          <div className='grow shrink basis-0 h-[82.36px] flex-col justify-start items-end gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Cardholder name
            </div>
            <div className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'>
              <div className="text-neutral-600 text-xs font-light font-['Lato']">
                First Name
              </div>
            </div>
          </div>
        </div>
        <div className='w-[430px] h-[82.36px] px-4 justify-start items-start gap-2 inline-flex'>
          <div className='grow shrink basis-0 h-[82.36px] flex-col justify-start items-end gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Exploration
            </div>
            <div className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'>
              <div className="text-neutral-600 text-xs font-light font-['Lato']">
                00/00
              </div>
            </div>
          </div>
          <div className='grow shrink basis-0 h-[82.36px] flex-col justify-start items-end gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              CVV
            </div>
            <div className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'>
              <div className="text-neutral-600 text-xs font-light font-['Lato']">
                0000 0000 0000 0000
              </div>
            </div>
          </div>
        </div>
      </>
    );
}