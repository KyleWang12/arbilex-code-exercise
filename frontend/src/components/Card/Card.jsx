import React from 'react'
import './Card.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Card() {

    const [car, setCar] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/cars/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                setCar(res.data[0]);
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const getDate = (dateStr) => {
        const date = new Date(dateStr);
        const month = date.toLocaleString('default', { month: 'short' });
        return `${month} ${date.getDate()}, ${date.getFullYear()}`;
    }

    const getDaysLeft = (end) => {
        const now = new Date();
        const endDate = new Date(end);
        const daysLeft = endDate.getDate() - now.getDate();
        return daysLeft;
    }

    const getDaysBetween = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const daysBetween = endDate.getDate() - startDate.getDate();
        return daysBetween;
    }


    return (
        <div>
            {Object.keys(car).length > 0 && <div className='card-container'>
                {console.log(Object.keys(car).length)}
                <div className='card'>
                    <div className='left'></div>
                    <div className='right'>
                        <div className='right-top'>
                            <div className='right-top-bar'>
                                <div className='brand-outer'>
                                    <div className='brand-inner'>{car.tag}</div>
                                </div>
                            </div>
                            <div className='title-date'>
                                {getDate(car.date_of_listing)}
                            </div>
                            <div className='title-name'>
                                {car.car_name}
                            </div>
                            <div className='description'>
                                <div className='desc-block'>
                                    <div className='block-title'>ENGINE</div>
                                    <div className='block-content'>{car.engine}</div>
                                </div>
                                <div className='desc-block'>
                                    <div className='block-title'>HOUSEPOWER</div>
                                    <div className='block-content'>{car.horsepower}</div>
                                </div>
                                <div className='desc-block'>
                                    <div className='block-title'>TORQUE</div>
                                    <div className='block-content'>{car.torque + ' lb-ft'}</div>
                                </div>
                                <div className='desc-block'>
                                    <div className='block-title'>0-60MPH</div>
                                    <div className='block-content'>{car.mph_0_60 + ' sec'}</div>
                                </div>
                            </div>
                            <div className='status'>
                                <div className='desc-block'>
                                    <div className='block-title'>BIDDING STATUS</div>
                                    <div className='block-content'>{car.bidding_status}</div>
                                </div>
                            </div>
                            <div className='car-link'>
                                <div>View Car</div>
                                <div className='arrow-container'>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-bar'>
                            <div className='days-left'>{getDaysLeft(car.date_listing_ends

                            ) + ' days left'}</div>
                            <ProgressBar progress={getDaysLeft(car.date_listing_ends) * 100 / getDaysBetween(car.date_of_listing, car.date_listing_ends

                            ) + '%'} />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}
