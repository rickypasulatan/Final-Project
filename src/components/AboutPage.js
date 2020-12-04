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
                        Made with pain and agony using React, by Ricky Pasulatan
                        <br/>
                        <br/>
                        API Endpoint yang saya gunakan adalah data Tv Shows dari Tv Maze
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">~dev</Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage