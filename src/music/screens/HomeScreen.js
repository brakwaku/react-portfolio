import React from 'react';

const HomeScreen = () => {
  return (
    <div>
      <main>
        {/* Banner */}
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>Welcome</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              semper enim elit, id posuere mauris congue eget. Morbi tincidunt
              urna ac velit consequat, sit amet finibus metus sollicitudin.
              Nullam faucibus ipsum quis ex tristique, a posuere urna maximus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec mollis, felis vel vestibulum
              hendrerit, elit risus volutpat elit, non sagittis odio ante
              euismod ante.
            </p>
            <button className='btn btn-primary btn-lg mt-4'>
              Explore Music
            </button>
          </div>
        </div>


      <div className="container mb-5">
        <h2 className="mb-4">Latest Music</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Song Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper enim elit, id posuere mauris congue eget. Morbi tincidunt urna ac velit consequat, sit amet finibus metus sollicitudin.</p>
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3"></div>
        </div>
        </div>

        <section>
          <h2>Upcoming Shows</h2>
          <ul>
            <li>
              <h3>Show 1</h3>
              <p>Date: March 1, 2023</p>
              <p>Location: New York, NY</p>
            </li>
            <li>
              <h3>Show 2</h3>
              <p>Date: March 15, 2023</p>
              <p>Location: Los Angeles, CA</p>
            </li>
            <li>
              <h3>Show 3</h3>
              <p>Date: March 30, 2023</p>
              <p>Location: Chicago, IL</p>
            </li>
          </ul>
          <button type='button' className='btn btn-outline-info'>
            See All Shows
          </button>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 BraKwaku Jr</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
