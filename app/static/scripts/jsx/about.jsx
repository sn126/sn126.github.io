import ReactDOM from 'react-dom';

/* About */
var AboutComponent = React.createClass({
  render: function(){
    return (
        <section className="content-section text-center about">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">

              <h2>About Diffy</h2>
              <p>
              <a href="https://github.com/opendiffy/diffy">Diffy</a> finds potential bugs in your service using running instances of your new code and your old code side by side. Diffy behaves as a proxy and multicasts whatever requests it receives to each of the running instances. It then compares the responses, and reports any regressions that may surface from those comparisons. 
              </p>

              <p>
              The premise for Diffy is that if two implementations of the service return “similar” responses for a sufficiently large and diverse set of requests, then the two implementations can be treated as equivalent and the newer implementation is regression-free. 
              </p>

              <br />
            
              <div class="row">
              
                <h4>How does it work?</h4>
                <p>Diffy acts as a proxy that accepts requests drawn from any source that you provide and multicasts each of those requests to three different service instances:</p>
                <ul>
                  <li>A candidate instance running your new code</li>
                  <li>A primary instance running your last known-good code</li>
                  <li>A secondary instance running the same known-good code as the primary instance</li>
                </ul>

                <div class="col-md-12"><a href="https://github.com/opendiffy/diffy"><img src="static/images/diffy-explained.png" class="img-responsive"/></a></div>

                <p>As Diffy receives a request, it multicasts the traffic to your candidate, primary, and secondary instances. When those services send responses back, Diffy compares those responses and looks for:</p>

                <ul>
                  <li>Raw differences observed between the candidate and primary instances.</li>
                  <li>Non-deterministic noise observed between the primary and secondary instances. Since both of these instances are running known-good code, you should expect responses to be in agreement. If not, your service may have non-deterministic behavior, which is to be expected. </li>
                </ul>
              
              </div>

              <br />

              <p>
              For a more details checkout this <a href="https://blog.twitter.com/engineering/en_us/a/2015/diffy-testing-services-without-writing-tests.html">blogpost</a> or watch the diffy presentation below
              </p>

              <iframe width="560" height="315" src="https://www.youtube.com/embed/4KJKMDrPeJw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            </div>
          </div>
        </section>
    )
  }
});


ReactDOM.render(<AboutComponent />, document.getElementById('about'));
