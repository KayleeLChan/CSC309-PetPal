import React from 'react';
import PetCarousel from '../../components/carousels/pet-carousel';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function navigateListings() {
        navigate('/listings');
        return;
    }

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex justify-content-evenly align-items-center">
                    <div className="h-100 d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                        <h1 className="text-center mt-5">Every Pet Deserves A Pal</h1>
                        <p className="text-center">Find a pal from our network of over 11,500 shelters and rescues</p>
                        <PetCarousel></PetCarousel>

                        <div class="text-primary-brown">
                            <button class="btn btn-lg btn-primary-orange m-3 shadow-sm" onClick={navigateListings}>Meet More Pals!</button>
                        </div>
                    </div>
                    <div className="align-self-end text-end w-50 hide-xl">
                        <img src="/imgs/dogCat.svg" width="100%"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;