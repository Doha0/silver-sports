import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Spinner = () => {
    return (
        <div className=' mt-20 flex justify-center items-center'>
            <LoadingSpinnerComponent type={ 'Wedges' } colors={ [ '#04D912', '#e63946', '#457b9d', '#00b4d8'] } size={ '300px' } />
        </div>
    );
};

export default Spinner;