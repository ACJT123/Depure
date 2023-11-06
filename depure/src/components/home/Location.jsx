import GoogleMapReact from 'google-map-react';
import '../../assets/css/components/home/Location.css'

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
            <h1 className='text-center p-3'>
                Find us at
            </h1>
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={locationProps.center}
                    defaultZoom={locationProps.zoom}
                >
                    <AnyReactComponent
                        lat={ 3.003939874012566}
                        lng={101.54018383068511}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>

    )
}

export default Location

