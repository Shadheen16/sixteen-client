import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SIXTEEN.</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

// styles

const Container = styled.div`
  `
const Wrapper = styled.div`
    padding: 0.625em 1.25rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    
    `

const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
`
const Language = styled.span`
    
    `

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display:flex;
    cursor:pointer;
    padding: 0.3225em;
    margin-left:0.625em;
`
const Input = styled.input`
     border: none;
    &:focus{
        outline: none;
    }
    
    `
const Center = styled.div`
    flex: 1;
`
const Logo = styled.h1`
        text-align:center;
        font-size: 3em;
    
    `
const Right = styled.div`
    flex: 1;
    font-size:1rem;
    display:flex;
    align-items:center;
    justify-content:end

`
const MenuItem = styled.div`
        margin-left:1.25em;
        cursor:pointer;
`