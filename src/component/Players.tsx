import { use } from "react";
import type { iplayerType } from "../type/playerType";
import AvaliablePlayers from "./AvaliablePlayers";

interface IplayerProps {
    PlayerPromise: Promise<iplayerType[]>
}

const Players = ({ PlayerPromise }: IplayerProps) => {
    const player = use(PlayerPromise)
    // console.log("PlayerData", PlayersData)
    return (
        <div >
            <AvaliablePlayers player={player}></AvaliablePlayers>
        </div>
    );
};

export default Players;