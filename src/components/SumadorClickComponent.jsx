const SumadorClickComponent = ({setCantidadDeClicks, cantidadDeClicks}) => {
    return (
        <button onClick={() => {
            setCantidadDeClicks(cantidadDeClicks + 1);
        }}>
            Sumar un click
        </button>
    )
}

export default SumadorClickComponent;