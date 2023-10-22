import './landing.css'
// import { Link } from 'react-router-dom';

//icons
// import { SiHandshake } from 'react-icons/si'
// import { PiShoppingCartFill } from 'react-icons/pi'
// import { TbTruckDelivery } from 'react-icons/tb'



//import header navBar and footer
// import Footer from '../../components/footer/Footer';


//import components
// import Header from '../../components/header/Header';
// import Order from '../../components/order/Order';
// import LandingHeading from '../../components/landingHeading/LandingHeading';


const Landing = ({ pf, vendors}) => {
    return( 
        <div className="landing_page">
            {/* <Header /> */}

            {/* <div className="adminLogin-block">
                <Link to="/admin">Admin Portal</Link>
            </div> */}

            {/* features block */}
            <div className="features">

                {/* <LandingHeading title={"Features"} /> */}

                <div className="features_block">
                    <div className="feature">
                        <div className="featureInner">
                            {/* <span><PiShoppingCartFill/></span> */}
                            <p>Fast Order</p>
                        </div> 
                    </div>
                    <div className="feature">
                        <div className="featureInner">
                            {/* <span><SiHandshake/></span> */}
                            <p> Delivery Paymemt </p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="featureInner">
                                {/* <span><TbTruckDelivery/></span> */}
                                <p>Ontime Delivery</p> 
                            </div>                      
                    </div>
                </div>
            </div>

            {/* <Order /> */}

            <div className="test_comment">

                <div className="testimony_block">

                    {/* <LandingHeading title={"Testimony"} /> */}

                    <div className="testimony">
                        <div className="testimony">
                            <div className="test_image">
                                <div className="test_image_block">
                                    {/* <img src={`${pf}img/bg/b.jpeg`} alt="test_photo" /> */}
                                </div>
                            </div>
                            <div className="test_info">
                                <h3>Ayebidun Ezekiel </h3>
                                <p>Thank you oily! i dont have to find myself in the supermarket before i get my vegitabe oil.</p>   

                                <div className="button_box">
                                    <button type="button">Mail me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comment_block">

                    {/* <LandingHeading title={"Comment"} /> */}

                    <form className="comment">

                        <label htmlFor="name">FULLNAME: </label>
                        <input type="text" name="name" id="name" placeholder="Enter your fullname" required/>

                        <label htmlFor="email">EMAIL: </label>
                        <input type="text" name="email" id="email" placeholder="Enter your email" required/>

                        <label htmlFor="message">MESSAGE</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your messages goes here..." required></textarea>

                        <div className="messageBtn">
                            <button type="submit"> Message </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
}

export default Landing;