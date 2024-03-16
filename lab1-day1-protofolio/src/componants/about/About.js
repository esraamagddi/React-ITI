import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://i.pinimg.com/236x/c0/fd/82/c0fd8281516fa45ccefcd694d98e36b2.jpg"
            className="img-fluid rounded"
            alt="About Us Image"
          />
        </div>
        <div className="col-md-6 text-dark">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus vel leo fringilla dignissim. Proin venenatis bibendum justo eu ultrices. Integer auctor, augue id interdum condimentum, ligula lectus efficitur nulla, vel cursus purus orci a erat.
          </p>
          <p>
            Nullam vulputate justo et lectus tincidunt, id aliquet urna ultricies. Vivamus tincidunt justo at mi volutpat, vel efficitur dui euismod. In hac habitasse platea dictumst. Etiam ac mauris sed purus facilisis euismod non nec ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
