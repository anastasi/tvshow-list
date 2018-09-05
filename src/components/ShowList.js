import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ShowListItem from './ShowListItem'

@inject('ShowStore')
@observer
class ShowList extends Component {
  render(){
    const { ShowStore } = this.props;
    return(
      <div className="ShowList">
        {ShowStore.shows.length > 0 &&
        <div>
            {ShowStore.shows.map((item) =>
              <ShowListItem item={item.show} key={item.show.id}/>
            )}
        </div>
        }
      </div>
    )
  }
}

export default ShowList