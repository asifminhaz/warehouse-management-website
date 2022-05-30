import React from 'react';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ExtraPart = () => {
          return (
                    <>
                    
                    <h1 className='text-center'>Support Line</h1>
                    <div className='d-flex m-5 justify-content-center '>

                    <div>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="your Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button>Submit</Button>
</Form>
</div>
<div>
<Card className='mx-4'>

  <Card.Body>
    <Card.Title>Send your Issue</Card.Title>
    <Card.Text>
      If you face any issue please send your comment
    </Card.Text>
    <Button variant="primary">visit Here</Button>
  </Card.Body>
</Card>
</div>
</div>     
</>        
          );
};

export default ExtraPart;