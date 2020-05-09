import React, { Component } from 'react';
import {
  Container,
  Row
} from "reactstrap";
import Videos from '../components/videos';

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [{
        season: "",
        data: [{
          id: "",
          title: "",
          season: "",
          episode: "",
          description: "",
          video_url: "",
          created: "",
          thumbnail: "",
          duration: ""
        }]
      }],
      selectedSeason: {
        season: "",
        data: [{
          id: "",
          title: "",
          season: "",
          episode: "",
          description: "",
          video_url: "",
          created: "",
          thumbnail: "",
          duration: ""
        }]
      }
    };

    this.handleDropdownClick = this.handleDropdownClick.bind(this)

  }

  componentDidMount() {

    const url = this.props.location.state === undefined ? localStorage.getItem('url') : this.props.location.state.url;

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

        if (season.length > 0) { //group movies by seasons
          let firstSeason = season[1];
          let movie = [{
            season: firstSeason,
            data: []
          }]
          let movieIndex = 0
          for (var i = 1; i < season.length; i++) {

            if (firstSeason === season[i]) {
              movie[movieIndex].data.push({
                id: id[i],
                title: title[i],
                season: season[i],
                episode: episode[i],
                description: description[i],
                video_url: video_url[i],
                created: created[i],
                thumbnail: thumbnail[i],
                duration: duration[i]
              });
            } else {
              firstSeason = season[i];

              movie.push({
                season: firstSeason,
                data: [{
                  id: id[i],
                  title: title[i],
                  season: season[i],
                  episode: episode[i],
                  description: description[i],
                  video_url: video_url[i],
                  created: created[i],
                  thumbnail: thumbnail[i],
                  duration: duration[i]
                }]
              });

              movieIndex++;

            }
          }


          this.setState({ movie: movie, selectedSeason: movie[0] });
        }
      })
      .catch(console.log)
  }

  handleDropdownClick(selectedSeason) {
    console.log(selectedSeason)
    //update screen with the selected season
    for (let i = 0; i < this.state.movie.length; i++) {
      if (selectedSeason === this.state.movie[i].season) {
        this.setState({ selectedSeason: this.state.movie[i] });
        break;
      }
    }
    console.log(this.state)

  }

  render() {
    return (
      <>
        <main ref="main">
          {/* <Hero /> */}
          <div className="position-relative">
            {/* Hero for FREE version */}
            <section className="section section-hero section-shaped">
              {/* Background circles */}
              <div className="shape shape-style-1 shape-default">
                <span className="span-150" />
                <span className="span-50" />
                <span className="span-50" />
                <span className="span-75" />
                <span className="span-100" />
                <span className="span-75" />
                <span className="span-50" />
                <span className="span-100" />
                <span className="span-50" />
                <span className="span-100" />
              </div>

              <div className="pt-4 text-center">
                <h4 className="display-4 mb-0">{this.state.selectedSeason.data[0].id}</h4>
              </div>
              
              
              <Container style={{overflow: 'visible'}}>
              <Row className="align-items-center justify-content-center">
                  <UncontrolledDropdown>
                    <DropdownToggle caret color="secondary">
                    Temporada {this.state.selectedSeason.season}
                </DropdownToggle>
                    <DropdownMenu style={{float:'inherit'}}>
                      {loadSeasons(this.state.movie, this.handleDropdownClick, this.state.selectedSeason.season)}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Videos videos={this.state.selectedSeason.data} />
                </Row>
              </Container>
            </section>
          </div>
        </main>
      </>
    )
  }

}

function loadSeasons(movie, handleDropdownClick, selectedSeason) {
  let children = []

  for (let i = 0; i < movie.length; i++) {
    children.push(
      <DropdownItem active={selectedSeason === movie[i].season} onClick={handleDropdownClick.bind(this, movie[i].season)}>
        {movie[i].season}
      </DropdownItem>
    );
  }
  return (children);

}

export default Movies;