import React from 'react';

const GallerySection: React.FC = () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg',
    ];

    return (
        <section id="gallery" className="gallery_section layout_padding">
            <div className="container">
                <div className="row">
                    {images.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <img src={`images/${image}`} alt={`Image ${index + 1}`} className="gallery_image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
