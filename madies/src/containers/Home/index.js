import React from 'react';
import "./index.scss";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './data.json';

import {default as TopSectionContainer} from './TopSectionContainer';
import {default as SecondSectionContainer} from './SecondSectionContainer';
import {default as ThirdSectionContainer} from './ThirdSectionContainer';
import {default as FourthSectionContainer} from './FourthSectionContainer';
import {default as FifthSectionContainer} from './FifthSectionContainer';
import {default as SixthSectionContainer} from './SixthSectionContainer';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = { lang: "eng" };
		this.handleLang = this.handleLang.bind(this);
	}

	componentDidMount = () => {
	}

	handleLang(e){
		this.setState(state=>({
			lang: e.target.id
		}));
	}

	render() {
		return(
			<div className="home">
				<Container fluid >
					<Row>
						<TopSectionContainer handleClick={ this.handleLang} dat={ this.state.lang === "eng" ? data.eng.section_one : data.esp.section_one }/>
					</Row>
					<Row>
						<SecondSectionContainer dat={ this.state.lang === "eng" ? data.eng.section_two : data.esp.section_two } />
					</Row>
					<Row>
						<ThirdSectionContainer />
					</Row>
					<Row>
						<FourthSectionContainer />
					</Row>
					<Row>
						<FifthSectionContainer />
					</Row>
					<Row>
						<SixthSectionContainer />
					</Row>
				</Container>
			</div>
		);
	}
}

export default Home;