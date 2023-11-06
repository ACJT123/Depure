

function ServicesCard({ icon, title, description }) {
    return (
        <div className="services-card p-2">
            <div className="services-card__icon">
                <img src={icon} alt={title} style={{
                    borderRadius: '50%',
                    width: '250px',
                    height: '250px',
                    margin: '1em 5em',
                }} />
            </div>
            <div className="services-card__title text-center" style={{
                color: 'rgb(186, 39, 38)',
                fontWeight: '400'
            }}>
                {title}
            </div>
            {/* <div className="services-card__description">{description}</div> */}
        </div>
    );
}

export default ServicesCard;