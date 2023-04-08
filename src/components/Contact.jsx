import { location, email, phoneCall } from "./../assets";
import contactImg from './../assets/img/contact-us.webp';

const Contact = () => {
    return (
        <div className="custom-container mx-auto py-20">
            <div className="grid sm:grid-col-1 md:grid-cols-2 gap-20 place-items-center">
                <div>
                    <h1 className="text-5xl md:text-7xl font-poppins font-bold uppercase text-primaryGreen mb-5">contact us</h1>
                    <p className="text-3xl md:text-5xl font-poppins font-semibold uppercase text-primaryBlue">feel free to get in touch with us</p>
                    <div className="font-poppins pt-5 pb-10">
                        <form>
                            <input type="text" name="fullname" placeholder="FULL NAME" className="uppercase border rounded-3xl w-full px-5 py-2 mb-3 font-semibold text-white bg-primaryGreen" />
                            <input type="email" name="email" placeholder="EMAIL" className="uppercase border rounded-3xl w-full px-5 py-2 mb-3 font-semibold text-white bg-primaryGreen" />
                            <textarea name="message" rows="4" placeholder="MESSAGE" className="uppercase border rounded-3xl w-full px-5 py-2 mb-3 font-semibold text-white bg-primaryGreen"></textarea>
                            <button type="submit" className="float-right px-10 py-2 rounded-3xl text-white text-lg uppercase bg-primaryBlue">submit</button>
                        </form>
                    </div>
                    <div className="font-poppins mt-20">
                        <div className="flex items-center space-x-2 mb-2.5">
                            <img src={location} alt="location" />
                            <span>4630, Leahy St. Culver City, CA, 90232 USA.</span>
                        </div>
                        <div className="flex items-center space-x-3 ml-1 mb-2.5">
                            <img src={email} alt="email" className="w-5" />
                            <span className="text-primaryBlue hover:underline underline-offset-4">
                                <a href="mailto:info@metricproducts.com">info@metricproducts.com</a>
                            </span>
                        </div>
                        <div className="flex items-center space-x-3 ml-1">
                            <img src={phoneCall} alt="phone-call" className="w-5" />
                            <span>
                                <a href="tel:+13108159000" className="text-primaryBlue hover:underline underline-offset-4">1.310.815.9000</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={contactImg} />
                </div>
            </div>
        </div>
    );
}

export default Contact;