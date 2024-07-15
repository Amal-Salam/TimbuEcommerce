
import 
// eslint-disable-next-line no-unused-vars
React,
{useEffect,useState} from 'react';


const CardDisplay = () => {
  const ORG_ID = import.meta.env.VITE_ORG_ID;
  const APP_ID = import.meta.env.VITE_APP_ID;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const PROXY_URL = 'https://corsproxy.io/?';
  const BASE_URL = 'https://api.timbu.cloud/products';
  const [products, setProducts] = useState([]);
//  console.log("apikey:"+API_KEY,'orgId'+ORG_ID,'appId'+APP_ID);
  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
    try {
      
        const fetchedResponse = await fetch(
          `${PROXY_URL}${BASE_URL}?organization_id=${ORG_ID}&reverse_sort=false&page=1&size=12&Appid=${APP_ID}&Apikey=${API_KEY}`
        );
         console.log("fetched response is ",fetchedResponse)
          const contentType = fetchedResponse.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError(console.log('Received non-JSON response'));
        }
            const data = await fetchedResponse.json();
          setProducts(data.items);
          console.log(data.items[3]);
        //   return data.items;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    fetchData();
  }, [API_KEY, APP_ID, ORG_ID]);

  function getImageUrl(product) {
    const baseUrl = 'https://api.timbu.cloud/images/';
    if (product.photos && product.photos.length > 0) {
      return `${baseUrl}${product.photos[0].url}`;
    }
    return null;
  }


  return (
    <div className='w-[430px] md:max-w-[850px] lg:w-[1050px] xl:w-[1280px] h-[1730px] p-4 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:ml-[370px] bg-green-600 lg:mt-[-1150px] justify-start items-start gap-3  '>
      <div className='w-full p-4 md:w-[845px] gap-6 lg:gap-3 bg-purple-500'>
        {products.map((product) => (
          <div
            key={product.id}
            data={product}
            className='w-full flex-col md:w-[845px] justify-start items-start bg-orange-500 gap-4 inline-flex'>
              <div className='h-[258px] w-full md:w-[258px] lg:max-w-[258px] xl:max-w-[270px] lg:h-[258px] px-[7px] pt-[15px] pb-3 bg-zinc-100 rounded-tl-lg rounded-tr-lg flex-col justify-center items-center flex'>
                <div className='self-stretch justify-between items-center inline-flex'>
                  <div className='w-[30px] h-[30px] p-[3px] bg-white rounded-full justify-center items-center flex'>
                    {/* Star icon */}
                    {product.slug}
                  </div>
                  <div className='w-[30px] h-[30px] p-1.5 bg-white rounded-[200px] justify-center items-center flex'>
                    {/* Heart icon */}
                    {/* {product.id} */}
                  </div>
                </div>
                <img
                  className='w-[145px] lg:w-full h-[226px] lg:h-full object-cover lg:object-contain'
                  src={getImageUrl(product)}
                  alt={product.name}
                />
              </div>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className='flex-col justify-start items-start gap-1 inline-flex'>
                  <div className="text-zinc-800 text-2xl font-medium font-['Lato'] leading-7">
                    {product.name}
                  </div>
                  <div className="text-zinc-800 text-xl font-medium font-['Lato'] leading-normal">
                    ₦{product.current_price[0]?.NGN[0]}
                  </div>
                </div>
                <div className='w-10 h-10 p-2 bg-yellow-600 rounded-full justify-center items-center flex'>
                  {/* Add to cart icon */}
                </div>
              </div>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDisplay;
