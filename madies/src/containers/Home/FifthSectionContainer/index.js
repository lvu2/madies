import React from 'react';
import "./index.scss";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class FifthSectionContainer extends React.Component{
	constructor(props) {
		super(props);
		this.state = { curContent: 0};
		this.textNatural = null;
		this.textEdamames = null;
		this.textMango = null;
		this.textLyophilized = null;

		this.rightImgNatural = null;
		this.rightImgEdamames = null;
		this.rightImgMango = null;
		this.rightImgLyophilized = null;

		this.setNaturalTextRef = element => {
	    	this.textNatural = element;
	    };
	    this.setEdamamesTextRef = element => {
	    	this.textEdamames = element;
	    };
	    this.setMangoTextRef = element => {
	    	this.textMango = element;
	    };
	    this.setLyophilizedTextRef = element => {
	    	this.textLyophilized = element;
	    };
	    /////
	    this.setNaturalRightImgRef = element => {
	    	this.rightImgNatural = element;
	    };
	    this.setEdamamesRightImgRef = element => {
	    	this.rightImgEdamames = element;
	    };
	    this.setMangoRightImgRef = element => {
	    	this.rightImgMango = element;
	    };
	    this.setLyophilizedRightImgRef = element => {
	    	this.rightImgLyophilized = element;
	    };
	}

	componentDidMount() {
		this.changeContent();
	}

	handlePrevClick() {
		this.setState( state => ({
			curContent: ((state.curContent-1)%4+4)%4
		}), ()=>this.changeContent("prev"));
	}
	handleNextClick(){
		this.setState( state => ({
			curContent: ((state.curContent+1)%4+4)%4
		}), ()=>this.changeContent("next"));
	}
	changeContent(dir){
		if(this.state.curContent === 0){
			this.textNatural.childNodes[0].style.transform = "translate(0, 0)";
			this.textEdamames.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textMango.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textLyophilized.childNodes[0].style.transform = "translate(-6vw, 0)";

			this.textNatural.style.opacity = 1;
			this.textEdamames.style.opacity = 0;
			this.textMango.style.opacity = 0;
			this.textLyophilized.style.opacity = 0;


			if(dir === "next"){
				this.rightImgNatural.childNodes[0].style.zIndex = 3;
				this.rightImgEdamames.childNodes[0].style.zIndex = 1;
				this.rightImgMango.childNodes[0].style.zIndex = 0;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 2;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
			}else{
				this.rightImgNatural.childNodes[0].style.zIndex = 3;
				this.rightImgEdamames.childNodes[0].style.zIndex = 2;
				this.rightImgMango.childNodes[0].style.zIndex = 0;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 1;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";	
			}

		}else if(this.state.curContent === 1) {
			this.textNatural.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textEdamames.childNodes[0].style.transform = "translate(0, 0)";
			this.textMango.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textLyophilized.childNodes[0].style.transform = "translate(-6vw, 0)";

			this.textNatural.style.opacity = 0;
			this.textEdamames.style.opacity = 1;
			this.textMango.style.opacity = 0;
			this.textLyophilized.style.opacity = 0;

			if(dir === "next"){
				this.rightImgNatural.childNodes[0].style.zIndex = 2;
				this.rightImgEdamames.childNodes[0].style.zIndex = 3;
				this.rightImgMango.childNodes[0].style.zIndex = 1;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 0;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5, 1.5)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
			}else{
				this.rightImgNatural.childNodes[0].style.zIndex = 1;
				this.rightImgEdamames.childNodes[0].style.zIndex = 3;
				this.rightImgMango.childNodes[0].style.zIndex = 2;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 0;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5, 1.5) translate(0, 100%)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
			}
		}else if(this.state.curContent === 2) {
			this.textNatural.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textEdamames.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textMango.childNodes[0].style.transform = "translate(0, 0)";
			this.textLyophilized.childNodes[0].style.transform = "translate(-6vw, 0)";

			this.textNatural.style.opacity = 0;
			this.textEdamames.style.opacity = 0;
			this.textMango.style.opacity = 1;
			this.textLyophilized.style.opacity = 0;

			if(dir === "next"){
				this.rightImgNatural.childNodes[0].style.zIndex = 1;
				this.rightImgEdamames.childNodes[0].style.zIndex = 2;
				this.rightImgMango.childNodes[0].style.zIndex = 3;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 0;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1, 1)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
			}else{
				this.rightImgNatural.childNodes[0].style.zIndex = 0;
				this.rightImgEdamames.childNodes[0].style.zIndex = 1;
				this.rightImgMango.childNodes[0].style.zIndex = 3;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 2;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1, 1)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
			}
		}else{
			this.textNatural.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textEdamames.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textMango.childNodes[0].style.transform = "translate(-6vw, 0)";
			this.textLyophilized.childNodes[0].style.transform = "translate(0, 0)";

			this.textNatural.style.opacity = 0;
			this.textEdamames.style.opacity = 0;
			this.textMango.style.opacity = 0;
			this.textLyophilized.style.opacity = 1;

			if(dir === "next"){
				this.rightImgNatural.childNodes[0].style.zIndex = 0;
				this.rightImgEdamames.childNodes[0].style.zIndex = 1;
				this.rightImgMango.childNodes[0].style.zIndex = 2;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 3;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
			}else{
				this.rightImgNatural.childNodes[0].style.zIndex = 2;
				this.rightImgEdamames.childNodes[0].style.zIndex = 0;
				this.rightImgMango.childNodes[0].style.zIndex = 1;
				this.rightImgLyophilized.childNodes[0].style.zIndex = 3;

				this.rightImgNatural.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5)";
				this.rightImgEdamames.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgMango.childNodes[0].childNodes[0].style.transform = "scale(1.5,1.5) translate(0, 100%)";
				this.rightImgLyophilized.childNodes[0].childNodes[0].style.transform = "scale(1,1)";
			}
		}
	}

	render() {
		return(
			<div className="fifth-section-container">
				<div className="fifth-section-top-text">
					<Container fluid>
						<Row><span>That's How</span></Row>
						<Row><span>Irresistible</span></Row>
						<Row><span>Madies is</span></Row>
					</Container>
				</div>
				<span className="fifth-section-circle-container">
					<span className="fifth-section-yellow-circle"/>
					<span className="fifth-section-green-half-circle"/>
				</span>
				<div className="fifth-section-left-image-container">
					<img src={require('../../../media/Madies_Foto_08.1.jpg')} />
				</div>
				<div className="fifth-section-right-image-container">
					<div className="fifth-section-foto-nine-one-container" ref={this.setNaturalRightImgRef}>
						<div><img src={require('../../../media/Madies_Foto_09.1.jpg')} /></div>
					</div>
					<div className="fifth-section-foto-nine-two-container" ref={this.setEdamamesRightImgRef}>
						<div><img src={require('../../../media/Madies_Foto_09.2.jpg')} /></div>
					</div>
					<div className="fifth-section-foto-nine-three-container" ref={this.setMangoRightImgRef}>
						<div><img src={require('../../../media/Madies_Foto_09.3.jpg')} /></div>
					</div>
					<div className="fifth-section-foto-nine-four-container" ref={this.setLyophilizedRightImgRef}>
						<div><img src={require('../../../media/Madies_Foto_09.4.jpg')} /></div>
					</div>
					<div className="fifth-section-prev-container"><span className="fifth-section-prev" onClick={()=>this.handlePrevClick()}>prev</span></div>
					<div className="fifth-section-next-container"><span className="fifth-section-next" onClick={()=>this.handleNextClick()}>next</span></div>
					<div className="fifth-section-natural-text-container" ref={this.setNaturalTextRef}><span className="fifth-section-natural-text">natural</span></div>
					<div className="fifth-section-edammames-text-container" ref={this.setEdamamesTextRef}><span className="fifth-section-edammames-text">edammames</span></div>
					<div className="fifth-section-mangos-text-container" ref={this.setMangoTextRef}><span className="fifth-section-mangos-text">mangos</span></div>
					<div className="fifth-section-lyophilized-text-container" ref={this.setLyophilizedTextRef}><span className="fifth-section-lyophilized-text">lyophilized</span></div>
				</div>
				<div className="fifth-section-bottom-left-text">
					<Container fluid>
						<Row><span>through a process called</span></Row>
						<Row><span>freeze-dried, we freeze &</span></Row>
						<Row><span>dehydrate th fruit.</span></Row>
						<Row><br /></Row>
						<Row><span>that way we keep all</span></Row>
						<Row><span>minerals, proteins, aroma</span></Row>
						<Row><span>& flavors.</span></Row>
					</Container>
				</div>
				<div className="fifth-section-bottom-right-text">
					<Container fluid>
						<Row><span>we don't just eat madies</span></Row>
						<Row><span>from the packaging to the</span></Row>
						<Row><span>mouth.</span></Row>
						<Row><br /></Row>
						<Row><span>we can also create new</span></Row>
						<Row><span>snacks & irresistible</span></Row>
						<Row><span>dishes.</span></Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default FifthSectionContainer;






















