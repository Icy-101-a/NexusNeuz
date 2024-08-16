import React, { useEffect, useState } from 'react';
import Card from './Card';
const Newsapp = ({ search, theme }) => {
    const [newsData, setNewsData] = useState(null);

    // Fetch news data
    const getData = async () => {
        if (!search) return; // Avoid fetch if search is empty
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0, 10);
        setNewsData(dt);
    };

    useEffect(() => {
        getData();
    }, [search]);

    return (
        <div className={'h-full flex justify-center items-center text-white'}>
            <div className=''>
                {newsData ? <Card data={newsData} theme={theme} /> : <p className="m-3 p-3">No news available. Look through some</p>}
            </div>
        </div>
    );
};

export default Newsapp;
