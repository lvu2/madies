import React from 'react';
import "./index.scss";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ThirdSectionContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = { showText: 0};
		this.textNatural = null;
		this.textCrunch = null;
		this.textMadies = null;
		this.imgNatural = null;
		this.imgCrunch = null;
		this.imgMadies = null;

		this.setNaturalInputRef = element => {
	    	this.textNatural = element;
	    };
	    this.setCrunchInputRef = element => {
	    	this.textCrunch = element;
	    };
	    this.setMadiesInputRef = element => {
	    	this.textMadies = element;
	    };

	    this.setNaturalImgRef = element => {
	    	this.imgNatural = element;
	    };
	    this.setCrunchImgRef = element => {
	    	this.imgCrunch = element;
	    };
	    this.setMadiesImgRef = element => {
	    	this.imgMadies = element;
	    };
	}

	componentDidMount(){
		this.textCrunch.childNodes.forEach(child => {
			child.childNodes[0].className = "text-hide";
		});
		this.textMadies.childNodes.forEach(child => {
			child.childNodes[0].className = "text-hide";
		});
		this.imgCrunch.style.zIndex = 0;
		this.imgMadies.style.zIndex = 0;

		this.imgNatural.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
		this.imgCrunch.childNodes[0].childNodes[0].style.transform = "scale(0,0)";
		this.imgMadies.childNodes[0].childNodes[0].style.transform = "scale(0,0)";
		this.timerID = setInterval(
			() => this.rotate(),
			2000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	rotate = () => {
		this.setState( state =>({
			showText: (state.showText+1)%3
		}));
		if(this.state.showText === 0){
			this.textNatural.childNodes.forEach(child => {
				child.childNodes[0].className = "";
			});
			this.textMadies.childNodes.forEach(child => {
				child.childNodes[0].className = "text-hide";
			});
			this.imgNatural.style.zIndex = 2;
			this.imgCrunch.style.zIndex = 0;
			this.imgMadies.style.zIndex = 1;


			this.imgNatural.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
			this.imgCrunch.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
			this.imgMadies.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
		}else if(this.state.showText === 1){
			this.textNatural.childNodes.forEach(child => {
				child.childNodes[0].className = "text-hide";
			});
			this.textCrunch.childNodes.forEach(child => {
				child.childNodes[0].className = "";
			});
			this.imgNatural.style.zIndex = 1;
			this.imgCrunch.style.zIndex = 2;
			this.imgMadies.style.zIndex = 0;

			this.imgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
			this.imgCrunch.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
			this.imgMadies.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";

		}else{
			this.textCrunch.childNodes.forEach(child => {
				child.childNodes[0].className = "text-hide";
			});
			this.textMadies.childNodes.forEach(child => {
				child.childNodes[0].className = "";
			});
			this.imgNatural.style.zIndex = 0;
			this.imgCrunch.style.zIndex = 1;
			this.imgMadies.style.zIndex = 2;


			this.imgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
			this.imgCrunch.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
			this.imgMadies.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
		}
	}

	render() {
		return(
			<div className="third-section-container">
				<div className="third-section-foto-four-container" ref={this.setNaturalImgRef}>
					<div><img src={require('../../../media/Madies_Foto_04.jpeg')}/></div>
				</div>
				<div className="third-section-foto-five-container" ref={this.setCrunchImgRef}>
					<div><img src={require('../../../media/Madies_Foto_05.jpeg')}/></div>
				</div>
				<div className="third-section-foto-six-container" ref={this.setMadiesImgRef}>
					<div><img src={require('../../../media/Madies_Foto_06.jpeg')}/></div>
				</div>
				<div className="third-section-natural-container">
					<Container fluid className="third-section-natural-text" ref={this.setNaturalInputRef}>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) 0s"}}>natural</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .05s"}}>natural</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .1s"}}>natural</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .15s"}}>natural</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .2s"}}>natural</span></Row>
					</Container>
				</div>
				<div className="third-section-crunch-container">
					<Container fluid className="third-section-crunch-text" ref={this.setCrunchInputRef}>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) 0s"}}>crunch</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .05s"}}>crunch</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .1s"}}>crunch</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .15s"}}>crunch</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .2s"}}>crunch</span></Row>
					</Container>
				</div>
				<div className="third-section-madies-container">
					<Container fluid className="third-section-madies-text" ref={this.setMadiesInputRef}>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) 0s"}}>madies</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .05s"}}>madies</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .1s"}}>madies</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .15s"}}>madies</span></Row>
						<Row><span style={{transition: "all .7s cubic-bezier(0.3, 0, 0.2, 1) .2s"}}>madies</span></Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default ThirdSectionContainer;