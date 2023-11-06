import '../../assets/css/components/home/Highlights.css';
import { Button } from 'bootstrap';

function HighLights() {
    return (
        <div id='highlightContainer'>
            <div className='highlightsDescriptionContainer'>
                <h1
                    className='title'
                >
                    Experience Ageless Beauty with Our Signature Facials
                </h1>
                <p className='description'>
                    Book your appointment today and embark on a path to ageless, enduring beauty.
                </p>
                <div
                    className='mt-5'
                >
                    <button
                        className='bookNowBtn'
                    >
                        Book Now
                    </button>
                    <button
                        className='requestConsultationBtn'
                    >
                        Request a Consultation
                    </button>
                </div>
            </div>

            <img src='./src/assets/img/room2.jpg' className="room" />
        </div>
    )
}

export default HighLights;