const avengers = [
    { id: 101, name: 'Iron Man', rating: 10 },
    { id: 201, name: 'Captain America', rating: 10 },
    { id: 301, name: 'Thor', rating: 9 }
];

export default function MyApp() {
    return (
        <div className="avengers">
            <h3>Avengers</h3>
            <AvengersList avengersList={avengers} />
        </div>
    );
}

function AvengersList({ avengersList }) {
    if(!avengersList) {
        return null;
    }
    return (
        <div className="avengersList">
            <h3>Avengers List</h3>
            {
                avengersList.map(avenger => (
                    <Avenger key={avenger.id} avenger={avenger} />                    
                ))
            }
        </div>        
    );
}


function Avenger({ avenger }) {
    return (
        <p>{avenger.name} has rating of {avenger.rating}</p>
    );
}