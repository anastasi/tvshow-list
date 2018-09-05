import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize'
import BackButton from './BackButton';

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
      <div className="container">
        <Row>
          <BackButton />
          <Col l={12}>
            <h3>Episodes</h3>
            <Collection>
              {ShowStore.episodes.map(item =>
                <CollectionItem target="_blank" key={item.id} href={item.url}>{item.season}/{item.number} - {item.name}</CollectionItem>
              )}
            </Collection>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SingleShow;