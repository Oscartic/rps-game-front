import React from 'react';

function Winner(props) {

    const { setView } = props;

    const handleInitReturn = () => {
        setView(3);
    }
    return(
        <div className="winner">
            Felicidades Has ganado!
            <div  className="return-new-players" onClick={handleInitReturn()}>Play Again</div>
        </div>
    );
}

export default Winner; 