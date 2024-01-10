import React from 'react';
import ImageCarousel from './Item';
import '../recent/recent.css';
import Heading from '../../common/Heading';
import { offer } from "../../data/Data"

const Services = () => {
    return (
        <div>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Services We Offer'></Heading>
                    <div style={{marginTop:"16px"}}>
                    <ImageCarousel images={offer} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
