import { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Player = ({ playerPromise }) => {
    console.log(playerPromise)
    const players = use(playerPromise)
    // console.log(players);

    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType);



    return (
        <div className='container mx-auto my-[60px]'>
            <div className='flex justify-between gap-4 items-center mb-[20px]'>
                {selectedType === "available" ? <h2 className="text-3xl font-bold mb-6">Available Players</h2> : <h2 className="text-3xl font-bold mb-6">Selected Player (4/6)</h2>}
                <div>
                    <button onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-white"} rounded-l-xl`}>
                        Available
                    </button>
                    <button onClick={() => setSelectedType("selected")}
                        className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-white"} rounded-l-none rounded-r-xl`}>
                        Selected (0)
                    </button>


                </div>
            </div>

            {selectedType === "available" ? (<AvailablePlayers players={players}></AvailablePlayers>) : (<SelectedPlayers></SelectedPlayers>)}
        </div>
    );
};

export default Player;