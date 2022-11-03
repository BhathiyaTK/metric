import { Link } from 'react-router-dom';
import { productCards } from '../constants';

function renderCardName(param) {
   switch (param) {
      case 'comfort fit pets':
         return <span>comfort fit<br />pets</span>;
      case 'drift to sleep':
         return <span>drift to<br />sleep</span>;
      default:
         return <span>cups and underwire<br />for intimate apparel</span>;
   }
}

const Products = () => {
   return (
      <div className="custom-container mx-auto h-screen">
         <div className="flex flex-row items-start justify-center space-x-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
            {productCards.map((card, index) => (
               <div className="w-1/3 text-center" key={index}>
                  <div className="flex flex-row space-x-7 items-center">
                     <div className="w-1/2 rounded-3xl overflow-hidden">
                        <img src={card.imageOne} alt="image-one" />
                     </div>
                     <div className="w-1/2 rounded-3xl overflow-hidden">
                        <img src={card.imageTwo} alt="image-two" />
                     </div>
                  </div>

                  <h2 className="capitalize text-primaryBlue font-poppins font-semibold xs:text-md sm:text-lg md:text-2xl mt-14 mb-5">
                     {renderCardName(card.name)}
                  </h2>
                  <Link to={'/products' + card.path}>
                     <button className="font-poppins uppercase font-semibold text-white rounded-xl px-5 py-1 bg-primaryGreen hover:bg-primaryBlue transition-all">
                        <span className="text-sm">see all products</span>
                     </button>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Products;