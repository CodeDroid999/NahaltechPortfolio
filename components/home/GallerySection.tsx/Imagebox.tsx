import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ImageBoxProps {
    bgUrl: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ bgUrl, }) => {
    return (
        <div className="col-md-4 ">
            <img src={bgUrl} alt="" className="h-full w-full" />
        </div >
    );
};

export default ImageBox;
