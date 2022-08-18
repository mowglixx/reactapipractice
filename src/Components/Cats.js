

const Cat = ({ id, name, image, wikipedia_url, description }) => {
    return (
        <div id={id} className={'flexRow'}>
            <div className="flexCol justifyContentCenter">

            {image && <img src={image.url} alt={`${name} breed of cat`} />}
            </div>
            <div className="padding">
            <div className="flexCol">
            <h3><a href={wikipedia_url} target="_blank" rel="noreferrer">{name}</a></h3>
            <p>{description}</p>
            </div>
            </div>
        </div>
    )
}

const Cats = ({ cats, selectedBreed }) => {
    return (
        <div className="flexCol">
            <h2>
                Cats
            </h2>
            <div className="flexCol productList">
                {cats 
                ? selectedBreed !== 'all' 
                    ? cats.filter(item => item.id === selectedBreed).map((cat) => {
                        return <Cat key={cat.id} {...cat} />
                    })
                    : cats.map((cat) => {
                        return <Cat key={cat.id} {...cat} />
                    }) 
                : null}
            </div>
        </div>
    )
}

export default Cats