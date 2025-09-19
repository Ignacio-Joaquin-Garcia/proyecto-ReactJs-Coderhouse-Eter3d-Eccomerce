import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
const slideStyle = {
    width: "100%",
    aspectRatio: "1 / 1", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px",
};

export function CarrouselAnt(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        adaptiveHeight: true,
    };


    const [extraImages, setExtraImages] = useState([]);

    useEffect(() => {
        if (!props.extraImages) return;
        const imgs = [];
        if (props.extraImages.image2) imgs.push(props.extraImages.image2);
        if (props.extraImages.image3) imgs.push(props.extraImages.image3);
        if (props.extraImages.image4) imgs.push(props.extraImages.image4);
        if (props.extraImages.image5) imgs.push(props.extraImages.image5);
        setExtraImages(imgs);
    }, [props.extraImages]);

    return (
        <Carousel {...settings}>
            <div style={slideStyle}>
                <Image style={imgStyle} src={props.img} alt="main"/>
            </div>
            {extraImages.map((src, index) => (
                <div style={slideStyle} key={index}>
                    <Image style={imgStyle} src={src} alt={`extra-${index}`} />
                </div>
            ))}
        </Carousel>
    );
}