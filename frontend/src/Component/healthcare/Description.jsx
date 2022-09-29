import React from "react";
import styles from "./desc.module.css";

// Break this constants list and use loop to make a functional component and call it inside
const Description = () => {
    return (
        <div >
            <div className={styles.descDiv}>
                <div>
                    <h3 className={styles.heading}>Shop Safely And Worry-Free On PharmEasy</h3>
                    <p className={styles.texts}>
                        PharmEasy is a renowned name in the online shopping of Over The
                        Counter or healthcare products and other daily essentials. Ordering
                        online on PharmEasy is convenient, fast and hassle-free; you can
                        avoid the annoyance of queuing up at your local pharmacy and also
                        avail of huge discounts of up to 80% OFF. Purchasing the healthcare
                        requirements such as medical devices and nutritional supplements
                        that you need will no longer burn a hole in your pocket. At
                        PharmEasy, youare sure to find everything that you need because we
                        have products across all healthcare categories.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Why choose PharmEasy?</h3>
                    <div className={styles.texts}>
                        <ul>
                            <li>8400+ Brands</li>
                            <li>35K products in our stock</li>
                            <li>Delivery to 22000+ pin codes</li>
                            <li>Delivered to 50 lakh+ families</li>
                            <li>Over 2M customers served</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className={styles.heading}>Our most popular categories:</h3>
                    <p className={styles.texts}>
                        We have a range of categories and products, some which are:
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Devices</h3>
                    <p className={styles.texts}>
                        With the pandemic upending our lives, we have all realized that
                        there are some medical devices that we need to keep in our homes
                        such as Oximeter, Thermometer, Inhaler, Blood pressure monitor,
                        Glucometer.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Personal care</h3>
                    <p className={styles.texts}>
                        Personal care products can include a wide range of products such as
                        Bath products, , Skincare essentials, Razor blades, Toothpaste and
                        toothbrush, Wet wipes, Lip balm, Face masks, Hand sanitizer, etc.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Nutrition and fitness supplements</h3>
                    <p className={styles.texts}>
                        To give your health a helping hand, you can order a wide variety of
                        health supplements including Health drinks, Nutritional powder,
                        Nutrition tablets/capsules.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Ayurvedic care</h3>
                    <p className={styles.texts}>
                        Place your trust in the goodness of natural and organic ayurvedic
                        products for an all-around healthy mind and body. There’s plenty to
                        choose from such as Aloe vera juice, Moringa capsules, Garlic
                        capsules.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Home care</h3>
                    <p className={styles.texts}>
                        Home care products are things you need every day such as
                        disinfectant spray, phenyl, dishwashing liquid, etc. Get them all at
                        spectacular discounts on PharmEasy.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Baby and mom care</h3>
                    <p className={styles.texts}>
                        PharmEasy also has an impressive range of baby and mom care products
                        including Diapers, Baby bath products, Infant formula food, Mother’s
                        health drinks, Diaper rash creams, Baby wipes.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>Our top brands:</h3>
                    <p className={styles.texts}>
                        Get products from the most famous and trusted brands including
                        Accu-chek, Dettol, Horlicks, Baidyanath, Sebamed.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>You are safe with PharmEasy:</h3>
                    <p className={styles.texts}>
                        Given the times, we are taking all precautions to ensure that we
                        keep everyone safe - our customers and the people we work with.
                    </p>
                </div>
                <div>
                    <h3 className={styles.heading}>We ensure</h3>
                    <div className={styles.texts}>
                        <ul>
                            <li>Regular sanitization of our premises and warehouses</li>
                            <li>Temperature checks of our employees and delivery partners</li>
                            <li>No-contact door-step delivery</li>
                            <li>Sanitized packaging</li>
                        </ul>
                    </div>
                </div>
                <div >
                    <h3 className={styles.heading}>Youe safety is our priority</h3>
                    <p className={styles.texts}>
                        Stay safe at home and shop at your convenience from PharmEasy. All
                        you have to do is place your order and we will try to deliver it at
                        the earliest.
                    </p>
                </div>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Description;
