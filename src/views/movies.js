import React, { Component } from 'react';
import Videos from '../components/videos';


class Movies extends Component {
  render() {
    return (
      <div>
        {/* <div className="col-sm-3 col-md-2 sidebar">
          <div className="drop-navigation drop-navigation">
            <ul className="nav nav-sidebar">
              <li className="active"><a href="index.html" className="home-icon"><span className="glyphicon glyphicon-home"
                aria-hidden="true"></span>Home</a></li>
              <li><a href="shows.html" className="user-icon"><span className="glyphicon glyphicon-home glyphicon-blackboard"
                aria-hidden="true"></span>TV Shows</a></li>
              <li><a href="history.html" className="sub-icon"><span className="glyphicon glyphicon-home glyphicon-hourglass"
                aria-hidden="true"></span>History</a></li>
            </ul>
          </div>
        </div> */}
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="main-grids">
            <Videos videos={this.state} />
          </div>
        </div>
      </div>
    )
  }


  state = {
    id: [],
    title: [],
    season: [],
    episode: [],
    description: [],
    video_url: [],
    created: [],
    thumbnail: [],
    duration: []
  };

  componentDidMount() {

    // console.log(this.props.location.state);

    const url = this.props.location.state === undefined ? localStorage.getItem('url') : this.props.location.state.url;

    // const url = name ? localStorage.getItem('url') : name;
    
    localStorage.setItem('url', url);

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        var entry = data.feed.entry;
        var id = []; // the leftmost column of the Google Sheets
        var season = []; // second-left column
        var episode = [];// third-left column
        var title = [];// fourth-left column
        var description = [];// fifth-left column
        var video_url = [];// sixth-left column
        var html = [];// seventh-left column
        var created = [];// eighth-left column
        var thumbnail = [];// nineth-left column
        var duration = [];// last column
        for (var i = 0; i < entry.length; i += 9) {
          // entry[i].content.$t retrieves the content of each cell
          id.push(entry[i].content.$t);
          season.push(entry[i + 1].content.$t);
          episode.push(entry[i + 2].content.$t);
          title.push(entry[i + 3].content.$t);
          description.push(entry[i + 4].content.$t);
          video_url.push(entry[i + 5].content.$t);
          created.push(entry[i + 6].content.$t);
          thumbnail.push(entry[i + 7].content.$t);
          duration.push(entry[i + 8].content.$t);
        }

        // console.log(id);
        // console.log(season);
        // console.log(episode);
        // console.log(title);
        // console.log(reach);
        // console.log(imp);
        // console.log(avg);

        this.setState({
          id: id, title: title, season: season, episode: episode,
          description: description, video_url: video_url,
          html: html, created: created, thumbnail: thumbnail, duration: duration
        })
      })
      .catch(console.log)
  }
}

export default Movies;