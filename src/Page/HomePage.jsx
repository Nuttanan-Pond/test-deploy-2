import axios from 'axios';
import { React, useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

//components
import FavPoke from '../components/FavPoke';

function HomePage() {
    const [poke, setPoke] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [number, setNumber] = useState(1);
    const [fav, setFav] = useState([]);

    useEffect(() => {
        let abortController = new AbortController();

        const loadPoke = async () => {
            try {
                setLoading(true);
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
                    signal: abortController.signal
                });
                setPoke(response.data);
                setError("");

            } catch (error) {
                setError("Something went wrong", error);

            } finally {
                setLoading(false);
            }
        }
        loadPoke();

        return () => abortController.abort();
    }, [number]);
    console.log(poke);

    const prevPoke = () => {
        setNumber((number) => number - 1);
    }
    const nextPoke = () => {
        setNumber((number) => number + 1);
    }
    const addFav = () => {
        setFav((oldState) => [...oldState, poke]);
    }

    return (
        <div className="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className='text-left text-3xl'>HomePage</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='text-center'>
                    {loading ? 
                    <ReactLoading type='spin' color='black' height={'20%'} width={'20%'} />
                    :
                    <>
                        <h2 className='text-3xl font-black'>{poke?.name}</h2>
                        <br />
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            onClick={addFav}>Add to Favourit</button>
                        <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
                        <ul>
                            {poke?.abilities?.map((abil, index) => (
                                <li key={index}>{abil.ability?.name}</li>
                            ))}
                        </ul>
                        <br />
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            onClick={prevPoke}>Previous</button>
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            onClick={nextPoke}>Next</button>
                    </>}
                </div>
                <div className='text-center'>
                    <h2 className='font-medium'>Your favourite pokemon</h2>
                    {fav.length > 0 ? <FavPoke fav={fav} /> : <div className='flex h-full justify-center items-center'><p>No favourite pokemon...</p></div>}
                </div>
            </div>
        </div>
    )
}

export default HomePage;