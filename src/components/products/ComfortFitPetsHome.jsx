import { Link } from 'react-router-dom';
import { BottomBar, Modal } from '../';
import { productCards } from '../../constants';

const ComfortFitPetsHome = () => {
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
                                       <img src={type.imageOne} alt={'imageOneOf' + indexTwo} className="w-full border-2 rounded-lg" />
                                    </div>
                                    <h2 className="uppercase text-2xl font-semibold font-poppins text-primaryGreen text-center my-5 px-10">{type.title}</h2>
                                    <div className="mt-8 mb-20 text-center">
                                       <a href={type.amazonLink} title="Order on amazon link" target="_blank" className="font-poppins uppercase font-semibold text-white rounded-xl px-5 py-2 bg-primaryGreen hover:bg-primaryBlue transition-all" accessKey={type.amazonLink}>order on amazon</a>
                                       <br /><br />
                                       <Link to={type.fitInstructionsLink} title="Link to go to view fit instructions">
                                          <span className="capitalize cursor-pointer font-poppins text-primaryBlue hover:underline underline-offset-4">
                                             View fit instructions
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="w-full rounded-lg border overflow-hidden bg-white p-4">
                                       <h2 className="uppercase font-bold text-center">Available Colors</h2>
                                       <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4 mt-3">
                                          {
                                             type.colors.map((colorImg, colorIndex) => (
                                                <div key={colorIndex}>
                                                   <img src={colorImg} alt={'color' + colorIndex} />
                                                </div>
                                             ))
                                          }
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

export default ComfortFitPetsHome;