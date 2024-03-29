import { Link } from 'react-router-dom';
import { productCards } from '../constants';

const Home = () => {
    return (
        <div role="presentation" className="custom-container m-auto h-full">
            <div role="presentation" className="block md:flex md:flex-row items-start justify-center md:space-x-16 absolute top-56 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4/5">
                {productCards.map((card, index) => (
                    <div role="presentation" className="w-full md:w-1/3 text-center mb-16 md:mb-0" key={index}>
                        <div role="presentation" className="flex flex-row space-x-7 items-center">
                            <div role="img" aria-label={'Image ' + index + ' one'} className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                <img src={card.imageOne} alt="image-one" />
                            </div>
                            <div role="img" aria-label={'Image ' + index + ' two'} className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                <img src={card.imageTwo} alt="image-two" />
                            </div>
                        </div>
                        <div role="presentation" className="bg-primaryGreen px-2 py-3 rounded-3xl mt-10 md:mt-20">
                            <Link to={'products/' + card.path} role="link">
                                <h2 className="uppercase text-linkBlack hover:text-primaryBlue transition-all font-poppins font-semibold text-lg md:text-2xl lg:text-4xl mb-2">
                                    {card.name}
                                </h2>
                            </Link>
                            <span role="heading" aria-level="6" className="uppercase font-poppins font-medium text-lg text-linkBlack">{card.subName}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;