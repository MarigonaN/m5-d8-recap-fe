import React, { Component } from 'react'
import { Media, Button, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'

class SingleBookListItem extends Component {

    deleteBook = async (asin) =>{
        const booksResp = await fetch("http://localhost:3001/books/" + asin, {
            method: "DELETE"
        })
        if (booksResp.ok){
            this.props.onDelete(asin)
        }
    }

 
    render() {
        const { title, img, category, price, asin } = this.props.item

        return (
            <Media>
            <img
              width={150}
              height={180}
              className="mr-3 mt-3"
              src={img}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="mt-3">{title}</h5>
              <p>
                {category} - {price}
               
              </p>
             
            </Media.Body>
            <div className="mt-5">
                <Button className="ml-5" variant="danger" onClick={() => this.deleteBook(asin) } >Delete</Button>
                <Button className="ml-3" variant="warning"><Link to={"/details/" + asin}>Edit</Link></Button>
            </div>
          </Media>
        )
    }
}

export default SingleBookListItem
