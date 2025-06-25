const ItemList = (props) => {

    return (
        <>
            <ul>
                {props.array.map((item, index) => (
                    <li key={`fruit-list-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ItemList