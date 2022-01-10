import React from 'react';
import styled from 'styled-components';

const Announcement = () => {
    return (
            <Container>
                Super deal ! Free shooping on Orders over $50
            </Container>
    );
};

export default Announcement;

const Container = styled.div`
    height: 30px;
    background: purple;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`