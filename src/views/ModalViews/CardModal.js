import React, { useState } from "react";
import './CardModalCss.css';
const CardModal = () => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const buttonText = "Sifarisi tamamla";
    const labelLeftText = "Total:";
    const currencyUnit = "AZN";
    return (
        <div className="modalFrame">
            <div className="leftFrame">
                {items.map((item) => {
                    return (
                        <div>
                            
                        </div>
                    )
                })}
            </div>
            <div className="rigthFrame">
                <div className="itemsFrame">

                </div>
                <div className="bottomFrame">
                    <div className="textFrame">
                        <label className="totalText">
                            {labelLeftText}
                        </label>
                        <label className="priceText">
                            {totalPrice} {currencyUnit}
                        </label>
                    </div>
                    <button className="acceptButton">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CardModal;