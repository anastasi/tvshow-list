import { observable, action } from 'mobx'

class ShowStore {
  @observable shows = [];
  @observable episodes = [];

  @action
  searchShow = show => {
    const search_query = `http://api.tvmaze.com/search/shows?q=${show}`
    fetch(search_query)
    .then(response => response.json())
    .then(data => {
      this.shows = data
    })
  }
  getShowId(id){
    return this.shows.find( show => show.id === id );
  }
  getEpisodes = showId => {
    const search_query = `http://api.tvmaze.com/shows/${showId}/episodes`
    fetch(search_query)
     .then(response => response.json())
     .then(data => {
       this.episodes = data
     })
  }
}

const store = new ShowStore();
export default store