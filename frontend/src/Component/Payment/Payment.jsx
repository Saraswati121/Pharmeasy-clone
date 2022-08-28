import React from "react";
import { useSelector } from "react-redux";
import "./payment.css";
export const Payment = () => {
  const { cart } = useSelector((store) => store.cart);
  let cartTotal = 0;
  let cutPrice = 0;
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
        cartTotal += cart[i].newPrice;
        cutPrice += cart[i].originalPrice;
    }
  }
  return (
    <div className="pay">
      <div id="navbar">
        <div id="mainlogo">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
            alt=""
          />
        </div>
        <div id="navbarRight">
          <div></div>
          <div id="secure">100% Secure Payments</div>
        </div>
      </div>

      <div id="container">
        <div id="leftContainer">
          <div id="offers">Offers</div>
          <div className="wallets">
            <div>
              <img
                src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png"
                alt="paytm"
              />
            </div>
            <div>
              <div className="walletselect">
                <div className="walletHeadings">Paytm Wallet | Postpaid</div>
                <div>
                  <input id="radio1" type="radio" />
                </div>
              </div>
              <div>
                <p className="offerconditions">
                  Get 4000 cashback points on minimum transaction of Rs.999.
                  Offer applicable on first Paytm wallet or Paytm Postpaid
                  transaction on Pharmeasy
                </p>
              </div>
            </div>
          </div>
          <div className="wallets">
            <div>
              <img
                src="https://cdn.pharmeasy.in/payments/amazonpay_new.png"
                alt="amazonpay"
              />
            </div>
            <div>
              <div className="walletselect">
                <div className="walletHeadings">Amazon Pay</div>
                <div>
                  <input id="radio1" type="radio" />
                </div>
              </div>
              <div>
                <p className="offerconditions">
                  Get up to Rs.500 cashback on a minimum transaction of Rs.100
                  via Amazon Pay.
                </p>
              </div>
            </div>
          </div>
          <div className="wallets">
            <div>
              <img
                src="https://cdn.pharmeasy.in/payments/wallet_icons/phonepe.png"
                alt="phonepe"
              />
            </div>
            <div>
              <div className="walletselect">
                <div className="walletHeadings">PhonePe</div>
                <div>
                  <input id="radio1" type="radio" />
                </div>
              </div>
              <div>
                <p className="offerconditions">
                  Get a Scratch card and win up to Rs.750 cashback on a minimum
                  transaction of Rs.500 via PhonePe wallet only.
                </p>
              </div>
            </div>
          </div>
          <div className="wallets">
            <div>
              <img
                src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png"
                alt="mobikwik"
              />
            </div>
            <div>
              <div className="walletselect">
                <div className="walletHeadings">Mobikwik</div>
                <div>
                  <input id="radio1" type="radio" />
                </div>
              </div>
              <div>
                <p className="offerconditions">
                  Get up to Rs.500 cashback on a minimum transaction of Rs.500
                  via Mobikwik Wallet. Use code MBK500 on Mobikwik.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="rightContainer">
          <div id="peWallet">
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/9abb1d25.svg"
                alt=""
              />
            </div>
            <div>
              <h4>PharmEasy Wallet</h4>
              <p id="tAndc">T&C Apply</p>
            </div>
            <div></div>
            <div>
              <input id="checkbox" type="checkbox" />
            </div>
          </div>
          <div id="priceDetails">
            <div className="bigletter">Price Breakdown</div>
            <div>
              <div>Cart Value</div>
              <div className="moneyshow">
                <div id="itemstrikedoff" className="strikedOff">
                  ₹{cutPrice}
                </div>
                <div id="itemrealPrice" className="realPrice">
                  ₹{cartTotal}
                </div>
              </div>
            </div>
            <div>
              <div>Delivery Charge</div>
              <div className="moneyshow">
                <div id="deliverystrikedOff" className="strikedOff">
                  ₹49.00
                </div>
                <div id="deliveryrealprice" className="realPrice">
                  ₹30.00
                </div>
              </div>
            </div>
            <div>
              <div className="bigletter">Amount to be paid</div>
              <div id="totalprice" className="realPrice">
                ₹{cartTotal+30}
              </div>
            </div>
            <div id="totalSavingsbox">
              <p id="totalSavings">Total Savings of on this order</p>
            </div>
          </div>
        </div>
      </div>

      <div id="container2">
        <div id="OtherOptions">Other Options</div>
        <div className="firstbox">
          <div>
            <img src="https://cdn.pharmeasy.in/payments/upi.png" alt="upi" />
          </div>
          <div>
            <div className="upiselect">
              <div className="upiHeadings">UPI</div>
              <div>
                <button className="arrowButton">&gt;</button>
              </div>
            </div>
            <div>
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png"
                alt="gpay"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png"
                alt="bhim"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png"
                alt="paytm"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeUpi.png"
                alt="phonepe"
              />
            </div>
          </div>
        </div>
        <div className="firstbox">
          <div>
            <img
              src="https://cdn.pharmeasy.in/payments/wallet.png"
              alt="wallet"
            />
          </div>
          <div>
            <div className="upiselect">
              <div class="upiHeadings">Wallets</div>
              <div>
                <button className="arrowButton">&gt;</button>
              </div>
            </div>
            <div>
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png"
                alt="amazonpay"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png"
                alt="paytm"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/freecharge-wallet.png"
                alt="freecharge-wallet"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeUpi.png"
                alt="phonepe"
              />
            </div>
          </div>
        </div>
        <div className="firstbox">
          <div>
            <img src="https://cdn.pharmeasy.in/payments/card.png" alt="card" />
          </div>
          <div>
            <div id="crdit" className="upiselect">
              <div className="upiHeadings">Credit/Debit Card</div>
              <div>
                <button id="creditAndDebitCard" className="arrowButton">
                  &gt;
                </button>
              </div>
            </div>
            <div>
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png"
                alt="visa"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png"
                alt="mastercard-logo"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png"
                alt="rupay"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png"
                alt="maestro-logo"
              />
              <img
                className="imagePercentage"
                src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png"
                alt="dinerCard"
              />
            </div>
          </div>
        </div>
        <div className="firstbox">
          <div>
            <img
              src="https://cdn.pharmeasy.in/payments/netbanking.png"
              alt="netbanking"
            />
          </div>
          <div>
            <div id="secondlast" className="upiselect">
              <div className="upiHeadings">Net Banking</div>
              <div>
                <button className="arrowButton">&gt;</button>
              </div>
            </div>
            <div>
              <p>We support over 100 banks</p>
            </div>
          </div>
        </div>
        <div className="firstbox">
          <div>
            <img src="https://cdn.pharmeasy.in/payments/card.png" alt="card" />
          </div>
          <div>
            <div id="lastone" className="upiselect">
              <div className="upiHeadings">Cash on Delivery</div>
              <div>
                <input type="radio" />
              </div>
            </div>
            <div>
              <p>Pay via cash/UPI at the time of delivery</p>
            </div>
          </div>
        </div>
      </div>
      <div id="cardbox">
        <div id="formcontainer">
          <div>
            <h3>Enter New Card</h3>
            <hr />
            <p>Card Number</p>
            <input
              id="cardNumber"
              type="number"
              placeholder="1234-5678-9876-5432"
            />
            <p className="popupMsg"></p>
          </div>
          <div id="validity">
            <p>Valid Through</p>
            <p>CVV</p>
          </div>
          <div id="validityInput">
            <input id="cardvalidity" type="text" placeholder="MM/YY" />
            <input id="cvv" type="password" placeholder="123" />
          </div>
          <div>
            <p>Name on Card</p>
            <input id="nameoncard" type="text" placeholder="e.g. Ravi Kumar" />
            <div id="checkbox">
              <div>
                <input id="tickbox" type="checkbox" />
              </div>
              <div>
                <p>Save this card for future payments</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="imagePercentage"
              src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png"
              alt="visa"
            />
            <img
              className="imagePercentage"
              src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png"
              alt="mastercard-logo"
            />
            <img
              className="imagePercentage"
              src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png"
              alt="rupay"
            />
            <img
              className="imagePercentage"
              src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png"
              alt="maestro-logo"
            />
            <img
              className="imagePercentage"
              src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png"
              alt="dinerCard"
            />
          </div>
          <div>
            <button id="submit">Place Order & Pay</button>
          </div>
          <div id="cardSecurity">
            <div>
              <i id="shield" class="material-icons">
                shield
              </i>
            </div>
            <div id="assurity">
              Your card details will be stored securely for your convenience. We
              do not store CVV.
            </div>
          </div>
        </div>
      </div>
      <div id="otpwala">
        <div id="container1020">
          <div id="navbar">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
              alt=""
            />
          </div>
          <p>Enter otp sent to your Registered Mobile</p>
          <div>
            <input id="input" type="number" placeholder="Enter OTP here" />
          </div>
          <div>
            <button id="button1020">Continue</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
