import React from 'react'
import {Card, Button} from 'react-bootstrap'

const AboutPage = () => {
    return (
        <div style={{width: "30rem", margin: "auto", marginTop: "10rem"}}>
            <Card className="text-center">
                <Card.Header>Words from the developer</Card.Header>
                <Card.Body>
                    <Card.Title>Tv Shows</Card.Title>
                    <Card.Text>
                        Made by Ricky Pasulatan
                        <br/>
                        <br/>
                        The API I use is tv show data from tv maze
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">~dev</Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage