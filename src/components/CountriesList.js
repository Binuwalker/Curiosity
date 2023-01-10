import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Home.css';

const CountriesList = () => {
    return (
        <div className='countriesList'>
            <Container>
                <div className='country-packages'>
                <div>
                    <h1 className='countriesList-heading'>Top Visited Countries</h1>
                </div>
                    <div className='country-package-1'>
                        <img src='/img/swiss-package.jpg' alt='swiss-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Adventure</div>
                            <h6 className='country-package-destination'>Switzerland:</h6>
                            <p className='country-package-details'> Switzerland's diverse landscape as well as the available activities, which take advantage of the Alpine climate and landscapes, in particular for skiing and mountaineering.</p>
                            <p className='country-package-days'>18-20 Days</p>
                            <p className='country-package-price'>From $3400 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                    <div className='country-package-2'>
                        <img src='/img/lithuania-package.jpg' alt='lithuania-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Guided Tour</div>
                            <h6 className='country-package-destination'>Lithuania:</h6>
                            <p className='country-package-details'> Lithuania attracts many visitors from neighbouring countries. Historical legacy of the Grand Duchy of Lithuania, rich history, architecture, pristine nature, seaside and SPA resorts are the main attraction of Lithuania.</p>
                            <p className='country-package-days'>15 Days</p>
                            <p className='country-package-price'>From $1500 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                    <div className='country-package-3'>
                        <img src='/img/israel-package.jpg' alt='israel-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Pilgrimage</div>
                            <h6 className='country-package-destination'>Israel:</h6>
                            <p className='country-package-details'> The most visited Christian holy sites in Israel are the Church of the Holy Sepulchre in Jerusalem, the Church of the Nativity in the West Bank town of Bethlehem, and the Basilica of the Annunciation in Nazareth, Israel.</p>
                            <p className='country-package-days'>10 Days</p>
                            <p className='country-package-price'>From $1200 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                    <div className='country-package-4'>
                        <img src='/img/maldive-package.jpg' alt='maldive-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Honey Moon</div>
                            <h6 className='country-package-destination'>Maldives:</h6>
                            <p className='country-package-details'> During your stay in the Maldives, one of the best things is to visit a local island. The capital city Malé is the most populated place in the Maldives. you can visit Malé city for sightseeing and landmarks.</p>
                            <p className='country-package-days'>12-15 Days</p>
                            <p className='country-package-price'>From $2000 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                </div>
                <div className='countriesList-dummy-1'></div>
            </Container>
            <Container>
                <div className='country-packages'>
                    <div className='country-package-5'>
                        <img src='/img/france-package.jpg' alt='france-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Guided Tour</div>
                            <h6 className='country-package-destination'>France:</h6>
                            <p className='country-package-details'> France is one of the most diverse countries in Europe, long Atlantic beaches, the castles of the Loire Valley, rugged Celtic Brittany and the historian's dream that is Normandy.</p>
                            <p className='country-package-days'>25-28 Days</p>
                            <p className='country-package-price'>From $5000 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                    <div className='country-package-6'>
                        <img src='/img/germany-package.jpg' alt='germany-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Adventure</div>
                            <h6 className='country-package-destination'>Germany:</h6>
                            <p className='country-package-details'> Winter is the favourite season for any romantic. Outside, snowed-in forests and frozen lakes beckon. Inside, it feels cosy with baked goods, mulled wine and candlelight.</p>
                            <p className='country-package-days'>24 Days</p>
                            <p className='country-package-price'>From $4200 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                    <div className='country-package-7'>
                        <img src='/img/japan-package.jpg' alt='japan-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Nature</div>
                            <h6 className='country-package-destination'>Japan:</h6>
                            <p className='country-package-details'> Mount Fuji is the highest peak in the Fuji volcanic chain in central Japan and is the country's highest and most beautiful mountain. Almost perfectly round, its symmetrical form has been celebrated in poetry and painting.</p>
                            <p className='country-package-days'>15-20 Days</p>
                            <p className='country-package-price'>From $3000 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                    <div className='country-package-8'>
                        <img src='/img/newzealand-package.jpg' alt='newzealand-package' className='country-package-img' />
                        <Container>
                            <div className='country-package-category'>Adventure</div>
                            <h6 className='country-package-destination'>New Zealand:</h6>
                            <p className='country-package-details'> New Zealand lies to the southwest of the Pacific Ocean and promises breathtaking landscapes adorned with picturesque coastlines and the mightiest mountains.</p>
                            <p className='country-package-days'>20-25 Days</p>
                            <p className='country-package-price'>From $3100 per person</p>
                            <button className='country-package-btn'>Book Now</button>
                        </Container>
                    </div>
                </div>
                <div className='countriesList-dummy-2'></div>
            </Container>
        </div>
    )
}

export default CountriesList;