import React from 'react'

import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

const Videos = ({ videos }) => {
  return (
    <div className="recommended">
      <div className="recommended-grids">
        <div className="recommended-info">
          <h3>{videos.id[1]}</h3>
        </div>
        {createVideos(videos)}
      </div>
    </div>
  )
};


function createVideos(videos) {
  let children = []
  var index_init = 1;//from 1, to avoid the header name of the cell. e.g.,videos.id[0] == title
  for (let i = index_init; i < videos.title.length; i++) {
    children.push(
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="3">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                {/* <div className="col-md-3 resent-grid recommended-grid">
                  <div className="resent-grid-img recommended-grid-img"> */}
                    <a href={videos.video_url[i]}><img src={videos.thumbnail[i]} alt="" /></a>
                    {/* <div className="clck small-clck">
                      <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                    </div>
                    <div className="time small-time">
                      <p>{videos.duration[i]}</p>
                    </div>
                  </div> */}
                  {/* <div className="resent-grid-info recommended-grid-info video-info-grid"> */}
                    <h5><a href={videos.video_url[i]} className="title">{videos.title[i]}</a></h5>
                    <ul>
                      <li><p className="author author-info"><a href="#" className="author">Temporada {videos.season[i]}</a></p></li>
                      <li className="right-list"><p className="views views-info">Episodio {videos.episode[i]}</p></li>
                    </ul>
                  {/* </div> */}
                {/* </div > */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (children);
}


export default Videos