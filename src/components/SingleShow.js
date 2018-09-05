import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject ('ShowStore')
@observer
class SingleShow extends Component {

  componentDidMount() {
    const showId = this.props.match.params.id
    this.props.ShowStore.getEpisodes(showId)
  }
  render(){
    const { ShowStore } = this.props;

    return(
      <div>
        <h3>Episodes</h3>
        {ShowStore.episodes.map((item) =>
          <p key={item.id}>{item.name}</p>
        )}
      </div>
    )
  }
}

export default SingleShow;