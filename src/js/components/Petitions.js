var React = require('react');
var Link = require('react-router').Link;
// required for ajax calls
var axios = require('axios');
import { withRouter } from 'react-router';


// Petition constructor
var Petitions = React.createClass({
  
  
//BELOW IS JUST FOR REFERENCE, IT'S THE MODIFIED CODE BASED ON THE 'BILLS' PAGE. THE ONLY THING DIFFERENT IS THAT bills HAVE BEEN REPLACED WITH petitions. 
/*
  render: function() {
    return (
      <div>
        <h2>{this.props.petitionId} <span className="result">{this.props.result}</span></h2>
        <h4>{this.props.petitionTitle}</h4>
      </div>
    );
  }
});


// Petition constructor
var Petitions = React.createClass({
  getInitialState: function() {
    // set inital state to determine which list of petitions is displayed - active by default
    // ** need to fix my logic because it's always reverting to /active!
    return {
      petitionList: [],
    };
  },
  componentDidMount: function() {
    this.loadData();
  },
  componentDidUpdate: function(prevProps) {
    if(prevProps.params.filter !== this.props.params.filter) {
      this.loadData();
    }
  },
  loadData: function() {
    var that = this;
    // set filter as url parameter
    var filter = this.props.params.filter;
    
    // post filter to server and this.setState({petitionList: response.data})
    this.setState({loading: true});
    axios.post('/postfilter', {
      filter: filter
    })
    .then(function(response) {
      that.setState({petitionList: response.data, loading: false});
    })
    .catch(function(response) {
      console.log(response, 'response');
    });
  },
  renderPetitions: function(petition) {
    return (
      <li key={petition.petitionId}>
        <Petition petitionTitle={petition.petitionTitle} petitionId={petition.petitionId} result={petition.result}/>
      </li>
    );
  },
*/

  render: function() {
    return (
      <div className="petitionsPage">
          <h3>Below are petitions proposed by the public.</h3>
          <p>You can agree/disagree, or <Link activeClassName="active" to ="/petitionform">create your own petition</Link>. Once a petition has 100 people agreeing with it, it gets sent to your representative.</p>
          
          {/*<div className="searchbox">
            <input ref="search" className="searchinput " type="text" name="search" maxLength="20" placeholder="Search for petition by word, eg daycare, streets..." />
            </div>*/} 
          
          <div className="filters">
              <div><Link activeClassName="active" to="/petitions/active">new</Link></div>
              <div><Link activeClassName="active" to="/petitions/hot">hot</Link></div>
              <div><Link activeClassName="active" to="/petitions/passed">sent</Link></div>
              <div><Link activeClassName="active" to="/petitions/failed">failed</Link></div>
              <div><Link activeClassName="active" to="/petitions/mine">mine</Link></div>
              <div><Link activeClassName="active" to="/petitions/all">all</Link></div>
          </div>
          
          <div className="list">
          <div className="listedItem">
         <Link to="/petition">
         <h4><b>e-119</b></h4>
          <h4>keywords: Citizenship, Immigration, Adoption</h4>
         <h5>Canadian citizenship</h5>
         </Link>
         </div>
        <div className="listedItem">
         <Link to="/petition2">
         <h4><b>e-270</b></h4>
        <h4>keywords: Atlantic salmon, Retaining ponds, Water quality</h4>
        <h5>Aquaculture</h5>
        </Link>
        </div>
        <div className="listedItem">
         <Link to="/petition3">
         <h4><b>e-263</b></h4>
        <h4>keywords: Freedom, Hospitals, Medical assistance in dying, Mental health, Young people</h4>
         <h5>Assisted Suicide</h5>
         </Link>
        </div>
        <div className="listedItem">
         <Link to="/petition4">
         <h4><b>e-337</b></h4>
          <h4>keywords: Bank of Canada, Government borrowing, Interest rates</h4>
          <h5>Bank of Canada</h5>
         </Link>
         </div>
          <div className="listedItem">
         <Link to="/petition5">
         <h4><b>e-18</b></h4>
        <h4>keywords: Decriminalization, Marijuana, Possession of a controlled substance</h4>
         <h5> Cannabis </h5>
         </Link>
          </div>
          </div>
            <div className="actionButton petitions">
            <Link activeClassName="active" to ="/petitionform">New</Link>
            </div>
          
        {/*  
        <div className="petitionList">
            {this.state.loading ? <p>Please wait while we find all petitions...</p> : null}
            <div>
              {this.state.petitionList !== [] ? this.state.petitionList.map(this.renderPetitions) : 'We will have more filters coming soon'}
            </div>
        </div> 
        */}
          
     </div>
    );
  }
});

module.exports = Petitions;



