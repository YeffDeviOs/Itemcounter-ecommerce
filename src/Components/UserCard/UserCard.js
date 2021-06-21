import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './UserCard.css';



const cardStyles = {};

const UserCard = ({ producto, precio, description, img }) => (
  <div className='UserCard'>
    <Card style={cardStyles}>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{producto}</Card.Header>
        <Card.Meta>
          <span className='date'>{precio}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  </div>
  
  
);

export default UserCard;
