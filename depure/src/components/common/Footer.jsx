import '../../assets/css/components/common/Footer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SocialIcon } from 'react-social-icons'

function Footer() {

    const iconUrls = [
        {
            url: "https://twitter.com"
        },
        {
            url: "https://www.facebook.com/profile.php?id=100063606250461"
        },
        {
            url: "https://wechat.com"
        },
        {
            url: "https://instagram.com"
        },
        {
            url: "https://whatsapp.com"
        }
    ];

    return (
        <div className='footer'>
            <div className='business-section'>
                <img src='./src/assets/img/logo-tp.png' style={{
                    width: "6em",
                    height: "2em"
                }} />
                <div style={{ marginTop: "1em" }}>
                    We believe that self-care is a vital part of a balanced lifestyle, and we're here to help you achieve glowing, radiant skin.
                    <br />
                    <br />
                    <h5>019-123-1231</h5>
                    <br />
                    <a href="mailto:abc@example.com">depure@gmail.com</a>
                </div>
            </div>
            <div className='nav-section'>
                <h4>
                    Navigation
                </h4>
                <div style={{ marginTop: "1em" }}>
                    <ul>Home</ul>
                    <ul>Services</ul>
                    <ul>Products</ul>
                    <ul>About Us</ul>
                </div>
            </div>
            <div className='newsletter-section'>
                <h4>
                    Subscribe newsletter
                </h4>
                <div style={{ marginTop: "1em" }}>
                    Subscribe to our newsletter to get updates about our services and offers.
                    <InputGroup className="mb-3 mt-3">
                        <Form.Control
                            placeholder="Email Address"
                            aria-label="Email Address"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" style={{
                            backgroundColor: "rgb(186, 39, 38)",
                            color: "white"
                        }}>
                            Subscribe
                        </Button>
                    </InputGroup>

                    <div>
                        {iconUrls.map((icon, index) => (
                            <SocialIcon key={index} url={icon.url} bgColor='rgb(186, 39, 38)' style={{
                                width: '3em', height: '3em', margin: '0.5em 0.5em'
                            }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
