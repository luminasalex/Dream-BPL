
const AvaliablePlayers = (player) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {player.map((player) => (
                    <div
                        key={player.playerName}
                        className="card bg-base-100 w-96 shadow-sm"
                    >
                        <figure>
                            <img
                                src={player.playerImg}
                                alt={player.playerName}
                                className="w-full h-64 object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                {player.playerName}
                            </h2>

                            <p>
                                <span className="font-semibold">Type:</span>{" "}
                                {player.playerType}
                            </p>

                            <p>
                                <span className="font-semibold">Bowling:</span>{" "}
                                {player.bowlingStyle}
                            </p>

                            <p>
                                <span className="font-semibold">Batting:</span>{" "}
                                {player.battingStyle}
                            </p>

                            <p>
                                <span className="font-semibold">Price:</span>{" "}
                                {player.price}
                            </p>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvaliablePlayers;