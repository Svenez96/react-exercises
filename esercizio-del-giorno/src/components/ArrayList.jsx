const ArrayList = (props) => {
    return(
        <ul>
            {props.stats.map((item, index) => (
                <li key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.bio}</p>
                    {item.img && <img src={item.img} />}
                </li>
            ))}
        </ul>
    )
}

export default ArrayList