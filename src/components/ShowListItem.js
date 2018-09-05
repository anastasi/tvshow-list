import React from 'react'
import { Row, Card, CardTitle, Col } from 'react-materialize'
import ReadMoreReact from 'read-more-react'
import PlayButton from '../components/PlayButton'
import ShowListItemMob from './ShowListItemMob'

const ShowListItem = (props) => (
  <Row>
    <Col l={12} s={12}>
      <Card className="ShowCard hide-on-small-only" horizontal 
        header={<CardTitle image={props.item.image.medium}></CardTitle>} 
        actions={[<PlayButton class="right PlayButton" />]}>
        <h5>{props.item.name}</h5>
        <ReadMoreReact  text={props.item.summary.replace(/<[^>]+>/g, '')}
          min={80}
          ideal={200}
          max={300}/>
      </Card>
      <ShowListItemMob image={props.item.image}
        title={props.item.name}
        text={props.item.summary}/>
    </Col>
  </Row>
    
)

export default ShowListItem