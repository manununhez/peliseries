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
  for (let i = 0; i < videos.length; i++) {
    children.push(

      <Col className="py-4 px-md-4" sm>
        <Card className="bg-secondary shadow border-0">

          <CardBody>
            <Container>
              <Row className="justify-content-center">
                <a href={videos[i].video_url}><img className="img-fluid rounded shadow-lg" width="400" src={videos[i].thumbnail} alt="" /></a>
              </Row>

              <Row className="justify-content-center">
                <h5 className="mb-0 al"><a href={videos[i].video_url} className="title">{videos[i].title}</a></h5>
              </Row>
              <Row className="justify-content-center">
                <ul className="list-inline">
                  <li className="list-inline-item">Temporada {videos[i].season}</li>
                  <li className="list-inline-item">Episodio {videos[i].episode}</li>
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