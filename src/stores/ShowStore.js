import { observable, action } from 'mobx'

class ShowStore {
  @observable shows = [];

  @action
  searchShow = show => {
    const search_query = `http://api.tvmaze.com/search/shows?q=${show}`
    fetch(search_query)
    .then(response => response.json())
    .then(data => {
      this.shows = data
      console.log('DATA',data)
    })
  }
}

const store = new ShowStore();
export default store