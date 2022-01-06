import React from 'react';
import "./index.scss";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class FourthSectionContainer extends React.Component{
	render() {
		return(
			<div className="fourth-section-container">
				<Container fluid className="text-container">
					<Row><span>think about biting a</span></Row>
					<Row><span>crispy apple & feel</span></Row>
					<Row><span>all the flavor</span></Row>
					<Row><span>running around</span></Row>
					<Row><span>your mouth</span></Row>
				</Container>
				<img className="foto-seven" src= {require('../../../media/Madies_Foto_07.jpeg')}  />
				<span className="fourth-section-circle-container"><span className="fourth-section-blue-half-circle"/><span className="fourth-section-orange-half-circle"/></span>
			</div>
		);
	}
}

export default FourthSectionContainer;