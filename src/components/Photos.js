import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import '../styles/Gallery.css'



function Photos() {
    return (
        <div className="photos">
            <SRLWrapper>
                <a href="https://source.unsplash.com/Hu48ZYD5kXY/800x600" data-attribute="SRL">
                    <img src="https://source.unsplash.com/Hu48ZYD5kXY/400x400" alt="Aquarium" />
                </a>

                <a href="https://source.unsplash.com/njDnOteVf6c/" data-attribute="SRL">
                    <img src="https://source.unsplash.com/njDnOteVf6c/400x400" alt="Oceanário de Lisboa, Portugal" />
                </a>
                <a href="https://source.unsplash.com/eOSqRq2Qm1c/800x799" data-attribute="SRL">
                    <img src="https://source.unsplash.com/eOSqRq2Qm1c/400x400" alt="Cairns Aquarium, Australia" />
                </a>
                <a href="https://source.unsplash.com/X3dHODCUKZo/800x600" data-attribute="SRL">
                    <img src="https://source.unsplash.com/X3dHODCUKZo/400x400" alt="Cairns Aquarium, Australia" />
                </a>
                <a href="https://source.unsplash.com/94Opxtcg4l8/" data-attribute="SRL">
                    <img src="https://source.unsplash.com/94Opxtcg4l8/400x400" alt="Cairns Aquarium, Australia" />
                </a>
                <a href="https://source.unsplash.com/DcweRpj62Ds/800x799" data-attribute="SRL">
                    <img src="https://source.unsplash.com/DcweRpj62Ds/400x400" alt="Omaha's Henry Doorly Zoo and Aquarium, United States" />
                </a>
                <a href="https://source.unsplash.com/-snBBn-UnbA/800x799" data-attribute="SRL">
                    <img src="https://source.unsplash.com/-snBBn-UnbA/400x400" alt="Aquarium of Genoa, Italy" />
                </a>
                <a href="https://source.unsplash.com/fYq6fxktKzg/800x799" data-attribute="SRL">
                    <img src="https://source.unsplash.com/fYq6fxktKzg/400x400" alt="SeaLife in London, UK" />
                </a>
                <a href="https://source.unsplash.com/1_vWwEGnMAw/800x799" data-attribute="SRL">
                    <img src="https://source.unsplash.com/1_vWwEGnMAw/400x400" alt="Okinawa Churaumi Akwarium, Japan" />
                </a>

            </SRLWrapper>
        </div>
    );
}

export default Photos;