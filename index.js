const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="box-decoration">
      <div className="profile-image">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      </div>
      <p>Kiran V</p>
      <p>Vishnu Institute of Computer Education and Technology,Bhimavaram</p>
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
