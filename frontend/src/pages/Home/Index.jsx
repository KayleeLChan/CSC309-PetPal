import React from 'react';
import PetCarousel from '../../components/carousels/pet-carousel';
import PetCarouselSmall from '../../components/carousels/pat-carousel-small';

function Home() {
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex justify-content-evenly align-items-center">
                    <div className="h-100 d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                        <h1 className="text-center mt-5">Every Pet Deserves A Pal</h1>
                        <p className="text-center">Find a pal from our network of over 11,500 shelters and rescues</p>
                        <PetCarousel></PetCarousel>
                        <PetCarouselSmall></PetCarouselSmall>

                        <div className="text-primary-brown">
                            <button className="btn btn-lg btn-primary-orange m-3 shadow-sm" type="">Meet More Pals!</button>
                        </div>
                    </div>
                    <div className="align-self-end text-end w-50 hide-xl">
                        <img src="./imgs/dogCat.svg" width="100%"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;