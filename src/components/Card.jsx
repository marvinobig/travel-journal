export default function Card(props) {
    return (
        <section className="card-container">
            <div className="card">
                <div className="image">
                <img src ={`../media/${props.img}`} alt="location" />
                </div>
                <div className="location-info">
                    <div className="maps">
                        <i className="material-icons position">room</i>
                        <p className="country">{props.country}</p>
                        <a className="map-link" href={props.map} alt="google map link to location" rel="noreferrer" target="_blank">View in maps</a>
                    </div>
                    <h1 className="title">{props.location}</h1>
                    <h4 className="date-of-travel">{props.date}</h4>
                    <p className="description">
                        {props.description}
                    </p>
                </div>
            </div>
        </section>
    )
}