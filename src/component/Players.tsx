import { use, useState } from "react";
import type { iplayerType } from "../type/playerType";
import AvaliablePlayers from "./AvaliablePlayers";
import SelectedPlayer from "./SelectedPlayer";

interface IplayerProps {
    PlayerPromise: Promise<iplayerType[]>
}

const Players = ({ PlayerPromise }: IplayerProps) => {
    const player = use(PlayerPromise)
    // console.log("PlayerData", player)

    const [isAvailablePlayer, setIsAvailablePlayer] = useState("available")

    // console.log("isAvailablePlayer", isAvailablePlayer)

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mt-4">
                <h2 className="text-2xl font-bold">{isAvailablePlayer === "available" ? "Available Players" : "Selected Player"}</h2>
                <div>
                    <button onClick={() => setIsAvailablePlayer("available")} className={`btn  ${isAvailablePlayer === "available" ? "btn-accent" : ""} rounded-[20px] rounded-r-none`}>Available player</button>
                    <button onClick={() => setIsAvailablePlayer("selected")} className={`btn ${isAvailablePlayer === "selected" ? "btn-secondary" : ""} rounded-[20px] rounded-l-none`}>Selected player</button>
                </div>
            </div>

            {/* conditional Randaring */}
            {isAvailablePlayer === "available" ? <AvaliablePlayers player={player}></AvaliablePlayers> : (<SelectedPlayer></SelectedPlayer>)}
        </div>
    );
};

export default Players;