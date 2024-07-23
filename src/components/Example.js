const Example = ({ mean }) => {
    return (
        <div>
            {mean.map((val, index) =>
                val.meanings.map((means, i) =>
                    means.definitions.map((def, j) => (
                        def.example ? (
                            <div key={`${index}-${i}-${j}`}>
                                <li>{def.example}</li>
                            </div>
                        ) : null
                    ))
                )
            )}
        </div>
    );
};

export default Example;
