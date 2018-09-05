import React from 'react'
import { Button, Icon } from 'react-materialize'

const PlayButton = (props) => (
  <Button waves='light' node='a' className={props.class} href='#'>Play
    <Icon medium right className="PlayIcon">play_arrow</Icon>
  </Button>
)

export default PlayButton
