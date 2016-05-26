var React = require('react');
//var Link = require('react-router').Link;
// required for ajax calls
var axios = require('axios');


var Bill = React.createClass({
  getInitialState: function() {
    // set inital state as an empty object, to be populated with bill info on componentDidMount
    return {
      bill: {
        id: "**C-14**",
        title: "**An Act to amend the Criminal Code and to make related amendments to other Acts (medical assistance in dying)**",
        summary: "**This enactment amends the Criminal Code to, among other things, (a) create exemptions from the offences of culpable homicide, of aiding suicide and of administering a noxious thing, in order to permit medical practitioners and nurse practitioners to provide medical assistance in dying and to permit pharmacists and other persons to assist in the process; (b) specify the eligibility criteria and the safeguards that must be respected before medical assistance in dying may be provided to a person; (c) require that medical practitioners and nurse practitioners who receive requests for, and pharmacists who dispense substances in connection with the provision of, medical assist­ance in dying provide information for the purpose of permitting the monitoring of medical assistance in dying, and authorize the Minister of Health to make regulations respecting that information; and (d) create new offences for failing to comply with the safeguards, for forging or destroying documents related to medical assistance in dying, for failing to provide the required information and for contravening the regulations. This enactment also makes related amendments to other Acts to ensure that recourse to medical assistance in dying does not result in the loss of a pension under the Pension Act or benefits under the Canadian Forces Members and Veterans Re-establishment and Compensation Act. It amends the Corrections and Conditional Release Act to ensure that no investigation need be conducted under section 19 of that Act in the case of an inmate who receives medical assistance in dying. This enactment provides for one or more independent reviews relating to requests by mature minors for medical assistance in dying, to advance requests and to requests where mental illness is the sole underlying medical condition. Lastly, this enactment provides for a parliamentary review of its provisions and of the state of palliative care in Canada to commence at the start of the fifth year following the day on which it receives royal assent.", text: "Whereas the Parliament of Canada recognizes the autonomy of persons who have a grievous and irremediable medical condition that causes them enduring and intolerable suffering and who wish to seek medical assistance in dying; Whereas robust safeguards, reflecting the irrevocable nature of ending a life, are essential to prevent errors and abuse in the provision of medical assistance in dying; Whereas it is important to affirm the inherent and equal value of every person’s life and to avoid encouraging negative perceptions of the quality of life of persons who are elderly, ill or disabled; Whereas vulnerable persons must be protected from being induced, in moments of weakness, to end their lives; Whereas suicide is a significant public health issue that can have lasting and harmful effects on individuals, families and communities; Whereas, in light of the above considerations, permitting access to medical assistance in dying for competent adults whose deaths are reasonably foreseeable strikes the most appropriate balance between the autonomy of persons who seek medical assistance in dying, on one hand, and the interests of vulnerable persons in need of protection and those of society, on the other; Whereas it is desirable to have a consistent approach to medical assistance in dying across Canada, while recognizing the provinces’ jurisdiction over various matters related to medical assistance in dying, including the delivery of health care services and the regulation of health care professionals, as well as insurance contracts and coroners and medical examiners; Whereas persons who avail themselves of medical assistance in dying should be able to do so without adverse legal consequences for their families — including the loss of eligibility for benefits — that would result from their death; Whereas the Government of Canada has commit-ted to uphold the principles set out in the Canada Health Act — public administration, comprehensiveness, universality, portability and accessibility — with respect to medical assistance in dying; Whereas everyone has freedom of conscience and religion under section 2 of the Canadian Charter of Rights and Freedoms; Whereas nothing in this Act affects the guarantee of freedom of conscience and religion; Whereas the Government of Canada recognizes that in the living conditions of Canadians, there are diverse circumstances and that different groups have unique needs, it commits to working with provinces, territories and civil society to facilitate access to palliative and end-of-life care, care and services for individuals living with Alzheimer’s and dementia, appropriate mental health supports and services and culturally and spiritually appropriate end-of-life care for Indigenous patients; And whereas the Government of Canada has committed to develop non-legislative measures that would support the improvement of a full range of options for end-of-life care, respect the personal convictions of health care providers and explore other situations — each having unique implications — in which a person may seek access to medical assistance in dying, namely situations giving rise to requests by mature minors, advance requests and requests where mental illness is the sole underlying medical condition;... and loads more text**",
        status: "**Bill Not Active**",
        lastVote: "**Passed**",
        houseDebate: "**Lots of text**",
        proposedBy: "**Jody Wilson-Raybould**",
        repsVote: "**Didn't vote**",
        date: "**2016-05-12**"
      },
    };
  },
  // componentDidMount: function() {
  //   var that = this;
  //   // get bill info using id passed from previous screen
  //   var id = this.props.params.id;
  //   axios.post('/billinfoget', {
  //     id: id
  //   })
  //   // update this.state with the bill object
  //   .then(function(response) {
  //     var updateData = that.state.bill;
  //     updateData = response.data;
  //     that.setState({bill: updateData});
  //   })
  //   .catch(function(response) {
  //     console.log(response);
  //   });
  // },
  render: function() {
    return (

      <div>
        <div className="billInfo">
          <h3>What would you do?</h3>
          <h1>Bills</h1>
          <div className="billTags">
            <ul>
              <li>{this.state.bill.status}</li>
              <li>{this.state.bill.lastVote}</li>
              <li>{this.state.bill.proposedBy}</li>
            </ul>
          </div>
          <h2>{this.state.bill.id}</h2>
          <h2>My representative voted: {this.state.bill.repsVote}</h2>
        </div>

        <div className="billTabs">
          <ul className="tabs group">
            <li><a href="#box-one">TITLE</a></li>
            <li><a href="#box-two">SUMMARY</a></li>
            <li><a href="#box-three">FULL TEXT</a></li>
            <li><a href="#box-four">HOUSE DEBATE</a></li>
          </ul>

      		<div className="box-wrap">
        		<div id="box-one">
        		  <h3>{this.state.bill.title}</h3>
        		</div>
        		
        		<div id="box-two">
        		  <h3>{this.state.bill.summary}</h3>
        		</div>
        		
        		<div id="box-three">
        		  <h3>{this.state.bill.text}</h3>
        		</div>
        
            <div id="box-four">
        		  <h3>{this.state.bill.houseDebate}</h3>
        		</div>
        	</div>
        	
        </div>
        
        <div className="voteCompare">
          <div><p>**Whole Country**</p></div>
          <div><p>**Your Neighbours**</p></div>
        </div>

        <div className="vottingButtons">
          <div>
            <div className="arrow">
              <p>arrow</p>
            </div>
          </div>
          
          <div>
            <div>
        	  	<img className= "responsive-img" src="images/red button.png"></img>
            </div>
          </div>
          
          <div>
            <div>
          	 	<img className= "responsive-img" src="images/green button.png"></img>
            </div>
          </div>
          
          <div>
            <div className="arrow">
        			<p>arrow</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
});

module.exports = Bill;