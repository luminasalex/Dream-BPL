import { use } from "react";
import type { iplayerType } from "../type/playerType";
import AvaliablePlayers from "./AvaliablePlayers";

interface IplayerProps {
    PlayerPromise: Promise<iplayerType[]>
}

const Players = ({ PlayerPromise }: IplayerProps) => {
    const player = use(PlayerPromise)
    console.log("PlayerData", player)
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mt-4">
                <h2 className="text-2xl font-bold">Available Players</h2>
                <div>
                    <button className="btn btn-secondary">Secondary</button>
                    <button className="btn btn-accent">Accent</button>
                </div>
            </div>
            <AvaliablePlayers player={player}></AvaliablePlayers>
        </div>
    );
};

export default Players;