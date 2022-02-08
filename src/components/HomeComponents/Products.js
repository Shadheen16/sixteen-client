import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns:22%;

    overflow-x:auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type:inline mandetory;

    > * {
        scroll-snap-align: start;
    }
    `

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;