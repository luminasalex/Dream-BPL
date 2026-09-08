import { FaBaseballBall, FaGlobeAsia, FaUserAlt } from "react-icons/fa";
import type { iplayerType } from "../type/playerType";

const PlayerCard = ({ player }: { player: iplayerType }) => {
    return (
        <div
            key={player.playerName}
            className="group relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* Player Image */}
            <figure className="relative h-72 overflow-hidden">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Player Type Badge */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        {player.playerType}
                    </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 rounded-2xl border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-md">
                    <p className="text-xs text-gray-300">Player Price</p>
                    <p className="text-xl font-bold text-white">
                        ৳{player.price.toLocaleString()}
                    </p>
                </div>

                {/* Player Name */}
                <div className="absolute bottom-4 left-4">
                    <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                        <FaUserAlt className="text-primary" />
                        {player.playerName}
                    </h2>
                </div>
            </figure>

            {/* Card Body */}
            <div className="card-body gap-4">

                {/* Origin */}
                <div className="flex items-center justify-between rounded-2xl bg-base-200 p-3">
                    <div className="flex items-center gap-3">
                        <FaGlobeAsia className="text-xl text-primary" />

                        <div>
                            <p className="text-xs text-base-content/60">Origin</p>
                            <p className="font-semibold">
                                {player.origin}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Player Information */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {/* Bowling */}
                    <div className="rounded-2xl border border-base-300 p-3 transition hover:border-primary">
                        <div className="flex items-center gap-3">
                            <FaBaseballBall className="text-xl text-primary" />

                            <div>
                                <p className="text-xs text-base-content/60">
                                    Bowling Style
                                </p>
                                <p className="font-semibold">
                                    {player.bowlingStyle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Batting */}
                    <div className="rounded-2xl border border-base-300 p-3 transition hover:border-primary">
                        <div className="flex items-center gap-3">
                            <FaBaseballBall className="text-xl text-secondary" />

                            <div>
                                <p className="text-xs text-base-content/60">
                                    Batting Style
                                </p>
                                <p className="font-semibold">
                                    {player.battingStyle}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Player Type */}
                <div className="flex items-center justify-between border-t border-base-300 pt-4">
                    <div>
                        <p className="text-xs text-base-content/60">
                            Player Type
                        </p>

                        <p className="font-bold">
                            {player.playerType}
                        </p>
                    </div>

                    {/* Select Button */}
                    <button className="btn btn-primary rounded-xl px-6 shadow-lg transition-all duration-300 hover:scale-105">
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;