import React from 'react';
import { FaRegUser, FaFlag } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
    return (
       
        <div className='container mx-auto px-4 md:px-8 lg:px-12 my-10'>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    players.map((player) => (
                        <div key={player.id} className="card bg-base-100 shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
                            
                            
                            <figure className="bg-gray-100 h-64 w-full p-4">
                                <img
                                    src={player.image}
                                    alt={player.name}
                                    className="h-full w-full object-contain" 
                                />
                            </figure>

                            <div className="card-body p-6">
                               
                                <div className="flex items-center gap-3 mb-2">
                                    <FaRegUser className="text-xl text-gray-600" />
                                    <h2 className="card-title text-xl font-bold">{player.name}</h2>
                                </div>

                               
                                <div className='flex justify-between items-center text-gray-500 mb-3'>
                                    <div className='flex gap-2 items-center'>
                                        <FaFlag />
                                        <p className='font-semibold'>{player.team}</p>
                                    </div>
                                    <div className='badge badge-ghost p-3 font-medium'>{player.role}</div>
                                </div>

                                <div className="divider my-1"></div>

                                
                                <div className='flex justify-between items-center font-bold text-gray-700 mb-2'>
                                    <p className="text-left">Rating: {player.rating}</p>
                                    <p className="text-right">Matches: {player.matches}</p>
                                </div>

                                <div className="flex justify-between items-center gap-4 font-bold text-500 text-sm">
                                    <p className="text-left">BowlingStyle</p>
                                    <p className="text-right">BattingStyle</p>
                                </div>

                                <div className="flex justify-between items-center gap-4 font-semibold text-gray-500 text-sm mb-4">
                                    <p className="text-left">{player.bowlingStyle || "N/A"}</p>
                                    <p className="text-right">{player.battingStyle || "N/A"}</p>
                                </div>

                                
                                <div className="card-actions justify-between items-center mt-2">
                                    <p className='font-bold text-lg'>Price: ${player.price}</p>
                                    <button className="btn btn-sm btn-outline  hover:text-black border-gray-300 transition-all">
                                        Choose Player
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;