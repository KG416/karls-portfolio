import { useState, useEffect } from 'react';
import './pages/EmailMe.css'

function FetchData2() {

    const [cat, setCat] = useState(null);

    const catFunc = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            setCat(data[0].url);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        catFunc()
    }, []);

    return (
        <>
            {cat ? <img className='cat-img' src={cat} alt="cat" /> : <i className="fas fa-circle-notch fa-spin"></i>}
        </>
    );
}

export default FetchData2;