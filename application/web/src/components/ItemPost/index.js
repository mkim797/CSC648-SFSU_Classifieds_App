// HEADER:Create A Post Code
import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import styles from "./index.module.css";
import image from "../../images/image.png";
import axios from "axios";


/**
 * Load Post Item Page Component
 * @returns HTML of ItemPost Component
 */
const ItemPost = () => {
  const [itemname, setItemname] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = () => {
   
     var data1 = {
    'name': itemname,
    'price': price,
    'descrition': description,
    'course' : course,
    'category': category, //not sure how to set category on the form
    //not sure about images

  };
  var data2 = JSON.stringify(data1);
  console.log(data1); 
  console.log(data2);
    var config = {
      method: 'post',
      url: 'http://localhost:3100/api/post/post',
      headers: { 
        'Content-Type': 'application/json' //can't be application/json
      },
      data: data2
    };
    
    axios(config)
  .then((response) => {
    window.location.href = response.data;
    //console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
  }
  
  
  

  return (
    <div style={{ marginTop: "1rem" }}>
      <Container className={styles.container}>
        <Row>
          <div className={styles.title}>Item Post Page</div>
        </Row>
        <Row style={{ marginTop: "1rem", marginRight: "1rem" }}>
          <Col>
            <Row>
              <div>Post Your Items</div>
            </Row>
            <div style={{ marginTop: "1rem" }}></div>

            <Row className="align-items-center">
              <Col lg={3}>
                <div className={styles.subtitle}>Item Name:*</div>
              </Col>
              <Col>
                <input
                  className={styles.input}
                  type="text"
                  name="itemname"
                  placeholder="e.g. Macbook"
                  value={itemname}
                  onChange={e=>setItemname(e.target.value)}
                />
              </Col>
            </Row>
            
            <div style={{ marginTop: "1rem" }}></div>
            <Row className="align-items-center">
              <Col lg={3}>
                <div className={styles.subtitle}>Price:*</div>
              </Col>
              <Col>
                <input
                  className={styles.input}
                  type="number"
                  name="pricename"
                  placeholder="e.g.$25"
                  value={price}
                  onChange={e=>setPrice(e.target.value)}
                />
              </Col>
            </Row>
            <div style={{ marginTop: "1rem" }}></div>
            <Row className="align-items-center">
              <Col lg={3}>
                <div className={styles.subtitle}>Category:*</div>
              </Col>
              <Col>
                <Row className="align-items-center">
                  <ButtonGroup justified>
                    <Dropdown className={styles.dropdown}>
                      <Dropdown.Toggle className={styles.dropdown}>
                        Category
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ width: "94%" }}>
                        <Dropdown.Item> Item1</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </Row>
              </Col>
              <div style={{ marginTop: "1rem" }}></div>
              <Row className="align-items-center"></Row>
              <Col lg={3}>
                <div className={styles.subtitle}>Course Number:*</div>
              </Col>
              <Col>
                <input
                  className={styles.input}
                  type="number"
                  name="coursenumber"
                  placeholder="e.g.CSC648"
                  value={course}
                  onChange={e=>setCourse(e.target.value)}
                />
              </Col>

              <div style={{ marginTop: "1rem" }}></div>
              <Row className="align-items-center"></Row>
              <Col lg={3}>
              
                    <Form.Label>Upload Image:*</Form.Label>
             </Col>  
             <Col>
             <Form.Control type="file" />
             </Col>
                    
             <div style={{ marginTop: "1rem" }}></div>
            <Row className="align-items-center">
              <Col lg={3}>
                <div className={styles.subtitle}>Description:*</div>
              </Col>
              <Col>
                <input
                  className={styles.input}
                  type="textarea"
                  name="textareaname"
                  placeholder="e.g. This product has so many features"
                  value={description}
                  onChange={e=>setDescription(e.target.value)}
                />
              </Col>
            </Row>

            </Row>
          </Col>

          <Col>
            <Row>
              <img src={image} alt="postimage" className={styles.image}></img>
            </Row>
            <Row>
              <Col> </Col>

              <Col>
                <Button className={styles.button} onClick={handleSubmit}>Post Image</Button>
              </Col>

              <Col> </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemPost;
