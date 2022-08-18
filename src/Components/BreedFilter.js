import { useRef } from "react"


const FilterOption = ({ id, name }) => {
    return (
        <option value={id}>{name}</option>
    )
}

const BreedFilter = ({ cats, selectedBreed, setSelectedBreed }) => {
    const filterDropDown = useRef()

    return (
        <div className="flexCol">
            <h2>
                Cat Filter
            </h2>
            <p>Selected Breed: {selectedBreed.name}</p>
            <select
            className="padding"
                ref={filterDropDown}
                defaultValue={selectedBreed}
                onChange={() => {
                    return setSelectedBreed(filterDropDown.current.value)
                }}>
                <FilterOption key={'default'} id='all' name="All Breeds" />
                {cats.map((product) => {
                    return <FilterOption key={product.id} {...product} />
                })}
            </select>
        </div>
    )
}

export default BreedFilter