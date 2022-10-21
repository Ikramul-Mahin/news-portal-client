import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { title, _id, image_url, total_view, details, author, rating } = news
    console.log(news._id)
    return (
        <div className='my-3'>
            <Card className="">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Image src={author?.img} style={{ height: '50px' }} roundedCircle>

                        </Image>

                    </div>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'>{author?.published_date}</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 200 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`news/${_id}`}>Read More</Link>  </p>
                            : <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className='me-2'>
                        <FaStar className='text-warning'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div className='me-2'>
                        <FaEye></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;