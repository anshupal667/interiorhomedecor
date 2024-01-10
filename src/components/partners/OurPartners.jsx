import React from 'react';
import '../home/recent/recent.css';
import { partners } from '../data/Data';
import Heading from '../common/Heading';
import PartnerImageCarousel from '../home/ourservices/PartnerImageCarousel';


const OurPartners = () => {
    return (
        <div>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Our Trusted Partners'></Heading>
                    <div style={{marginTop:"50px"}}>
                    <PartnerImageCarousel images={partners} />
                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurPartners;
