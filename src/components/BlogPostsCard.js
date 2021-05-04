import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';
import parse from 'html-react-parser';

const BlogPostsCard = (props) => {
  return (
    <Col>
        <Card className="mb-3">
            <Link to={`/posts/${props.post.id}`} className="card-link">
                <CardImg top width="100%" src={props.post._embedded['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url} alt={props.post.title.rendered} />
                <CardBody>
                    <CardTitle tag="h5">{props.post.title.rendered}</CardTitle>
                    <CardText>{parse(props.post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").split(" ").splice(0, 50).join(" "))}</CardText>
                </CardBody>
            </Link>
        </Card>
    </Col>
  );
};

export default BlogPostsCard;