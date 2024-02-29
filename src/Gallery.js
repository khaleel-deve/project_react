import "./styles.css";
import React from 'react';

function Gallery() {
    return (
        <>
            <div id="imgs">
                <img src="./images/gallerypage/img1.png" alt="This is img" />
                <img src="./images/gallerypage/img2.png" alt="This is img" />
                <img src="./images/gallerypage/img3.png" alt="This is img" />
                <img src="./images/gallerypage/img4.png" alt="This is img" />
                <img src="./images/gallerypage/img5.png" alt="This is img" />
                <img src="./images/gallerypage/img6.png" alt="This is img" />
                <img src="./images/gallerypage/img7.png" alt="This is img" />
                <img src="./images/gallerypage/img8.png" alt="This is img" />
            </div>
            <div id="buttonf">
                <button>Get to know us better!</button>
            </div>
        </>
    );
}

export default Gallery;
