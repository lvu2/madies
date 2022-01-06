import React from 'react';
import "./index.scss";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mountain from "../../../media/Mountain.svg";

class SecondSectionContainer extends React.Component{
	constructor(props){
		super(props)
	}
	render() {
		return(
			<div className="second-section-container">
				<Container fluid className="second-section-top-text-container">
					<Row><span>{this.props.dat.top_text[0]}</span></Row>
					<Row><span>{this.props.dat.top_text[1]}</span></Row>
					<Row><span>{this.props.dat.top_text[2]}</span></Row>
				</Container>
				<img className="foto-two" src= {require('../../../media/Madies_Foto_02.jpeg')} />
				<span className="top-circle-container"><span className="black-half-circle"/><span className="orange-half-circle"/></span>
				<img className="foto-three" src= {require('../../../media/Madies_Foto_03.jpeg')} />
				<Container fluid className="second-section-bottom-text-container">
					<Row><span>{this.props.dat.bottom_text[0]}</span></Row>
					<Row><span>{this.props.dat.bottom_text[1]}</span></Row>
					<Row><span>{this.props.dat.bottom_text[2]}</span></Row>
				</Container>
				<div className="mountain-container" ><div className="black-circle" /><img className="mountain-img" src={mountain}/></div>
			</div>
		);
	}
}

export default SecondSectionContainer;