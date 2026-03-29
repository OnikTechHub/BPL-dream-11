import React, { useState } from 'react';
import Card from '../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin }) => {
    return (
        <div className='container mx-auto px-4 md:px-8 lg:px-12 my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    players.map((player) => (
                    <Card player={player} setCoin={setCoin} coin={coin}></Card>
                    ))
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;