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

      <Col className="py-2 px-md-4">
        <Card className="bg-secondary shadow border-0">
          <CardBody >
            <a href={videos.video_url[i]}><img className="img-fluid rounded shadow-lg" src={videos.thumbnail[i]} alt="" /></a>

            <Container>
              <Row className="justify-content-center">
              <h6 className="mb-0 al"><a href={videos.video_url[i]} className="title">{videos.title[i]}</a></h6>
              </Row>
              <Row>
                <Col >
                <h6 className="small mb-0">Temporada {videos.season[i]}</h6>
                </Col>
                <Col >
                <h6 className="small mb-0">Episodio {videos.episode[i]}</h6>
                </Col>
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