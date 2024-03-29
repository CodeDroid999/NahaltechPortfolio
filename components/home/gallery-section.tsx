import React from 'react';

import ImageBox from './GallerySection.tsx/Imagebox';

const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="layout_padding bg-gray-200">
            <div className="container">
                <h1>Gallery</h1>
                <div className="row no-gutters">
                    <ImageBox bgUrl='https://i.postimg.cc/25N5wcHV/AI.png' />
                    <ImageBox bgUrl='https://i.postimg.cc/5tKhdFmc/grao.jpg' />
                    <ImageBox bgUrl='https://i.postimg.cc/bNHT9WYB/Screenshot-2024-02-01-031523.png' />
                    <ImageBox bgUrl='https://i.postimg.cc/1tLb4hTJ/niggah.jpg' />
                    <ImageBox bgUrl='https://i.postimg.cc/Cx7cStWq/self-hosting.png' />
                    <ImageBox bgUrl='https://i.postimg.cc/X73KqLKc/software.png' />
                    <ImageBox bgUrl='https://i.postimg.cc/tCGLjbFg/fibre1.jpg' />
                    <ImageBox bgUrl='https://i.postimg.cc/sgTrBTtk/data.png' />
                    <ImageBox bgUrl='https://i.postimg.cc/x8MhzpVY/fibreoptic.jpg' />
                </div>
            </div>

        </section>
    );
};

export default GallerySection;
