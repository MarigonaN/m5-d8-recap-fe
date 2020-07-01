import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap"

class SingleBook extends Component {

    render() {
        const { title, img, category, price, asin } = this.props.item

        return (
            <Card style={{width: "185px", marginTop: "20px"}}>
                <Card.Img variant="top" src={img} style={{height: "250px"}}/>
                <Card.Body style={{height: "130px"}}>
                    <Card.Title style={{fontSize: "14px"}}>{title}</Card.Title>
                    <Card.Text>
                        {category} - {price}
                    </Card.Text>
                    
                </Card.Body>
                <Button variant="info">Details</Button>
            </Card>
        )
    }
}

export default SingleBook
