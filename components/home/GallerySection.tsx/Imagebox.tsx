import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ImageBoxProps {
    bgUrl: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ bgUrl, }) => {
    return (
        <div className="col-md-6 ">
            <div className="img-box">
                <img src={bgUrl} alt="" />
            </div>
        </div >
    );
};

export default ImageBox;
