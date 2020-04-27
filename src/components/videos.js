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
    <>
      <Container>
        <Row className="justify-content-center">
          {createVideos(videos)}
        </Row>
      </Container>
    </>
  )
};


function createVideos(videos) {
  let children = []
  var index_init = 1;//from 1, to avoid the header name of the cell. e.g.,videos.id[0] == title
  for (let i = index_init; i < videos.title.length; i++) {
    children.push(

      <Col className="py-2 px-md-4" sm>
        <Card className="bg-secondary shadow border-0">

          <CardBody>
            <Container>
              <Row className="justify-content-center">
                <a href={videos.video_url[i]}><img className="img-fluid rounded shadow-lg" width="400" src={videos.thumbnail[i]} alt="" /></a>
              </Row>

              <Row className="justify-content-center">
                <h5 className="mb-0 al"><a href={videos.video_url[i]} className="title">{videos.title[i]}</a></h5>
              </Row>
              <Row className="justify-content-center">
                <ul className="list-inline">
                  <li className="list-inline-item">Temporada {videos.season[i]}</li>
                  <li className="list-inline-item">Episodio {videos.episode[i]}</li>
                </ul>
                {/* <Col>
                  <h6 className="small mb-0">Temporada {videos.season[i]}</h6>
                </Col>
                <Col>
                  <h6 className="small mb-0">Episodio {videos.episode[i]}</h6>
                </Col> */}
              </Row>
            </Container>
          </CardBody>
        </Card>
      </Col>

    );
  }

  return (children);
}


export default Videos