import BlogHeader from '../components/BlogHeader';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loader from '../components/Loader';
import dateFix from '../utils/dateFix';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import parse from 'html-react-parser';

function Post(props) {

    let { postId } = useParams();

    const { data, error } = useFetch(`wp/v2/posts/${postId}?_embed`);

    if(error) return <div>Failed to load data.</div>
    if(!data) return <Loader />

    return (
        <article>
            <BlogHeader imageURL={data._embedded['wp:featuredmedia']['0'].source_url}/>
            <Jumbotron>
                <h3>{data.title.rendered}</h3>
                <p>{dateFix(data.date)}</p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col className="single-post">
                        {parse(data.content.rendered)}
                    </Col>
                </Row>
            </Container>
        </article> 
    );
};

export default Post;