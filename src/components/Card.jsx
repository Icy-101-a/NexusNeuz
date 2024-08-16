import React from 'react';

const Card = ({ data, theme }) => {
    console.log(data);

    const readMore = (url) => {
        window.open(url);
    };

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 m-2">
            {data.map((curItem, index) => (
                <div
                    key={index}
                    className={`flex flex-col w-full max-w-[300px] h-auto rounded-xl border-2 p-4 transition-all duration-300 ${
                        theme === 'light'
                            ? 'bg-gray-200 text-black border-gray-800'
                            : 'bg-gray-700 text-white border-gray-300'
                    }`}
                >
                    <img
                        className="w-full h-[150px] object-cover rounded-t-xl"
                        src={curItem.urlToImage}
                        alt={curItem.title}
                    />
                    <div className="flex-grow mt-4">
                        <p className="font-semibold text-base mb-2">{curItem.title}</p>
                        <p className="text-sm mb-4">{curItem.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className={`bg-purple-600 text-white text-xs rounded py-1 px-3 hover:bg-purple-700 transition-all duration-300`}
                            onClick={() => readMore(curItem.url)}
                        >
                            Read More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
