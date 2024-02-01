import React from 'react';

import ImageBox from './GallerySection.tsx/Imagebox';

const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="gallery_section layout_padding">
            <div className="container">
                <div className="row">
                    <ImageBox bgUrl='https://i.postimg.cc/3rvPVN46/bunda.jpg' />
                    <ImageBox bgUrl='https://i.postimg.cc/k4Xw2cPp/network.png' />
                    <ImageBox bgUrl='https://i.postimg.cc/0NJKcKdy/cable.jpg' />
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
