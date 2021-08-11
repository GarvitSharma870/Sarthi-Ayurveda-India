import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import CarouselComponent from "../components/CarouselComponent";
export default function DefaultScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, []);
    return (
        <div>
            <div className="App">
                <CarouselComponent />
            </div>
            <div className="primary">
                <h1 className="h-primary">Why Sarthi Ayurveda?</h1>
                <p className="h-secondary heading">Easier access to Ayurvedic remedies. Minimum medication and sensible lifestyle advice. Easy-to-consume capsules, tablets and herbal powders. Hand-holding through every treatment for effective recovery.Healing you Inside-Out with Ayurveda.</p>
            </div>
            <h1 className="h-primary">Top Selling Products</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div className="row center">
                            {
                                products.map(product => (
                                    <Product key={product._id} product={product}></Product>
                                ))}
                        </div>
                    )}
            <h1 className="h-primary">Benefits of Ayurveda</h1>
            <div className="row top">
                <div className="col-4">
                    <img width="100%" height="400px" src="../Images/Ayurveda1.jpg" alt="" ></img>
                </div>
                <div className="col-3">
                    <ul>
                        <li>
                            <h1 className="benefit color color-1">Natural Ingredients</h1>
                            <p>All Ayurvedic treatments and medications comprise natural herbs and plants that are unlikely to harm the human body.</p>
                        </li>
                        <li>
                            <h1 className="benefit color color-4">No side-effects</h1>
                            <p>The herbal content of Ayurvedic medications and remedies supported by changes in diet and lifestyle ensure a side-effect free treatment.</p>
                        </li>
                        <li>
                            <h1 className="benefit color color-2">Focus on healing and treating the Root</h1>
                            <p>Ayurveda focuses on curing the cause of the illness rather than just suppressing the symptoms, giving long term benefit.</p>
                        </li>
                        <li>
                            <h1 className="benefit color color-5">Better Understanding of one’s own Body</h1>
                            <p>Ayurveda allows a better understanding of how one’s body functions and therefore helps to manage health and wellness effectively</p>
                        </li>
                        <li>
                            <h1 className="benefit color color-3">A complete Medical System</h1>
                            <p>Ayurveda focuses on all aspects of health i.e. physical, psychological, philosophical, ethical and spiritual wellbeing, ensuring long term wellness.
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
            <h1 className="h-primary">What others say</h1>

            <div id="services">
                <div class="box">
                    <img src="../Images/Gracy.jpg" alt="" />
                    <h2 class="center">Gracy</h2>
                    <p class="center">“Ayurveda focuses on curing the cause of the illness rather than just suppressing the symptoms, giving long term benefit.”</p>
                </div>
                <div class="box">
                    <img src="../Images/Atul.jpg" alt="" />
                    <h2 class="center">Atul</h2>
                    <p class="center">“Great products. Has Helped to improve Immunity quickly. The whole family has started taking daily immunity supplements from Sarthi Ayurveda.”
</p>
                </div>
                <div class="box">
                    <img src="../Images/Anna.jpg" alt="" />
                    <h2 class="center">Anna</h2>
                    <p class="center">Ayurveda focuses on all aspects of health i.e. physical, psychological, philosophical, ethical and spiritual wellbeing, ensuring long term wellness.</p>
                </div>
            </div>
            <div>
                <h1 className="h-primary">Shipping Notice</h1>
                <p className="h-shop">Dear Customer , At Sarthi Ayurveda, we are committed to serving our customers through the challenging situation that the new strain of the pandemic outbreak has created for our logistics vendors as well as our team members.<br /><br />

                    The health and safety of all our team members is a priority for us. Recently, procedures and policies have been put into place as a result of COVID-19 due to which we have kept the warehouse operational for limited hours and staff coming into the warehouse on rotational basis. This has resulted in slower handling time. Also the lockdown imposed in Delhi NCR has impacted the operations of our shipping partners ,wherein pick up delays are being experienced time and again . We appreciate your patience while we keep our warehouse safe and take cognizance of the safety of our shipping partners. Please allow some extra time for your order to arrive, while we clear our backlogs and prioritize deliveries basis date of order received.<br /><br />

                    We apologize deeply for this inconvenience and we are committed to providing best possible services under the present circumstances.</p>
            </div>

        </div>
    );
}