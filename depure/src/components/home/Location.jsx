import GoogleMapReact from 'google-map-react';

function Location() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const locationProps = {
        center: {
            lat: 3.003939874012566,
            lng: 101.54018383068511
        },
        zoom: 11
    };
    return (
        <>
            <h1>
                Our Location
            </h1>
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={locationProps.center}
                    defaultZoom={locationProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>

    )
}

export default Location

