import React from 'react'
import { Card, CardTitle, Col } from 'react-materialize'
import ReadMoreReact from 'read-more-react'
import { Link } from 'react-router-dom'
import PlayButton from '../components/PlayButton'

const ShowListItemMob = (props) => (
  <Card className="ShowCard hide-on-large-only hide-on-medium-only"  
    header={ props.image === null ? (<CardTitle reveal image='/images/no-image.png' waves='light'/>) : (<CardTitle reveal image={props.image.medium} waves='light' />)
  } 
    title={props.title}
    reveal={<div className="ShowSummarySmall">
    { props.text === null ? "" : (<ReadMoreReact text={props.text.replace(/<[^>]+>/g, '')}
      min={80}
      ideal={200}
      max={300}/>)
    }
    <Col s={12}>
      <Link key={`show-episodes-${props.showId}`} to={{ pathname: `/show/${props.showId}`}}>
        <PlayButton class="PlayButton"/>
      </Link>
    </Col></div>}>
  </Card>
)

export default ShowListItemMob