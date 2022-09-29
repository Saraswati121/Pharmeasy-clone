import React from 'react'
import styles from "./desc.module.css";

// Break this constants list and use loop to make a functional component and call it inside
const Security = () => {
    return (
        <div>
            <div className={styles.Wrapper}>
                <div>
                    <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FgenuineMedicine.svg&w=64&q=75" alt="" />
                    <h3>1 Lakh+ Products</h3>
                    <p>We maintain strict quality controls on all our partner retailers, so that you always get standard quality
                        products.</p>
                </div>
                <div>
                    <img src=" https://pharmeasy.in/_next/image?url=%2Ficons%2FsecurePayment.svg&w=64&q=75" alt="" />
                    <h3>Secure Payment</h3>
                    <p>100% secure and trusted payment protection</p>
                </div>
                <div>
                    <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FeasyReturn.svg&w=64&q=75" alt="" />
                    <h3>Easy Return</h3>
                    <p>We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for
                        more details.</p>
                </div>
            </div>
        </div>
    )
}

export default Security