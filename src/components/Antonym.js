import React from 'react';

const Antonym = ({ mean }) => {
    const getAntonyms = (mean) => {
        const antonyms = [];
        mean.forEach((val) => {
            val.meanings.forEach((means) => {
                if (means.antonyms && means.antonyms.length > 0) {
                    antonyms.push(...means.antonyms);
                }
            });
        });
        return antonyms;
    };

    const antonyms = getAntonyms(mean);

    if (antonyms.length === 0) {
        return <p>No antonyms found.</p>;
    }

    return (
        <div className="columns-2 md:columns-3">
                {antonyms.map((ant, index) => (
                    <li key={index}>{ant}</li>
                ))}    
        </div>
    );
};

export default Antonym;
