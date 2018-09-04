import React from 'react'
import { Button, Icon } from 'react-materialize'

const PlayButton = () => (
  <Button waves='light' node='a' className="PlayButton" href='#'>Play
    <Icon medium right className="PlayIcon">play_arrow</Icon>
  </Button>
)

export default PlayButton
