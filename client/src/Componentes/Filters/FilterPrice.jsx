import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCourseFree } from "../../redux/actions";

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
        <div>
            <div>
                <label>Precio</label>
                <select onChange={e => handleChange(e)}>
                    <option>Seleccionar</option>
                    <option value={'paid'}>De pago</option>
                    <option value={'free'}>Gratis</option>
                </select>
            </div>

        </div>
    )
}

export default FilterPrice;