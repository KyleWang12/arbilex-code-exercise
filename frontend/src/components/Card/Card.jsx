import React from 'react'
import './Card.css'

export default function Card() {


    return (
        <div className='card'>
            <div className='left'></div>
            <div className='right'>
                <div className='right-top'>
                    <div className='right-top-bar'>
                        <div className='brand-outer'>
                            <div className='brand-inner'>Audi Exlusive</div>
                        </div>
                    </div>
                    <div className='title-date'>
                        Nov 1, 2022
                    </div>
                    <div className='title-name'>
                        2023 Audi R8 Coupe
                    </div>
                    <div className='description'>
                        <div className='desc-block'>
                            <div className='block-title'>ENGINE</div>
                            <div className='block-content'>v10</div>
                        </div>
                        <div className='desc-block'>
                            <div className='block-title'>HOUSEPOWER</div>
                            <div className='block-content'>602 HP</div>
                        </div>
                        <div className='desc-block'>
                            <div className='block-title'>TORQUE</div>
                            <div className='block-content'>413 lb-ft</div>
                        </div>
                        <div className='desc-block'>
                            <div className='block-title'>0-60MPH</div>
                            <div className='block-content'>3.1 sec</div>
                        </div>
                    </div>
                    <div className='status'>
                        <div className='desc-block'>
                            <div className='block-title'>BIDDING STATUS</div>
                            <div className='block-content'>Accepting Proposals</div>
                        </div>
                    </div>
                    <div className='car-link'>
                        <div>View Car</div>
                        <div className='arrow-container'>
                        </div>
                    </div>
                </div>
                <div>
                    <div>7 days left</div>
                    <div className='progress'></div>
                </div>
            </div>
        </div>
    )
}
