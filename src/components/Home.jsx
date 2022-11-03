import { Link } from 'react-router-dom';
import { productCards } from '../constants';

const Home = () => {
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
                        <Link to={'/products' + card.path}>
                            <h2 className="uppercase text-primaryGreen hover:text-primaryBlue transition-all font-poppins font-semibold xs:text-md sm:text-lg md:text-2xl lg:text-3xl mt-14">
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