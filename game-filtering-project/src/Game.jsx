
function Game(props) {
    return(
        <div className="game-card">
            <p>{props.title}</p>
            <p>{props.releaseDate}</p>
            <p>{props.genre}</p>
        </div>
    )
}

export default Game