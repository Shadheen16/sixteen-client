import React from 'react';
import styled from 'styled-components';

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>c
            </Info>
        </Container>
    );
};

export default CategoryItem;

const Container = styled.div`
  flex: 1;
  margin: 0.1875em;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 1.25em;
`;

const Button = styled.button`
    border:none;
    padding: 0.625em;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;