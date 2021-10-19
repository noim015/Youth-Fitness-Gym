import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12 text-center">
            <img src={img} alt="" />
            <div className="py-3">
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
            </div>
        </div>
    );
};

export default Expert;