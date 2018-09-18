import ReactDOM from 'react-dom';


var TeamComponent = React.createClass({
  render: function(){
    var team = this.props.items;

    return (
      <section className="team">
        <div className="content-section projects-section">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
              <h2 className="text-center">Meet the Team</h2>

                <div className="row">

                  { team.map(function(member, i){
                    return (

                    <div key={"member_"+i} className="col-md-6">
                      <div className="middle about-text"> 
                        <img src={ member.image } className="img-thumbnail team-img"/>
                        <div className="caption">
                          <h3 className="middle">{member.name}</h3>
                          <b className="middle">{member.title}</b>

                          { member.summary.map(function(summary, i){
                            return (<p key={"summary_"+i} className="detail">{summary}</p>)
                          })}

                          
                          <ul className="social-list">
                            {member.social.twitter ? <li className="twitter"><a href={member.social.twitter}><i className="fa fa-twitter"></i></a></li>: null }
                            {member.social.linkedin ? <li className="linkedin"><a href={member.social.linkedin}><i className="fa fa-linkedin"></i></a></li>: null }
                          </ul>


                        </div>
                      </div>
                    </div>

                    )
                  })}
                </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
});


if (info.team){
  ReactDOM.render(<TeamComponent items={info.team}/>, document.getElementById('team'));
}
