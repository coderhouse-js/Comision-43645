import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeContainer = () => {

    const [formError, setFormError] = useState(false);

    const validateEmail = (event) => {
        setFormError(!String(event.target.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ));
    };

    return (
        <div>
            <input type="email" placeholder="" onInput={validateEmail}/>
            <b>{formError ? 'Tus datos son invalidos' : 'tus datos son correctos'}</b>
        </div>
    )
}

export default HomeContainer;