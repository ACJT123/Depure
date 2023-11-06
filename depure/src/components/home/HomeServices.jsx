import ServicesCard from './Services/ServicesCard'
import '../../assets/css/components/home/HomeServices.css'

function HomeServices(){

    const services = [
        {
          id: 1,
          icon: './src/assets/img/facialServices/service1.jpg',
          title: 'Facial Cleansing',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.',
        },
        {
          id: 2,
          icon: './src/assets/img/facialServices/service2.jpg',
          title: 'Anti-Aging Treatments',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.',
        },
        {
          id: 3,
          icon: './src/assets/img/facialServices/service3.jpg',
          title: 'Acne Treatment',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.',
        },
        {
          id: 4,
          icon: './src/assets/img/facialServices/service4.jpg',
          title: 'Skin Rejuvenation',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.',
        },
        {
          id: 5,
          icon: './src/assets/img/facialServices/service5.jpg',
          title: 'Facial Peels',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.',
        },
        {
          id: 6,
          icon: './src/assets/img/facialServices/service6.jpg',
          title: 'Hydration Treatments',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.',
        },
    ];
      
    return(
        <div className='homeServicecard container'>
            <h1 className='text-center p-3'>Services</h1>
            <div className='d-flex overflow-auto flex-nowrap'>
                {services.map((service) => (
                    <ServicesCard 
                        key={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>


    )
}

export default HomeServices;