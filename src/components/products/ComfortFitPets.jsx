import { BottomBar, Modal } from '../';
import { productCards } from '../../constants';
import dogColor from '../../assets/img/dogColor.jpg';

const ComfortFitPets = () => {
   return (
      <>
         <div className="custom-container mx-auto pt-20">
            <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen text-center md:text-left">comfort fit pets</h1>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            {
               productCards[0].categories.map((product, indexOne) => (
                  <div key={indexOne}>
                     <div className="mt-10">
                        <h1 className="text-4xl md:text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mb-10">{product.title}</h1>
                        <div className="block md:flex md:flex-row justify-center md:space-x-10">
                           {
                              product.types.map((type, indexTwo) => (
                                 <div key={indexTwo} className="mb-20 md:mb-0">
                                    <div>
                                       <img src={type.imageOne} alt={'imageOneOf' + indexTwo} className="w-full" />
                                    </div>
                                    <h2 className="uppercase text-2xl font-semibold font-poppins text-primaryGreen text-center my-5 px-10">{type.title}</h2>
                                    <div className="mt-8 mb-20 text-center">
                                       <a href={type.amazonLink} target="_blank" className="font-poppins uppercase font-semibold text-white rounded-xl px-5 py-2 bg-primaryGreen hover:bg-primaryBlue transition-all">order on amazon</a>
                                       <br /><br />
                                       <span className="capitalize cursor-pointer font-poppins text-primaryBlue hover:underline underline-offset-4">
                                          <a href="https://www.amazon.com" target="_blank">View fit instructions</a>
                                       </span>
                                    </div>
                                    <div className="w-full rounded-lg border overflow-hidden bg-white">
                                       <div>
                                          <img src={dogColor} alt={'imageThreeOf' + indexTwo} />
                                       </div>
                                    </div>
                                 </div>
                              ))
                           }
                        </div>
                     </div>
                     {
                        indexOne < productCards[0].categories.length - 1 ? <div className="w-full my-16 border border-primaryBlue"></div> : null
                     }
                  </div>
               ))
            }
            {/* <Modal /> */}
         </div>
         <BottomBar />
      </>
   );
}

export default ComfortFitPets;