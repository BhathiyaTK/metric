import { Link } from 'react-router-dom';
import { productCards } from '../constants';

const Home = () => {
    return (
        <div className="custom-container m-auto h-full">
            <div className="block md:flex md:flex-row items-start justify-center md:space-x-16 absolute top-56 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4/5">
                {productCards.map((card, index) => (
                    <div className="w-full md:w-1/3 text-center mb-16 md:mb-0" key={index}>
                        <div className="flex flex-row space-x-7 items-center">
                            <div className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                <img src={card.imageOne} alt="image-one" />
                            </div>
                            <div className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                <img src={card.imageTwo} alt="image-two" />
                            </div>
                        </div>
                        <Link to={'products/' + card.path}>
                            <h2 className="uppercase text-primaryGreen hover:text-primaryBlue transition-all font-poppins font-semibold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-20">
                                {card.name}
                            </h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;