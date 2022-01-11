import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../../data';

const Slider = () => {
    let [slideIndex, setSlideIndex] = useState(0);
    let [delay, setDelay] = useState(5000);
    let [count, setCount] = useState(0);

    // slider timer function

    useEffect(() => {
        setCount(count+1);
        if (count < 6) {
            const timer = setTimeout(() => {
                if (slideIndex < 2) {
                    setSlideIndex(slideIndex + 1);
                    if (delay > 5000) {
                        setDelay(delay - (delay - 5000));
                    } else {
                        setDelay(delay + 200);
                    }

                } else if (slideIndex === 2 || count>5) {
                    setSlideIndex(0);
                    if (delay > 5000) {
                        setDelay(delay - (delay - 5000));
                    } else {
                        setDelay(delay + 200);
                    }
                }
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [delay]);

    // onclick slide funtion

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow directtion="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined fontSize="large" />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => <Slide
                    bg={item.bg}
                    key={item.id}
                >
                    <ImageContainer >
                        <Image src={item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>
                            {item.title}
                        </Title>
                        <Desc>
                            {item.desc}
                        </Desc>
                        <Button>
                            SHOW NOW
                        </Button>
                    </InfoContainer>
                </Slide>)

                }
            </Wrapper>
            <Arrow directtion="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined fontSize="large" />
            </Arrow>
        </Container>
    );
};

export default Slider;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow-x: hidden;
    position: relative;

`;
const Arrow = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${(props) => props.directtion === "left" && "0.625rem"};
    right:${(props) => props.directtion === "right" && "0.625rem"};
    margin: auto;
    opacity: 0.5;
    cursor: pointer;
    z-index: 2;
  
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    scroll-behavior: smooth;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s .2s ease; 
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
   height: 100%;
   flex: 1;
   display: flex;
   justify-content: center;
`;
const Image = styled.img`
    height:80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 3.125em;
`;
const Title = styled.h1`
    font-size: 4.375rem;
`;
const Desc = styled.p`
    margin: 3.325em 0;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.1875em;
`;
const Button = styled.button`
    padding: 0.625em;
    font-size: 1.25;
    background-color: transparent;
    cursor: pointer;
`;
