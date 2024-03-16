import React from 'react';
// import Button from '../../reusableComponants/button/Button';

function Card({ imageUrl, title, description }) {
  return (
    <div className="col-md-4 ">
      <div className="card" style={{ width: '18rem' }}>
        {/* <img src={imageUrl} className="card-img-top" alt={title + " Image"} /> */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* <Button/> */}
        </div>
      </div>
    </div>
  );
}

function SixCards() {
  return (
    <div className="container my-5 ">
      <div className="row">
        <Card
        //   imageUrl="https://i.pinimg.com/236x/51/1a/74/511a7467333910972ea81166ff40b95d.jpg"
          title="Service 1"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Card
        //   imageUrl="https://i.pinimg.com/236x/ea/1b/a4/ea1ba4b0fe9a8349ab373f05cac44671.jpg"
          title="Service 2"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Card
        //   imageUrl="https://i.pinimg.com/236x/15/20/b2/1520b25e509ef0c742551f7aa06a6356.jpg"
          title="Service 3"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
      </div>
    </div>
  );
}

export default SixCards;
