import React from 'react';

import gymExprt1 from '../../../images/trainers/gymExprt1.jpg';
import gymExprt2 from '../../../images/trainers/gymExprt2.jpg'
import gymExprt3 from '../../../images/trainers/gymExprt3.jpg'
import Expert from '../Expert/Expert';



const experts = [
    {
        img: gymExprt1,
        name: 'Jack Smith',
        expertize: 'WorkOut'
    },
    {
        img: gymExprt2,
        name: 'Maria Anderson',
        expertize: 'Yoga'
    },
    {
        img: gymExprt3,
        name: 'Julio Siger',
        expertize: 'Muscle Building'
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h1 className="text-center py-5">Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;