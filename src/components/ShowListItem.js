import React from 'react'
import { Row, Card, CardTitle, Col } from 'react-materialize'
import ReadMoreReact from 'read-more-react'
import PlayButton from '../components/PlayButton'
import ShowListItemMob from './ShowListItemMob'
import { Link } from 'react-router-dom'

const ShowListItem = (props) => (
  <Row>
    <Col l={12} s={12}>
    
      <Card className="ShowCard hide-on-small-only" horizontal 
        header={ props.item.image === null ? (<CardTitle className="NoImage" image='/images/no-image.png'></CardTitle>) : (<CardTitle image={props.item.image.medium}></CardTitle>)
        } 
        actions={[ <Link key={`show-episodes-${props.item.id}`} to={{ pathname: `/show/${props.item.id}`}}><PlayButton class="right PlayButton" /></Link> ]}>
        <h5>{props.item.name}</h5>
        { props.item.summary === null ? "" : (<ReadMoreReact text={props.item.summary.replace(/<[^>]+>/g, '')}
          min={80}
          ideal={200}
          max={300}/>)}
      </Card>
      
      <ShowListItemMob image={props.item.image}
        title={props.item.name}
        text={props.item.summary}
        showId={props.item.id}/>
    </Col>
  </Row>
    
)

export default ShowListItem

