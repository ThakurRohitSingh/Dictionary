import React from 'react';

const Synonym = ({ mean }) => {
    const getSynonyms = (mean) => {
        const synonyms = [];
        mean.forEach((val) => {
            val.meanings.forEach((means) => {
                if (means.synonyms && means.synonyms.length > 0) {
                    synonyms.push(...means.synonyms);
                }
            });
        });
        return synonyms;
    };

    const synonyms = getSynonyms(mean);

    if (synonyms.length === 0) {
        return <p>No synonyms found.</p>;
    }

    return (
        <div className="columns-2 md:columns-3">
                {synonyms.map((syn, index) => (
                    <li key={index}>{syn}</li>
                ))}
        </div>
    );
};

export default Synonym;
