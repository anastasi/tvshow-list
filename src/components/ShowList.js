import React, { Component } from 'react';
import { Button, Card, CardTitle, Row, Col, Icon } from 'react-materialize';
import ReadMoreReact from 'read-more-react';
import { inject, observer } from 'mobx-react';
import PlayButton from '../components/PlayButton';

@inject('ShowStore')
@observer
class ShowList extends Component {
  render(){
    const { ShowStore } = this.props;
    return(
      <div className="ShowList">
        {ShowStore.shows.length > 0 &&
        <div>
            {ShowStore.shows.map((item,id) =>
            <div key={item.show.id}>
              <Row>
                <Col l={12} s={12}>
                  <Card className="ShowCard hide-on-small-only" horizontal 
                        header={<CardTitle image={item.show.image.medium}></CardTitle>} actions={[<Button waves='light' node='a' className="right ShowButton" href='#'>Play<Icon medium right className="PlayIcon">play_arrow</Icon></Button>]}>
                    <h5>{item.show.name}</h5>
                    <ReadMoreReact  text={item.show.summary.replace(/<[^>]+>/g, '')}
                                    min={80}
                                    ideal={200}
                                    max={300}/>
                  </Card>

                  {/* Card for mobile */}
                  <Card className="ShowCard hide-on-large-only hide-on-medium-only"  
                        header={<CardTitle reveal image={item.show.image.medium} waves='light'/>}
                        title={item.show.name}
                        reveal={<p className="ShowSummarySmall">
                                  <ReadMoreReact  text={item.show.summary.replace(/<[^>]+>/g, '')}
                                                  min={80}
                                                  ideal={200}
                                                  max={300}/>
                        <Col s={12}>
                          <PlayButton />
                        </Col></p>}>
                        
                  </Card>
                </Col>
              </Row>
            </div>
            )}
        </div>
        }
      </div>
    )
  }
}

export default ShowList;