import { Link } from 'react-router-dom';
import { productCards } from '../../constants';

const FitInstructionsSoftPadded = () => {
   return (
      <div className="custom-container mx-auto pt-40">
         <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen text-center md:text-left mb-10">Fit Instructions: Soft Padded Dog Collar</h1>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {productCards[0].categories[1].types[0].fitInstructions.map((fit, index) => (
               <div className="w-full text-center mb-16 md:mb-0" key={index}>
                  <div className="flex flex-row space-x-7 items-center">
                     <div className="rounded-2xl overflow-hidden border-2">
                        <img src={fit} alt={"fit instructions" + index} />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default FitInstructionsSoftPadded;