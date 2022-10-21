import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { title, image_url, details, category_id } = news
    return (
        <div>


            <Card style={{ width: '38rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Card.Text></Card.Text>
                    <Card.Text>
                        {details}
                    </Card.Text>

                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">
                        </Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default News;