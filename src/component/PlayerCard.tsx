import {
    FaBaseballBall,
    FaGlobeAsia,
    FaUserAlt,
    FaTrophy,
    FaBolt,
    FaArrowRight,
} from "react-icons/fa";

import type { iplayerType } from "../type/playerType";

const PlayerCard = ({ player }: { player: iplayerType }) => {
    return (
        <div
            className="
                group
                overflow-hidden
                rounded-3xl
                border border-base-300
                bg-base-100
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >
            {/* ================= IMAGE SECTION ================= */}
            <div className="relative h-72 overflow-hidden">

                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                />

                {/* Dark Gradient */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/30
                        to-transparent
                    "
                />

                {/* Top Badge */}
                <div className="absolute left-4 top-4">
                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/20
                            bg-black/40
                            px-4
                            py-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            text-white
                            backdrop-blur-md
                        "
                    >
                        <FaTrophy className="text-yellow-400" />
                        {player.playerType}
                    </span>
                </div>

                {/* Price Badge */}
                <div
                    className="
                        absolute
                        right-4
                        top-4
                        rounded-2xl
                        border
                        border-white/20
                        bg-black/50
                        px-4
                        py-2
                        text-right
                        backdrop-blur-md
                    "
                >
                    <p className="text-[10px] uppercase tracking-wider text-gray-300">
                        Price
                    </p>

                    <p className="text-xl font-extrabold text-white">
                        ৳{player.price.toLocaleString()}
                    </p>
                </div>

                {/* Player Name */}
                <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2">
                        <FaUserAlt className="text-lg text-primary" />

                        <h2 className="text-2xl font-extrabold text-white">
                            {player.playerName}
                        </h2>
                    </div>

                    {/* Origin */}
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                        <FaGlobeAsia className="text-primary" />
                        <span>{player.origin}</span>
                    </div>
                </div>
            </div>

            {/* ================= CARD BODY ================= */}
            <div className="p-5">

                {/* Section Title */}
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-base-content/50">
                            Player Details
                        </p>

                        <h3 className="mt-1 text-lg font-bold">
                            Playing Style
                        </h3>
                    </div>

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-primary/10
                            text-primary
                        "
                    >
                        <FaBolt />
                    </div>
                </div>

                {/* ================= DETAILS GRID ================= */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {/* Origin */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-base-300
                            bg-base-200/50
                            p-3
                            transition
                            duration-300
                            hover:border-primary
                            hover:bg-primary/5
                        "
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-primary/10
                                    text-primary
                                "
                            >
                                <FaGlobeAsia />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-base-content/50">
                                    Origin
                                </p>

                                <p className="truncate font-bold">
                                    {player.origin}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Player Type */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-base-300
                            bg-base-200/50
                            p-3
                            transition
                            duration-300
                            hover:border-primary
                            hover:bg-primary/5
                        "
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-secondary/10
                                    text-secondary
                                "
                            >
                                <FaTrophy />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-base-content/50">
                                    Player Type
                                </p>

                                <p className="truncate font-bold">
                                    {player.playerType}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Bowling Style */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-base-300
                            bg-base-200/50
                            p-3
                            transition
                            duration-300
                            hover:border-primary
                            hover:bg-primary/5
                        "
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-primary/10
                                    text-primary
                                "
                            >
                                <FaBaseballBall />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-base-content/50">
                                    Bowling
                                </p>

                                <p className="truncate font-bold">
                                    {player.bowlingStyle}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Batting Style */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-base-300
                            bg-base-200/50
                            p-3
                            transition
                            duration-300
                            hover:border-primary
                            hover:bg-primary/5
                        "
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-secondary/10
                                    text-secondary
                                "
                            >
                                <FaBaseballBall />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-base-content/50">
                                    Batting
                                </p>

                                <p className="truncate font-bold">
                                    {player.battingStyle}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* ================= BOTTOM ACTION ================= */}
                <div
                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        border-base-300
                        pt-5
                    "
                >

                    {/* Price */}
                    <div>
                        <p className="text-xs text-base-content/50">
                            Starting Price
                        </p>

                        <p className="text-xl font-extrabold text-primary">
                            ৳{player.price.toLocaleString()}
                        </p>
                    </div>

                    {/* Select Button */}
                    <button
                        className="
                            btn
                            btn-primary
                            rounded-xl
                            px-5
                            shadow-md
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-xl
                        "
                    >
                        Select

                        <FaArrowRight
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PlayerCard;