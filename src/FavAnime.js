import React, { useState } from 'react'

function FavAnime() {
    const [anime, setAnime] = useState("Naruto");
    return (
        <div>
            <h1>My Favourite Anime is {anime} !!!!</h1>
            <button type='button' onClick={() => setAnime("One Piece")}>One Piece</button><br/>
            <button type='button' onClick={() => setAnime("Attack on Titan")}>Attack on Titan</button><br/>
            <button type='button' onClick={() => setAnime("Demon Slayer")}>Demon Slayer</button><br/>
        </div>
    )
}

export default FavAnime