import React from 'react';

const Card = ({ data, theme }) => {
    console.log(data);

    const readMore = (url) => {
        window.open(url);
    };

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 m-2">
            {data.map((curItem, index) => (
                <div key={index} className={`flex flex-col w-full max-w-[300px] h-auto bg-white rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}>
                    <img className='w-full h-[150px] object-cover rounded-t-xl' src={curItem.urlToImage} alt={curItem.title} />
                    <div className='flex-grow p-4'>
                        <p className='font-semibold text-base mb-2'>{curItem.title}</p>
                        <p className='text-sm mb-2'>{curItem.description}</p>
                    </div>
                    <div className='p-4 flex justify-end'>
                        <button className='bg-purple-600 border-none w-[80px] h-[28px] text-white text-xs rounded hover:bg-purple-700' onClick={() => readMore(curItem.url)}>Read More</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
