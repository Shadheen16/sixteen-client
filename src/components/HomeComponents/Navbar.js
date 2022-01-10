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
    height: 30px;
  `
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    
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
    padding: 5px;
    margin-left:10px;
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
    
    `
const Right = styled.div`
    flex: 1;
    font-size:16px;
    display:flex;
    align-items:center;
    justify-content:end

`
const MenuItem = styled.div`
        margin-left:20px;
        cursor:pointer;
`