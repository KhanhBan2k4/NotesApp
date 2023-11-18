import React, { useState } from 'react';

const Danger = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };
    return (
        <div>
            <button onClick={toggleMenu} style={{ background: 'red'}}>Warning</button>
    
            {isMenuVisible && (
                <div>
                    <h3 style={{ color:'red', fontSize: 18 }}>This web application can only host your nodes temporarily. When you reload the web page (F5) or exit the web page, all your notes will be lost.</h3>
                    <p style={{ fontSize: 18 }}>Since this is only a beta version, we are trying to improve it further. Thank you!</p>
                </div>
            )}
        </div>
    );
};
export default Danger;