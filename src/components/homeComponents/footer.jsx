import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
export default function Footer() {
  return (
    <>
      <div className='w-[430px] md:w-[750px] lg:w-[1010px] xl:w-[1280px] h-[474px] lg:h-[388px] px-4 py-[18px] xl:px-[90px] border-b border-stone-300 flex-col justify-between items-start inline-flex'>
        <div className='self-stretch lg:w-[532px] lg-h-[238px] lg:ml-[570px] lg:mt-[50px] justify-between items-start inline-flex'>
          <div className=' flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-lg font-medium font-['Lato']">
              Customer
            </div>
            <div className='flex-col justify-start items-start gap-2 flex'>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Our Account
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Track Your Order
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Customer Service
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Term Of Use
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Affiliate
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Help & Support
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-lg font-medium font-['Lato']">
              Information
            </div>
            <div className='self-stretch h-[120px] flex-col justify-start items-start gap-2 flex'>
              <div className="text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Delivery Information
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Privacy Policy
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Trams & Conditions
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Return
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-lg font-medium font-['Lato']">
              About
            </div>
            <div className='flex-col justify-start items-start gap-2 flex'>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Our Company
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Our Story
              </div>
              <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
                Blog
              </div>
            </div>
          </div>
        </div>

        <div className='self-stretch h-[142px] lg:w-[532px] lg:h-[238px] lg:mt-[-200px] flex-col justify-start items-start gap-3 flex'>
          <div className="self-stretch text-black text-lg font-bold font-['Lato']">
            TimbuCloudShop
          </div>
          <div className='self-stretch h-[108px] flex-col justify-start items-start gap-3 flex'>
            <div className="self-stretch text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
              Discover a handpicked collection of furniture designed to elevate
              your digital life. Shop with confidence and enjoy a smooth,
              stress-free experience.
            </div>
            <div className='justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <FaFacebookF />
              </div>
              <div className='w-6 h-6 relative'>
                <FaInstagram />
              </div>
              <div className='w-6 h-6 relative'>
                <FaYoutube />
              </div>
              <div className='w-6 h-6 relative'>
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-col justify-start items-start gap-[50px] flex'>
          <div className='justify-start items-center gap-2 inline-flex'>
            <div className='w-6 h-6 relative'>
               <div className='w-[21px] h-[21px] left-[1.50px] top-[1.50px] absolute'>@</div> 
            </div>
            <div className="text-neutral-600 text-sm font-medium font-['Lato'] leading-normal">
              Copyright 2024
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
