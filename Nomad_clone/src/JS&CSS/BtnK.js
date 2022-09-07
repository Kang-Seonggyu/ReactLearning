import PropTypes from "prop-types";
import styles from "./BtnK.module.css";

function BtnK ({text}){
    return <button className={styles.BtnK}>{text}</button>;
}

BtnK.propTypes = {
    text : PropTypes.string.isRequired,
}

export default BtnK;