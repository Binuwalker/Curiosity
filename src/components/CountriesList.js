import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import CountryList from '../data'
import '../styles/Home.css';

const CountriesList = () => {

    const navigate = useNavigate()

    return (
        <div className='countriesList'>
            <Container>
                <div className='country-packages'>
                    <div>
                        <h1 className='countriesList-heading'>Top Visited Countries</h1>
                    </div>
                    {CountryList.map((CountryList) => {
                        return (
                            <div className='country-package' key={CountryList.id}>
                                <img src={CountryList.img} alt={CountryList.alt} className='country-package-img' />
                                <Container>
                                    <div className='country-package-category'>{CountryList.category}</div>
                                    <h6 className='country-package-destination'>{CountryList.destination}:</h6>
                                    <p className='country-package-details'>{CountryList.details}</p>
                                    <p className='country-package-days'>{CountryList.days}</p>
                                    <p className='country-package-price'>{CountryList.price}</p>
                                    <button className='country-package-btn'
                                        onClick={() => navigate('/booknow')}
                                    >Book Now
                                    </button>
                                </Container>
                            </div>
                        )
                    })
                    }
                </div>
                <div className='countriesList-dummy-2'></div>
            </Container>
        </div>
    )
}

export default CountriesList;