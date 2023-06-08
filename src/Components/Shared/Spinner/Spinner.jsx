import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Spinner = () => {
    return (
        <div className=' mt-20 flex justify-center items-center'>
            <LoadingSpinnerComponent type={ 'Wedges' } colors={ [ '#04D912', 'purple', 'blue', 'yellow'] } size={ '300px' } />
        </div>
    );
};

export default Spinner;