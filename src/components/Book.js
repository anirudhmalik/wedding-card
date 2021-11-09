import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg'
import img3 from '../assets/images/3.jpeg'
import img4 from '../assets/images/4.jpeg'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft,FaPlayCircle,FaMapMarkerAlt } from 'react-icons/fa';
import audio1 from '../assets/audio/1.mpeg'
import audio2 from '../assets/audio/2.mpeg'
import {Howl, Howler} from 'howler';
import './Book.css'

const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref} >
        <div className="page-content" >
          <div className="page-image">
          <img
              className='image'
              alt=''
              src={props.img}
            />
          </div>
          </div>
      </div>
    );
  });
const Button = styled(motion.button)`
  margin:2rem;
  padding: 1rem 3rem;
  font-size: 0.5rem;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  background: #f4921e;
  color: #fff;
  user-select: none;
}`;
const Button2 = styled(motion.button)`
  margin:2rem;
  padding: 1rem 3rem;
  font-size: 0.5rem;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  background: #f8f4f4;
  color: #fff;
  user-select: none;
}`;
const Location = styled(motion.button)`
  padding: 0.5rem 2rem;
  border: 2px solid #f4921e;
  border-radius: 50px;
  background: #fff;
}`;
  export default class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        page: 1,
        totalPage: 4,
        mount:false,
      };
    }

    delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    flipPages = async () => {
      await this.delay(22000);
      this.nextButtonClick();
      await this.delay(10000);
      this.nextButtonClick();
      await this.delay(10000);
      this.nextButtonClick();
    }
    nextButtonClick = () => {
            this.flipBook.pageFlip().flipNext()
    };
  
    prevButtonClick = () => {
      this.flipBook.pageFlip().flipPrev();
    };
  
    onPage = (e) => {
      this.setState({
        page: e.data+1,
      });
    };

    soundPlay = (src) => {
      const sound = new Howl({
        src,
        html5:true,
        onend: function() {
          const sound2 = new Howl({
            src: audio2,
            html5:true
          });
           sound2.play();
        }
      });
       sound.play();
    }

    mount = () => {
      this.setState({ mount: true });
      this.flipPages();
      this.soundPlay(audio1);
    }

    render() {
      Howler.volume(1.0);
        return (
          <>
          <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            mobileScrollSupport={true}
            onFlip={this.onPage}
            ref={(el) => (this.flipBook = el)}
          >

            <Page number={1} img={img1}>Lorem ipsum...</Page>
            <Page number={2} img={img2}>Lorem ipsum...</Page>
            <Page number={3} img={img3}>Lorem ipsum...</Page>
            <Page number={4} img={img4}>Lorem ipsum...</Page>
            
            
            </HTMLFlipBook>
            {!this.state.mount ?
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, alignItems: 'center' }}>
                <Button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                    backgroundColor: '#ce7406',
                    border: 'none',
                    color: '#000'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.5 } }}
                  onClick={() => this.mount()}
                >
                  <FaPlayCircle style={{ fontSize: 20 }} />
                </Button>
              </div> :
              <>
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, alignItems: 'center' }}>
                {this.state.page === 1 ? <Button2
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                    backgroundColor: '#f8f4f4',
                    border: 'none',
                    color: '#000'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.5 } }}
                >
                  <FaArrowAltCircleLeft style={{ fontSize: 20 }} />
                </Button2> : <Button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                    backgroundColor: '#ce7406',
                    border: 'none',
                    color: '#000'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.5 } }}
                  onClick={this.prevButtonClick}
                >
                  <FaArrowAltCircleLeft style={{ fontSize: 20 }} />
                </Button>}
                [<span>{this.state.page}</span> of <span>{this.state.totalPage}</span>]
                {this.state.page === 4 ? <Button2
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                    backgroundColor: '#f8f4f4',
                    border: 'none',
                    color: '#000'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.5 } }}
                >
                  <FaArrowAltCircleRight style={{ fontSize: 20 }} />
                </Button2> :
                  <Button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                      backgroundColor: '#ce7406',
                      border: 'none',
                      color: '#000'
                    }}
                    initial={{ opacity: 0, backgroundColor: '#f4921e' }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    onClick={this.nextButtonClick}
                  >
                    <FaArrowAltCircleRight style={{ fontSize: 20 }} />
                  </Button>
                }
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Location
                    onClick={()=>window.open('https://goo.gl/maps/EpyVLvcwxkAitx5Q6')}
                  >
                  <FaMapMarkerAlt style={{ fontSize: 20, color: 'red' }} />
                  <span style={{marginLeft:10,color:'#f4921e',fontSize: 24}}>Venue</span>
                  </Location>
                </div>
              
              </>
            }
          </>
      );
    }
  }