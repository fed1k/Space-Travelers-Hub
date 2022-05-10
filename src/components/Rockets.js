import React from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const data = useSelector((state) => (state));
  //   console.log(data);
  //   console.log(data[0]);
  //   data.map((i) => (console.log(i)));
  //   Array.from(data).forEach((element) => {
  //     console.log(element);
  //   });
  //   console.log(data);
  return (
    <section className="main-rocket-div">
      {data.map((rocket) => (
        <div key={rocket.id} className="rocket-divider">
          <img className="rocket-images" src={rocket.flickr_images[0]} alt="Images" />
          <div>
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rocket;
