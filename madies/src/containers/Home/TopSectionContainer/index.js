import React from 'react';
import "./index.scss";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from "../../../media/MadiesLogo.svg";

class TopBanner extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
				<Container fluid className="top-section-text-container">
					<Row className="top-text">
						<Col className="top-text-column-one" ><span><img src={logo}/></span></Col>
						<Col className="top-text-column-two" ><span>Qué Gusto</span></Col>
						<Col className="top-text-column-three" ><div><span className="esp" id={"esp"} onClick={this.props.handleClick}>Esp</span><span> / </span><span className="eng" id={"eng"} onClick={this.props.handleClick}>Eng</span></div></Col>
					</Row>
					<Row className="middle-text">
						<Row><span>{this.props.topText}</span></Row>
						<Row><span style={{marginTop: "-8vw"}}>{this.props.middleText}</span></Row>
					</Row>
					<Row className="bottom-text">
						<Col className="top-banner-text" style={{zIndex: "1"}}><span>{this.props.bottomText}</span></Col>
					</Row>
					<span className="circle-container"><span className="yellow-circle" /><span className="green-half-circle" /></span>
				<img style={{position: "absolute", top: "25vw", width: "40%", right: "0px"}} src={require('../../../media/Madies_Foto_01.jpeg')}/>
				</Container>	
		);
	}
}

class TopSectionContainer extends React.Component{
	constructor(props){
		super(props);
		
	}
	
	render() {
		return(
			<div className="top-section-container">
				<TopBanner handleClick={this.props.handleClick} topText={this.props.dat.top_text} middleText={this.props.dat.middle_text} bottomText={this.props.dat.bottom_text}/>
			</div>
		);
	}
}

export default TopSectionContainer;