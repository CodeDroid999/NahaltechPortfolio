import React, { ReactNode } from 'react';

interface FeatureBoxProps {
    title: string;
    description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description, }) => {
    return (
        <div className="col-md-6 ">
            <div className="box rounded">
                <div className="detail-box mt-2">
                    <h6 className=" font-bold text-lg underline">{title}</h6>
                    <p className="">{description}</p>
                </div>
            </div>
        </div >
    );
};

export default FeatureBox;
