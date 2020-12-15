import './App.css';

function App(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{props.Hora1}</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{props.Hora0}</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{props.minuto1}</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{props.minuto0}</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{props.segundo1}</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{props.segundo0}</h5>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
