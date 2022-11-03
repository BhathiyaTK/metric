import { BottomBar } from '../';
import { productCards } from '../../constants';

const ComfortFitPets = () => {
   return (
      <>
         <div className="custom-container mx-auto pt-20">
            <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen">comfort fit pets</h1>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            {
               productCards[0].categories.map((product, indexOne) => (
                  <div key={indexOne}>
                     <div className="mt-10">
                        <h1 className="text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mb-10">{product.title}</h1>
                        <div className="flex flex-row justify-center space-x-10">
                           {
                              product.types.map((type, indexTwo) => (
                                 <div key={indexTwo}>
                                    <div>
                                       <img src={type.imageOne} alt={'imageOneOf' + indexTwo} className="w-full" />
                                    </div>
                                    <h2 className="uppercase text-2xl font-semibold font-poppins text-primaryGreen text-center my-5 px-10">{type.title}</h2>
                                    <div>
                                       <img src={type.imageTwo} alt={'imageTwoOf' + indexTwo} className="w-full" />
                                    </div>
                                    <div className="my-8 text-center">
                                       <a href={type.amazonLink} target="_blank" className="font-poppins uppercase font-semibold text-white rounded-xl px-5 py-2 bg-primaryGreen hover:bg-primaryBlue transition-all">order on amazon</a>
                                    </div>
                                    <div className="w-full rounded-lg border overflow-hidden">
                                       <div className="px-3 py-1.5 bg-primaryBlue uppercase text-center font-poppins font-medium text-white text-lg">fit instructions</div>
                                       <div>
                                          <img src={type.imageThree} alt={'imageThreeOf' + indexTwo} />
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
         </div>
         <BottomBar />
      </>
   );
}

export default ComfortFitPets;