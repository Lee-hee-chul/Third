import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Lee-hee-chul/front-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row className='datail-wrap'>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>￦{product?.price}</div>
        <DropdownButton className='size'
          as={ButtonGroup}
          title="사이즈 선택"
          id="bg-vertical-dropdown-1"
        >
          <Dropdown.Item eventKey="1">S</Dropdown.Item>
          <Dropdown.Item eventKey="1">M</Dropdown.Item>
          <Dropdown.Item eventKey="2">L</Dropdown.Item>
        </DropdownButton>
        <br/>

        <Button className='size-bt'>추가</Button>
        </Col>

        
      </Row>

      
    </Container>
  );
};

export default ProductDetail