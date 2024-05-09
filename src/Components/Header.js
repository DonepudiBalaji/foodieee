import React, { useState } from 'react'
import axios from 'axios'
import logo from '../Components/Restaurant.jpg'
import Receipies from './Receipies';

function Header() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([])
    const YOUR_APP_ID = "3ddb29c2";
    const YOUR_APP_KEY = "5b233b72ebfc3ec50945a140d4f05ef9";

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
            .then((res) => {
                console.log(res.data)
                setData(res.data.hits)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div className='border w-full h-50 bg-red-500 flex'>
                <div className='h-full w-48'>
                    <img src={logo} />
                </div>
                <div>
                    <h1 className='text-4xl font-bold pl-24 pt-14'>Order karoooo</h1>
                </div>
                <form onSubmit={submitHandler}>
                    <div className='pl-48 pt-8 ' >
                        <input type='text' placeholder='Search for your Food' className='border-2'
                            value={search} onChange={changeHandler} />
                        <br></br>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-12">
                            Search
                        </button>

                    </div>
                </form>
            </div>
            {data.length >= 1 ? <Receipies data={data} /> : null}
        </>
    )
}


export default Header