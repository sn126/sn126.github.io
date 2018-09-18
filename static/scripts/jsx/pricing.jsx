import ReactDOM from 'react-dom';



var PricingComponent = React.createClass({
  render : function(){

    return (
      <section className="pricing" className="content-section">
        <div>
          <div className="container">
            <div className="section-title text-center center">
              <h2>Plans</h2>
              <div className="clearfix"></div>
            </div>
            <div className="row">

              <div className="card col-md-4">
                <h4><b>Self Hosted</b></h4>
                <div className="container">
                  <p className="price">&nbsp;</p>
                  <ul>
                    <li>Grab the source from <a href="https://github.com/opendiffy/diffy">Github</a></li>
                    <li>Configure, Compile and Run!</li>
                    <li>You maintain your infrastructure</li>
                  </ul>
                  <a href="https://github.com/opendiffy/diffy" className="btn btn-default">View Source</a>
                </div>
              </div>

              <div className="card col-md-4">
                <h4><b>Pilot</b></h4>
                <div className="container">
                  <p className="price">&nbsp;</p>
                  <ul>
                    <li>Diffy provided as a hosted service</li>
                    <li>Use the admin console to configure Diffy</li>
                    <li>Out of the box analytics support</li>
                  </ul>
                  <a href="mailto:info@diffy.ai?subject=Interested in a Pilot" className="btn btn-default">Request a demo</a>
                </div>
              </div>

              <div className="card col-md-4">
                <h4><b>Growth</b></h4>
                <div className="container">
                  <p className="price">&nbsp;</p>
                  <ul>
                    <li>All features from the Pilot package</li>
                    <li>Auto scaling of Diffy instances</li>
                  </ul>
                  <a href="mailto:info@diffy.ai?subject=Requesting a Demo!" className="btn btn-default">Request a Demo</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
});


ReactDOM.render(<PricingComponent items={info.experience} />, document.getElementById('pricing'));
