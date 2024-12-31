import React, { useState } from 'react';
import { findShortestPathWithColors } from '../constants/pathFinder';
import stationsData from "../data/metro-stations/stations.json"
import { MoveRight } from 'lucide-react';
import { Waypoints } from 'lucide-react';
import RouteDisplay from '../components/RouteDisplay';




const FindRoute = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [path, setPath] = useState(null);
    const [error, setError] = useState('');
    const [suggestions, setSuggestions] = useState({ source: [], destination: [] })

    //filter suggestion based on input
    const handleInputChange = (value, type) => {
        if (type === 'source') {
            setSource(value);
            setSuggestions({
                ...suggestions,
                source: value ? stationsData.filter((station) =>
                    station.value.toLowerCase().includes(value.toLowerCase())
                ).slice(0, 5) : [],
            });
        } else if (type === 'destination') {
            setDestination(value);
            setSuggestions({
                ...suggestions,
                destination: value ? stationsData.filter((station) =>
                    station.value.toLowerCase().includes(value.toLowerCase())
                ).slice(0, 5) : [],
            });
        }
    };

    //put suggestion into the respected field
    const handleSuggestionClick = (station, type) => {
        if (type === 'source') {
            setSource(station.value);
            setSuggestions({ ...suggestions, source: [] });
        } else if (type === 'destination') {
            setDestination(station.value);
            setSuggestions({ ...suggestions, destination: [] });
        }
    };

    const handleFindRoute = () => {
        if (!source || !destination) {
            setError('Please enter both source and destination stations.');
            setPath(null);
            return;
        }
        const result = findShortestPathWithColors(source, destination);

        if (result) {
            setPath(result);
            setError('');
        } else {
            setError('No path could be found between the given stations.');
            setPath(null);
        }
        console.log(path);
    }


    //swapping sourch and destination
    const handleSwitch = () => {
        // alert("test");
        const temp = source;
        setSource(destination);
        setDestination(temp);
    }


    return (
        <div className='h-full w-full p-4'>
            {/* form component */}
            <div className="h-full w-full bg-gray-100 flex flex-col rounded-xl mb-10 py-4">
                {/* heading */}
                <h1 className='text-2xl font-bold text-center mb-6 text-black'>Select Your Source and Destination</h1>

                {/* form for input */}
                <div className="flex items-center justify-around">

                    {/* source input */}
                    <div className="from-control mb-4 w-[30%]">
                        <label htmlFor="sourceStation" className="label text text-slate-950">
                            Source Station
                        </label>
                        <input
                            id="sourceStation"
                            name="sourceStation"
                            type="text"
                            value={source}
                            onChange={(e) => handleInputChange(e.target.value, 'source')}
                            placeholder='Enter Source Station'
                            className='input input-bordered w-full'

                        />
                    </div>
                    {/* animated arrow */}

                    <MoveRight onClick={handleSwitch} size={50} color='black' />

                    {/* destination input */}
                    <div className="from-control mb-4 w-[30%]">
                        <label htmlFor="destinationStation" className="label text text-slate-950">
                            Destination Station
                        </label>                        <input
                            id="destinationStation"
                            name="destinationStation"
                            type="text"
                            value={destination}
                            onChange={(e) => handleInputChange(e.target.value, 'destination')}
                            placeholder='Enter Destination Station'
                            className='input input-bordered w-full'

                        />
                    </div>
                </div>

                {/* suggestions */}
                <div className="flex flex-col ">
                    <div>
                        {suggestions.source.length > 0 && (
                            <div>
                                <h1 className={`text-2xl font-bold text-center mb-6 text-black`}>
                                    Source Suggestions
                                </h1>
                                <ul className=" z-10 mt-1 bg-white border border-gray-700 w-[50%] rounded-md m-2 shadow-lg max-h-40 overflow-auto">
                                    {suggestions.source.map((station, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSuggestionClick(station, 'source')}
                                            className="p-2 text-slate-800 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {station.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {suggestions.destination.length > 0 && (
                            <div>
                                <h1 className={`text-2xl font-bold text-center mb-6 text-black`}>
                                    Destination Suggestions
                                </h1>
                                <ul className=" z-10 mt-1 bg-white border border-gray-200 w-full rounded-md shadow-lg max-h-40 overflow-auto">
                                    {suggestions.destination.map((station, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSuggestionClick(station, 'destination')}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {station.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* find route button */}
                <div className="flex justify-center">
                    <button onClick={handleFindRoute} className="btn btn-active btn-primary btn-wide text-2xl">Find Route <Waypoints /></button>
                </div>


            </div>
            {/* route display component */}
            <div className="h-full w-full bg-gray-100 flex flex-col  p-4 rounded-xl">
                <RouteDisplay path={path} />
            </div>
        </div>
    )
}

export default FindRoute
