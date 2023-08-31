import React , {useState} from 'react';

const MiddleClick = () => {
    const [num, setNum] = useState(0);
    const [test, setTest] = useState(0);
    const handleMiddleClick = (e) => {
        e.preventDefault();
        if (e.button === 1) {
            console.log('Middle Mouse Click');
            setNum(prev => prev + 1);
        }
    }
    return (
        <>
            <button onMouseDown={handleMiddleClick}>+</button>
            <p>{num}</p>
        </>
    );
};

export default MiddleClick;