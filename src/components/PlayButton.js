import React from 'react'
import { Button, Icon } from 'react-materialize'

const PlayButton = (props) => (
  <Button waves='light' className={props.class}>Episodes
    <Icon medium right className="PlayIcon">play_arrow</Icon>
  </Button>
)

export default PlayButton
