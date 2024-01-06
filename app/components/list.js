import getData from "../../lib/fetch_data";

async function ItemList() {

    const data = await getData();

    const groupedData = data.reduce((acc, country) => {
        const continentCode = country.continent.code;
        if (!acc[continentCode]) {
            acc[continentCode] = [];
        }
        acc[continentCode].push(country);
        return acc;
    }, {});

    return (
        <div className="flex flex-col w-full gap-4 h-full">
            {Object.keys(groupedData).map(continentCode => (
                <div className="flex flex-col gap-2" key={continentCode}>
                    <h2 className="font-bold text-primary text-2xl text-center">{continentCode}</h2>
                    <div className="w-full flex flex-row flex-wrap justify-center gap-4 border rounded-md bg-neutral p-2 border-neutral">
                        {groupedData[continentCode].map(country => (
                            <div className="card w-[20%] bg-base-100 shadow-xl" key={country.code}>
                                <div className="card-body">
                                    <h2 className="card-title">{country.name}</h2>
                                    <div className="divider divider-accent"></div>
                                    <p>{country.code} - {country.emoji}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;