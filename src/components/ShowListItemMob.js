import React from 'react'
import { Card, CardTitle, Col } from 'react-materialize'
import ReadMoreReact from 'read-more-react'
import PlayButton from '../components/PlayButton'

const ShowListItemMob = (props) => (
  <Card className="ShowCard hide-on-large-only hide-on-medium-only"  
    header={ props.image === null ? (<CardTitle reveal image='/images/no-image.png' waves='light'/>) : (<CardTitle reveal image={props.image.medium} waves='light' />)
  } 
    title={props.title}
    reveal={<p className="ShowSummarySmall">
    <ReadMoreReact text={props.text.replace(/<[^>]+>/g, '')}
      min={80}
      ideal={200}
      max={300}/>
    <Col s={12}>
      <PlayButton class="PlayButton"/>
    </Col></p>}>
  </Card>
)

export default ShowListItemMob