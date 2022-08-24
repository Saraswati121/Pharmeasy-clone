import styles from "./footer.module.css";
// import { h1 } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columns_container}>
        <div>
          <div>
            <h1>
              <h4>Company</h4>
            </h1>
            <div>
              <Link to="/">About Us</Link>
            </div>
            <div>
              <Link to="/">Careers</Link>
            </div>
            <div>
              <Link to="/">Blog</Link>
            </div>
            <div>
              <Link to="/">Partner with PharmEasy</Link>
            </div>
            <div>
              <Link to="/">Sell at PharmEasy</Link>
            </div>
          </div>
          <div>
            <h1>
              <h4>Our Services</h4>
            </h1>

            <div>
              <Link to="/">Order Medicine</Link>
            </div>
            <div>
              <Link to="/">Healthcare Products</Link>
            </div>
            <div>
              <Link to="/">Lab Tests</Link>
            </div>
            <div>
              <Link to="/">Find Nearest Collection Centre</Link>
            </div>
          </div>
        </div>

        <div>
          <h1>
            <h4>Featured Categories</h4>
          </h1>

          <div>
            <Link to="">Covid Essentials</Link>
          </div>
          <div>
            <Link to="">Health Food and Drinks</Link>
          </div>
          <div>
            <Link to="">Beauty</Link>
          </div>
          <div>
            <Link to="">Skin Care</Link>
          </div>
          <div>
            <Link to="">Home Care</Link>
          </div>
          <div>
            <Link to="">Ayurvedic Care</Link>
          </div>
          <div>
            <Link to="">Sexual Wellness</Link>
          </div>
          <div>
            <Link to="">Fitness & Supplements</Link>
          </div>
          <div>
            <Link to="">Mother and Baby Care</Link>
          </div>
          <div>
            <Link to="">Healthcare Devices</Link>
          </div>
          <div>
            <Link to="">Health Condition</Link>
          </div>
          <div>
            <Link to="">Diabetic Care</Link>
          </div>
          <div>
            <Link to="">Elderly Care</Link>
          </div>
          <div>
            <Link to="">Accessories And Wearables</Link>
          </div>
          <div>
            <Link to="">Value Store</Link>
          </div>
        </div>

        <div>
          <div>
            <h1>
              <h4>Need Help</h4>
            </h1>

            <div>
              <Link to="">Browse All Medicines</Link>
            </div>
            <div>
              <Link to="">Browse All Molecules</Link>
            </div>
            <div>
              <Link to="">Browse All Cities & Areas</Link>
            </div>
            <div>
              <Link to="">Browse All Stores</Link>
            </div>
            <div>
              <Link to="">FAQs</Link>
            </div>
          </div>
          <div>
            <h1>
              <h4>Policy Info</h4>
            </h1>

            <div>
              <Link to="">Editorial Policy</Link>
            </div>
            <div>
              <Link to="">Privacy Policy</Link>
            </div>
            <div>
              <Link to="">Vulnerability Disclosure Policy</Link>
            </div>
            <div>
              <Link to="">Terms and Conditions</Link>
            </div>
            <div>
              <Link to="">Customer Support Policy</Link>
            </div>
            <div>
              <Link to="">Return Policy</Link>
            </div>
          </div>
        </div>

        <div>
          <h1>
            <h4>FOLLOW US</h4>
          </h1>

          <div className={styles.social_media}>
            <div>
              <Link
                to="https://www.instagram.com/pharmeasyapp/"
                target="_blank"
              >
                <img src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg" alt="" />
              </Link>
            </div>
            <div>
              <Link to="https://www.facebook.com/pharmeasy/" target="_blank">
                <img src="https://assets.pharmeasy.in/apothecary/images/facebook.svg" alt="" />
              </Link>
            </div>
            <div>
              <Link
                to="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA"
                target="_blank"
              >
                <img src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg" alt="" />
              </Link>
            </div>
            <div>
              <Link to="https://www.twitter.com/pharmeasyapp/" target="_blank">
                <img src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4>Our Payment Partners</h4>
        <div className={styles.payment_partners_container}>
          <div className={styles.payment_partners}>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg"
                alt=""
              />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div style={{ fontSize: "18px", color: "#4f585e" }}>
            © 2022 PharmEasy. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };