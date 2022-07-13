/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

// Icons
import { FaArrowUp } from "react-icons/fa";

// Styles
import styles from "./Footer.module.css";

const Footer = () => {
    const goTop = () => {
        window.scrollTo(0, 0);
    };
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <footer>
            <div className={styles.box}>
                <div className={styles.boxChild}>
                    <h3>Company</h3>
                    <span>About us</span>
                    <span>Contact us</span>
                    <span>FAQ</span>
                    <span>Privacy Policy</span>
                </div>

                <div className={styles.boxChild}>
                    <h3>Shortcuts</h3>
                    <Link to={"/cart"}>Go to Cart</Link>
                    <Link to={"/favorite"}>Go to Favorite</Link>
                </div>

                <div className={styles.boxChild}>
                    <h3>Information</h3>
                    <span>Address</span>
                    <span>Social Media</span>
                    <span>Services</span>
                </div>
            </div>
            <div className={styles.contact_box}>
                <div className={styles.formContainer}>
                    <h3>Send Your Comment</h3>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <textarea
                            type="text"
                            placeholder="Enter Your Comment"
                            className={styles.textInput}
                        />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className={styles.emailInput}
                            required
                        />
                        <button className={styles.submitButton} type="submit">
                            Submit Comment
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className={styles.downloadTitle}>Download</h3>
                    <div className={styles.downloadContainer}>
                        <div className={styles.btnContainer}>
                            <a
                                href="https://www.apple.com/uk/app-store/"
                                className={styles.btn_apple}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className={styles.btn_market_subtitle}>
                                    Download on
                                </span>
                                <span className={styles.btn_market_title}>
                                    App Store
                                </span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://play.google.com/store/"
                                className={styles.btn_google}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className={styles.btn_market_subtitle}>
                                    Download on
                                </span>
                                <span className={styles.btn_market_title}>
                                    Google Play
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <span onClick={goTop} className={styles.goTop}>
                <FaArrowUp />
            </span>
        </footer>
    );
};

export default Footer;
