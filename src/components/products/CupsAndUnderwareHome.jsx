import { Link } from 'react-router-dom';
import { BottomBar } from '../';
import { productCards } from '../../constants';

const CupsAndUnderwareHome = () => {
   return (
      <>
         <div className="custom-container mx-auto pt-20">
            <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen">cups and underwires for<br />intimate apparel</h1>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            <div className="flex flex-row justify-between">
               {
                  productCards[2].categories.map((product, index) => (
                     <div key={index}>
                        <div className="mt-10">
                           <h1 className="text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mb-10">{product.title}</h1>
                           <div className="relative w-4/5 mx-auto rounded-6xl overflow-hidden">
                              <img src={product.image} alt={`image-${index}`} className="w-full" />
                              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-2xl text-center bg-primaryGreen hover:bg-primaryBlue transition-all">
                                 <Link to={product.path} className="font-poppins font-semibold text-white uppercase">See all products</Link>
                              </span>
                           </div>
                           <div className="mt-10 text-center">
                              <a href="tel:1234567890" className="uppercase font-poppins font-semibold text-white bg-primaryBlue hover:bg-primaryGreen transition-all rounded-3xl px-5 py-2">contact us</a>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
         <BottomBar />
      </>
   );
}

export default CupsAndUnderwareHome;