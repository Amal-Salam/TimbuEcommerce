import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React,{ useState, useEffect } from 'react';

const ProductCard = ({ id, name,current_price, slug }) => {
  // return (
  // <div className='w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  // function getImageUrl(item) {
  //   const baseUrl = 'https://api.timbu.cloud/images/';
  //   if (item.photos && item.photos.length > 0) {
  //     return `${baseUrl}${item.photos[0].url}`;
  //   }
  //   return null;
  // }
  
  // const ImageUrl = getImageUrl(props.data);
 
  <div className='w-full max-w-[270px] mx-auto'>
    <div className='flex-col justify-start items-start gap-4 inline-flex'>
      <div className='h-[258px] w-full px-[7px] pt-[15px] pb-3 bg-zinc-100 rounded-tl-lg rounded-tr-lg flex-col justify-center items-center flex'>
        <div className='self-stretch justify-between items-center inline-flex'>
          <div className='w-[30px] h-[30px] p-[3px] bg-white rounded-full justify-center items-center flex'>
            {/* Star icon */}
            {slug}
          </div>
          <div className='w-[30px] h-[30px] p-1.5 bg-white rounded-[200px] justify-center items-center flex'>
            {/* Heart icon */}
            {id}
          </div>
        </div>
        <img
          className='w-[145px] h-[226px] object-cover'
          // src={ImageUrl}
          alt={name}
        />
      </div>
      <div className='self-stretch justify-between items-center inline-flex'>
        <div className='flex-col justify-start items-start gap-1 inline-flex'>
          <div className="text-zinc-800 text-2xl font-medium font-['Lato'] leading-7">
            {name}
          </div>
          <div className="text-zinc-800 text-xl font-medium font-['Lato'] leading-normal">
            {current_price[0].NGN[0]}
          </div>
        </div>
        <div className='w-10 h-10 p-2 bg-yellow-600 rounded-full justify-center items-center flex'>
          {/* Add to cart icon */}
        </div>
      </div>
    </div>
    {/* </div> */}
  </div>;
  // );
};
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  current_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  slug: PropTypes.string,
};

const ProductGrid = ({ products }) => {
  return (
    <div className='w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((product,index) => (
        <ProductCard
          key={index}
          id={product.id}
          name={product.name}
          current_price={product.current_price[0].NGN[0]}

          slug={product.slug}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf({

      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      current_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      slug: PropTypes.string,
    })
  .isRequired,
};

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
        // console.log("fetched response is ",fetchedResponse)
          const contentType = fetchedResponse.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError(console.log('Received non-JSON response'));
        }
            const data = await fetchedResponse.json();

          setProducts(data.items);
        //  console.log(data.items);
          return data.items;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    fetchData();
  }, [API_KEY, APP_ID, ORG_ID]);

  return (
    <div className='w-[430px] md:max-w-[850px] lg:w-[850px] xl:w-[860px] h-[1730px] p-4 flex-col lg:grid lg:grid-cols-3 lg:ml-[370px] lg:mt-[-1150px] justify-start items-start gap-3 inline-flex'>
     
        <ProductGrid products={products} />
      
    </div>
  );
};

export default CardDisplay;
