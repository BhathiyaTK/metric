import { BottomBar } from '../';
import { productCards } from '../../constants';

const DriftToSleep = () => {
   return (
      <>
         <div className="custom-container mx-auto pt-20">
            <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen">drift to sleep</h1>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            {
               productCards[1].categories.map((product, indexOne) => (
                  <div key={indexOne}>
                     <div className="mt-10">
                        <h1 className="text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mb-10">{product.title}</h1>
                        <div className="flex flex-row justify-center space-x-10">
                           {
                              product.types.map((type, indexTwo) => (
                                 <div key={indexTwo}>
                                    <div className={`grid col-1 place-items-center ${type.amazonLink ? '' : 'mb-20'}`}>
                                       {type.imageOne ? <img src={type.imageOne} alt={'imageOneOf' + indexTwo} className="mb-5" /> : null}
                                       {type.imageTwo ? <img src={type.imageTwo} alt={'imageTwoOf' + indexTwo} className="mb-5" /> : null}
                                       {type.imageThree ? <img src={type.imageThree} alt={'imageThreeOf' + indexTwo} className="mb-5" /> : null}
                                    </div>
                                    {
                                       type.amazonLink ?
                                          <div className="my-10 text-center">
                                             <a href={type.amazonLink} target="_blank" className="font-poppins uppercase font-semibold text-white text-xl rounded-xl px-5 py-2 bg-primaryGreen hover:bg-primaryBlue transition-all">order on amazon</a>
                                          </div> : null
                                    }
                                    {
                                       type.subTypes ?
                                          <div className="flex flex-row space-x-7">
                                             {
                                                type.subTypes.map((sType, indexThree) => (
                                                   <div key={indexThree}>
                                                      <img src={sType.image} alt={'image' + indexThree} className="w-full" />
                                                      <div className="my-10 text-center">
                                                         <a href={sType.amazonLink} target="_blank" className="font-poppins uppercase font-semibold text-white rounded-xl px-5 py-2 bg-primaryGreen hover:bg-primaryBlue transition-all">order on amazon</a>
                                                      </div>
                                                      <div className="flex flex-row space-x-2 justify-center items-center">
                                                         {
                                                            sType.pieces.map((piece, indexFour) => (
                                                               <span className="bg-primaryBlue rounded-lg px-2 py-1 text-xs font-poppins text-white" key={indexFour}>{piece}</span>
                                                            ))
                                                         }
                                                      </div>
                                                   </div>
                                                ))
                                             }
                                          </div> : null
                                    }
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

export default DriftToSleep;