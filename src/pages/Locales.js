import React from 'react';

const LocationCard = ({ name, address, phone, mapUrl }) => {
    return (
      <div className="card col-sm-12 col-md-6 col-lg-3">
        <iframe
          title={`Location Map: ${name}`} // Add a unique title
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{address}</p>
          <a href={`tel:${phone}`} className="btn btn-success">
            TEL: {phone}
          </a>
        </div>
      </div>
    );
  };
  

const locations = [
  {
    name: 'Moron',
    address: 'Bartolome Mitre 724',
    phone: '2259-1855',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6564.143698137955!2d-58.619302673963816!3d-34.65288837178689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc766f69d4def%3A0x803d4b81f7644c00!2sThe%20Laundry%20Garage!5e0!3m2!1ses!2sar!4v1680296670997!5m2!1ses!2sar',
  },
  {
    name: 'Santos Lugares',
    address: 'Rodríguez Peña 1493',
    phone: '4757-9598',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.945021564887!2d-58.5435728!3d-34.5981869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb77dca39b35d%3A0x36149dcdad56b540!2sSantos%20Barriles!5e0!3m2!1ses!2sar!4v1677957996108!5m2!1ses!2sar',
  },
  {
    name: 'Castelar',
    address: 'Santa Rosa 1037',
    phone: '15-3847-4312',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2986208874195!2d-58.65969504952231!3d-34.647160667208425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf5a990cb90d%3A0xa8301d6a825dda7a!2sThe%20Laundry!5e0!3m2!1ses!2sar!4v1680296782084!5m2!1ses!2sar',
  },
  {
    name: 'Palermo',
    address: 'Del Libertador 4625',
    phone: '4776-4100',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13142.105359486028!2d-58.4323658!3d-34.5655463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5bbbb6c68b1%3A0xf0b7e65c66da69f7!2sKansas!5e0!3m2!1ses!2sar!4v1677957867812!5m2!1ses!2sar',
  },
];

const LocalesPage = () => {
  return (
    <div>
    
      <main className="container-fluid py-3">
        <h1 className="text-center mb-5">¿Dónde podés disfrutar nuestras cervezas?</h1>
        <section className="row center">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </section>
      </main>

      
    </div>
  );
};

export default LocalesPage;
