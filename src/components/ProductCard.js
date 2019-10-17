import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle
} from 'reactstrap';

const ProductCard = () => {
    return (
        <div className="product-card" data-test="product-card">
            <Card>
                <CardBody>
                    <CardTitle>Product</CardTitle>
                </CardBody>
                <CardImg
                    width="100%"
                    src="https://reactstrap.github.io/assets/318x180.svg"
                    alt="Card image cap"
                />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard;