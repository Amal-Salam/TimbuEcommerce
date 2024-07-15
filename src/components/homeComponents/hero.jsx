import HeroImg from '../../assets/images/hero-img.png'
export  default function Hero(){
    return (
      <>
        <div className='w-[430px] md:w-full lg:w-full xl:w-full h-[656px] md:h-[575px] lg:h-[575px] xl:h-[575px]  px-4 py-8 xl:px-[90px] bg-background_hero flex-col lg:flex-row xl:flex-row justify-center items-center gap-3 inline-flex '>
          <div className='order-2 lg:order-1 xl:order-1 p-4 self-stretch h-[311px] xl:mt-[90px] flex-col justify-start items-start gap-6 flex'>
            <div className='self-stretch h-[237px] flex-col justify-start items-start gap-3 flex'>
              <div className="self-stretch text-white text-4xl font-bold font-['Lato']">
                The Executive Chair - Ultimate Comfort for All-Day Work
              </div>
              <div className="self-stretch text-white text-sm font-medium font-['Lato'] leading-normal">
                Say goodbye to back pain and hello to peak productivity with the
                Executive Chair. Designed for all-day comfort, this chair
                provides the perfect blend of support and adjustability. Focus
                on what matters most without sacrificing your well-being.
              </div>
            </div>
            <div className='px-6 py-3.5 bg-yellow-600 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
              <div className="text-white text-lg font-bold font-['Lato']">
                Shop Now
              </div>
            </div>
          </div>
          <img
            className='w-[212px] h-[269px] xl:w-[375px] xl:h-[475px] order-1 lg:order-2 xl:order-2 p-4'
            src={HeroImg}
          />
        </div>
      </>
    );
}