import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCourseFree } from "../../redux/actions";
import styles from "./FiltersIndex.module.css";


function FilterPrice() {
    const dispatch = useDispatch();
    const [price, setPrice] = useState('');

    useEffect(() => {
        dispatch(filterCourseFree(price));
    }, [price]);

    function handleChange(e) {
        setPrice(e.target.value);
    }

    return(
        <div className={styles.containerSelect}>
            <div className={styles.select}>
                <select className={styles.selecttodo} onChange={e => handleChange(e)}>
                    <option>Precio</option>
                    <option value={'paid'}>De pago</option>
                    <option value={'free'}>Gratis</option>
                </select>
              
            </div>

        </div>
    )
}

export default FilterPrice;