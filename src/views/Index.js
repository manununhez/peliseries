/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";


class Index extends React.Component {
  state = {
    id: [],
    type: [],
    name: [],
    seasons: [],
    creator: [],
    tags: [],
    years: [],
    thumbnail: [],
    url: []
  }


  componentDidMount() {
    const URL = 'https://spreadsheets.google.com/feeds/cells/1L0ECPYHZ4DTGibbGuJq00L97_ZYzqVKdY1yfL0ZVEj8/1/public/full?alt=json';
    fetch(URL)
      .then(res => res.json())
      .then((data) => {
        var entry = data.feed.entry;
        var id = []; // the leftmost column of the Google Sheets
        var type = []; // second-left column
        var name = [];// third-left column
        var seasons = [];// fourth-left column
        var creator = [];// fifth-left column
        var tags = [];// sixth-left column
        var years = [];// seventh-left column
        var thumbnail = [];// eigth-left column
        var url = [];// last column
        for (var i = 0; i < entry.length; i += 9) {
          // entry[i].content.$t retrieves the content of each cell
          id.push(entry[i].content.$t);
          type.push(entry[i + 1].content.$t);
          name.push(entry[i + 2].content.$t);
          seasons.push(entry[i + 3].content.$t);
          creator.push(entry[i + 4].content.$t);
          tags.push(entry[i + 5].content.$t);
          years.push(entry[i + 6].content.$t);
          thumbnail.push(entry[i + 7].content.$t);
          url.push(entry[i + 8].content.$t);
        }

        // console.log(id);
        // console.log(type);
        // console.log(name);
        // console.log(seasons);
        // console.log(creator);
        // console.log(tags);
        // console.log(years);
        // console.log(thumbnail);
        // console.log(url);

        this.setState({
          id: id, type: type, name: name, seasons: seasons,
          creator: creator, tags: tags, years: years, thumbnail: thumbnail, url: url
        })
      })
      .catch(console.log)
  }

  // render(){
  // return (
  //   <div className="recommended">
  //     {addVideoPosters(this.state)}
  //   </div>
  // );


  render() {
    this.logo = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.google.com%2Flogos%2Fdoodles%2F2020%2Fchespiritos-91st-birthday-6753651837108294.3-2x.png&imgrefurl=https%3A%2F%2Fwww.google.com%2Fdoodles%2Fchespiritos-91st-birthday&tbnid=QVAuz6ol1t4SZM&vet=12ahUKEwjAkpqN8oTpAhXLkaQKHbbOBjUQMygAegUIARDvAQ..i&docid=B1-xm0kYSJS2SM&w=1000&h=400&q=google%20chavo&ved=2ahUKEwjAkpqN8oTpAhXLkaQKHbbOBjUQMygAegUIARDvAQ";
    return (
      <>
        <DemoNavbar />
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
              <Container className="shape-container d-flex align-items-center py-lg">
                <Row className="align-items-center justify-content-center">
                  {addVideoPosters(this.state)}
                </Row>
              </Container>
            </section>
          </div>
        </main>
      </>
    );
  }
}


function addVideoPosters(content) {
  let children = [];

  var index_init = 1;//from 1, to avoid the header name of the cell. e.g.,videos.id[0] == title
  for (let i = index_init; i < content.id.length; i++) {
    children.push(

      <Link to={{
        pathname: '/movies/' + content.id[i],
        state: {
          url: content.url[i]
        }
      }}>
        <Col className="py-3 px-md-5">
          <Card className="bg-secondary shadow border-0">
            <CardBody>
              <img src={content.thumbnail[i]} className="App-logo" alt="logo" />
            </CardBody>
          </Card>
        </Col>
      </Link>
    );
  }
  return (children);
}

export default Index;
