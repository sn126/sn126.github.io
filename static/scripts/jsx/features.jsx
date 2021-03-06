import ReactDOM from 'react-dom';


var FeaturesComponent = React.createClass({
  render : function(){

    return (
      <section id="features" className="content-section">
        <div className="text-center">
          <div className="container">
            <div className="section-title center">
              <h2>Features</h2>
            </div>
            <div className="space"></div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="feature"> <i className="fa fa-bar-chart"></i>
                  <h3>Analytics</h3>
                  <p>Persistance support and diffy report generation</p>
                </div>
              </div>
              <div className="separator col-md-3 col-sm-6">
                <div className="feature"> <i className="fa fa-puzzle-piece"></i>
                  <h3>Plugins</h3>
                  <p>Support for other popular protocols. <a href="mailto:info@diffy.ai?subject=Request for custom protocol support">Contact us</a> for custom protocol support!</p>
                </div>
              </div>
              <div className="separator col-md-3 col-sm-6">
                <div className="feature"> <i className="fa fa-graduation-cap"></i>
                  <h3>Intelligence</h3>
                  <p>Smarter (AI powered) noise cancellation</p>
                </div>
              </div>
              <div className="separator col-md-3 col-sm-6">
                <div className="feature"><i className="fa fa-check-circle-o "></i>
                  <h3>Compliance</h3>
                  <p>Scrubbing support for PII data</p>
                </div>
              </div>
            </div>
            <div className="space"></div>
          </div>
        </div>
      </section>
    )
  }
});


ReactDOM.render(<FeaturesComponent items={info.services}/>, document.getElementById('features'));
