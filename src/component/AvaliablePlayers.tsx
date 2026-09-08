import type { iplayerType } from "../type/playerType";
import PlayerCard from "./PlayerCard";

interface IPlayerProps {
    player: iplayerType[]
}

const AvaliablePlayers = ({ player }: IPlayerProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {player.map((player) => (
                <PlayerCard key={player.playerName} player={player} />
            ))}
        </div>
    );
};

export default AvaliablePlayers;