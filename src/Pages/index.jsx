import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import Main from "../Components/Body/mainLayout";

export default function Maincomp () {
    const [search,setSearch] = useState('')
    const [news_headline, setHeadline] = useState([])
    const [filteredNews, setFilteredNews] = useState([])

    useEffect ( () => {
        var url = 'http://newsapi.org/v2/top-headlines?country=id&apiKey=4b7de77b289f46409a505edad4e9aa50';
        console.log(url);
        var req = new Request(url);
        fetch(req)
        .then(response => response.json())
        .then(data => {
            const artikel = data.articles;
            console.log(artikel);
            setHeadline(artikel)
        });
    },[])

    function searchnews() {
        var url = 'http://newsapi.org/v2/everything?q='+search+'&from=2022-12-08&sortBy=popularity&apiKey=4b7de77b289f46409a505edad4e9aa50';
        console.log(url);
        var req = new Request(url);
        fetch(req)
        .then(response => response.json())
        .then(data => {
            const artikel = data.articles;
            console.log(artikel);
            setHeadline(artikel)
        });
    }

    useEffect(()=>{
        setFilteredNews(news_headline.filter(e=>e.urlToImage != null && e.author != null))
    }, [news_headline])
    
    return (
        <Main>
            <Container fluid>
                <Row style={{marginTop:"1em"}}>
                    <center><h3>Portal berita</h3></center>
                </Row>

                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Cari berita..." value={search} onChange={(e)=>setSearch(e.target.value)} />
                            <Button variant="outline-secondary" id="search-news" onClick={searchnews}>
                                <FaSearch />
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="mt-4 justify-content" id="news-headline">
                    {
                        filteredNews.map((e,index) =>{
                            // if(e.urlToImage != null && e.author != null) {
                                return (
                                    <Col key={index} lg={3} className="my-3">
                                        <Card>
                                            <Card.Img variant="top" src={e.urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{e.title}</Card.Title>
                                                <Card.Subtitle>{e.author}</Card.Subtitle>
                                                <Card.Text>{e.description} ...</Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            // }
                        })
                    }
                </Row>
            </Container>
        </Main>
    )
}

