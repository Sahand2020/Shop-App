import React from "react";
import { offerCode } from "../../offer";

// Styles
import styles from "./OfferBadge.module.css"

const OfferBadge = () => {
    return (
        <div className={styles.offerBadge}>
            <span>{offerCode.disCount} %</span>
        </div>
    );
};

export default OfferBadge;
