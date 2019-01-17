import {TimelineLite, Expo, TweenLite} from "gsap";
import React, {Component} from 'react';
import styled  from 'styled-components';
import { Link } from 'gatsby';




const NavItem = styled.li`
  margin: 0 20px;
  padding: 0;
  list-style: none;
  a {
    text-decoration: none;
    font-size: 12px;
    text-transform: uppercase;
    color: #000;
    font-family: 'Circular Std Bold'
  }
  `

  const NavWrapper = styled.div`
  padding: 25px 100px;
  marginBottom: 1.45rem;
  position: fixed;
  width: 100%;
  height: 70px;
  @media (max-width: 600px) {
    padding: 10px 5%;
  }
  `


class Header extends Component {
  constructor(props) {
    super(props);
    this.hoverLink = null;
    this.hoverLink2 = null;
    this.myTween = null;
  }


  componentDidMount(){

    window.onmousemove = (e) => {
      this.cursorShadow.style.left = e.pageX + 'px';
      this.cursorShadow.style.top = e.pageY + 'px';
      this.cursorDot.style.left = e.pageX + 'px';
      this.cursorDot.style.top = e.pageY + 'px';
    }
    this.myTween = new TimelineLite({paused: true});
    this.myTween
    .to(this.hoverLink, .2, {scale: 1.1, x: 0, y: -4})

    this.hoverLink.onmouseover = () => {
     this.myTween.play();
     this.cursorShadow.classList.add('active');
     this.cursorDot.classList.add('active');
  }

     this.hoverLink.onmouseleave = () => {
     this.myTween.reverse();
     this.cursorShadow.classList.remove('active');
     this.cursorDot.classList.remove('active');
  }


  this.hoverLink2.onmouseover = () => {
   this.myTween.play();
   this.cursorShadow.classList.add('active');
   this.cursorDot.classList.add('active');
}

   this.hoverLink2.onmouseleave = () => {
   this.myTween.reverse();
   this.cursorShadow.classList.remove('active');
   this.cursorDot.classList.remove('active');
}
}

  render() {
    return (
      <NavWrapper>
        <div
          style={{
            margin: `0 auto`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
              height: '70px'
          }}
        >
          <div ref={a => this.hoverLink2 = a}>
            <Link  to="/" style={{ textDecoration: 'none',color: '#000', margin: 0,fontWeight: 700, fontFamily: 'Playfair Display', display: 'block', fontSize: '20px'}}>A.</Link></div>
          <div>
            <ul style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }} >
              <NavItem ref={a => this.hoverLink = a} ><Link to="/about">menu</Link></NavItem>
            </ul>
          </div>
        </div>
        <div ref={div => this.cursorShadow = div} className="cursor cursor-shadow"></div>
        <div ref={div => this.cursorDot = div} className="cursor cursor-dot"></div>
      </NavWrapper>
    )
  }
}


export default Header
