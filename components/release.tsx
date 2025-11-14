type ReleaseProps = {
    version: string;
    releaseDate: string;
    requirements: string;
    changes: string[];
};

export function Release({
    version,
    releaseDate,
    requirements,
    changes
}: ReleaseProps) {
    return (
        <>
            <h2 className="text-2xl font-semibold mt-8">Version {version}</h2>
            <p className="text-gray-500"><small>Released on {releaseDate}</small></p>
            <p className="text-gray-500"><small>Requires {requirements}</small></p>
            {changes.length == 1 ? (
                changes.map((change, index) => (
                    <p className="mt-2" key={index}>{change}</p>
                ))
            ) : (
                <ul className="list-disc list-inside mt-2 space-y-1">
                    {changes.map((change, index) => (
                        <li key={index}>{change}</li>
                    ))}
                </ul>
            )
            }
        </>
    );
}
