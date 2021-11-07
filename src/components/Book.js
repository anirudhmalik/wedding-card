import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg'
import img3 from '../assets/images/3.jpeg'
import img4 from '../assets/images/4.jpeg'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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
  export default class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        page: 1,
        totalPage: 4,
      };
    }

    componentDidMount() {
      this.flipPages();
    }
    delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    flipPages = async () => {
      await this.delay(3000);
      this.nextButtonClick();
      await this.delay(4000);
      this.nextButtonClick();
      await this.delay(4000);
      this.nextButtonClick();
      await this.delay(2000);
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
  
    render() {
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
          <div style={{display:'flex',justifyContent:'center',paddingTop:20,alignItems:'center'}}>

         { this.state.page == 1 ?<Button2
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#f8f4f4',
                  border: 'none',
                  color: '#000'
                }}
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                onClick={this.nextButtonClick}
              >
                  <FaArrowAltCircleLeft style={{fontSize:20}}/>
              </Button2>  :<Button
            whileHover={{ scale: 1.05,
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
          <FaArrowAltCircleLeft style={{fontSize:20}}/>
          </Button>}
            [<span>{this.state.page}</span> of <span>{this.state.totalPage}</span>]
              {this.state.page == 4 ? <Button2
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#f8f4f4',
                  border: 'none',
                  color: '#000'
                }}
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                onClick={this.nextButtonClick}
              >
                  <FaArrowAltCircleRight style={{fontSize:20}}/>
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
                <FaArrowAltCircleRight style={{fontSize:20}}/>
               </Button> 
              }
          </div>
          </>
      );
    }
  }