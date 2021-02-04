import { useState } from 'react';
import './pages/EmailMe.css'

function FetchData() {

    const getData = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                //console.log(data[0].url);
                setCat(data[0].url)
            })
    }

    const [cat, setCat] = useState(getData);

    return (
        <>
            <img className='cat-img' src={cat} alt="" />
        </>
    );
}


export default FetchData;