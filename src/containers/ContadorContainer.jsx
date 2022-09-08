import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SumadorClickComponent from "../components/SumadorClickComponent";

const ContadorContainer = () => {
    const [cantidadDeClicks, setCantidadDeClicks] = useState();

    const  { parametroURL } = useParams();
    console.log(parametroURL)
    
    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch("/data.json")
            const data = await response.json()
            console.log(data);
        }, 3000)
    }, [])

    if(cantidadDeClicks == undefined) {
        return <p>Loading...</p>
    }
    return (
        <>
            <b className="algo">{cantidadDeClicks}</b>

            <SumadorClickComponent setCantidadDeClicks={setCantidadDeClicks}
                cantidadDeClicks={cantidadDeClicks} />
        </>
    )
}

export default ContadorContainer;