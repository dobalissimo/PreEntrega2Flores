import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/', icon: 'https://firebasestorage.googleapis.com/v0/b/bourdeaux-926ac.appspot.com/o/img%2Ficonos%2Ffacebook.png?alt=media&token=3ef80104-5548-430b-b745-fb8f8387b6b7&_gl=1*1shh3g2*_ga*MTEwMjcxNjMxNi4xNjk1MjUzNDgz*_ga_CW55HF8NVT*MTY5NjYxNDA2MC4zLjEuMTY5NjYxNTI4Mi42MC4wLjA.' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'https://firebasestorage.googleapis.com/v0/b/bourdeaux-926ac.appspot.com/o/img%2Ficonos%2Ftwitter.png?alt=media&token=84a93239-1a80-4a95-a9f4-b8a09d7fb234&_gl=1*53yqw6*_ga*MTEwMjcxNjMxNi4xNjk1MjUzNDgz*_ga_CW55HF8NVT*MTY5NjYxNDA2MC4zLjEuMTY5NjYxNTMwOS4zMy4wLjA.' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'https://firebasestorage.googleapis.com/v0/b/bourdeaux-926ac.appspot.com/o/img%2Ficonos%2Finstagram.png?alt=media&token=c6343a14-560a-4d2f-b72d-b2ee3c9f07b8&_gl=1*13kl436*_ga*MTEwMjcxNjMxNi4xNjk1MjUzNDgz*_ga_CW55HF8NVT*MTY5NjYxNDA2MC4zLjEuMTY5NjYxNTM0NC42MC4wLjA.' },
  ];

  return (
    <footer className="center">
      <a href="index.html">
        <img src="https://firebasestorage.googleapis.com/v0/b/bourdeaux-926ac.appspot.com/o/img%2Fpng%2Flogo-white.png?alt=media&token=65957b72-f51c-4fb4-b7e3-8a3f61473722&_gl=1*dbkbml*_ga*MTEwMjcxNjMxNi4xNjk1MjUzNDgz*_ga_CW55HF8NVT*MTY5NjYxNDA2MC4zLjEuMTY5NjYxNTY0MS4xMy4wLjA." alt="Logo de Bourdeaux" className="logo" />
        <br />
      </a>
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank">
          <img src={link.icon} alt={`Nuestro ${link.name}`} className="icono" />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
