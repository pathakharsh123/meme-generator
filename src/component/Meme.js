import React from "react";
const Meme = () => {
    return (
        <main>
            <form className="form">
                <div >
                    <input className="input-1" type="text" placeholder="top text" />
                    <input className="input-2" type="text" placeholder="bottom text" />
                </div>
                <button className="button">Get a new meme image 🌄</button>
            </form>
        </main>
    )
}

export default Meme