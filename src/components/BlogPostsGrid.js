import { Container, Row } from 'reactstrap';
import { useFetch } from '../hooks/useFetch';
import BlogPostsCard from './BlogPostsCard';
import Loader from './Loader';

const BlogPostsGrid = (props) => {

    const { data, error } = useFetch('wp/v2/posts?_embed');
    
    if(error) return <div>Failed to load data.</div>
    if(!data) return <Loader />

    return (
        <Container>
            <Row xs="1" sm="2" md="3" className="mt-5">
                { data.map(post => (
                    <BlogPostsCard key={post.id} post={post} />
                ))}
            </Row>
        </Container>
    );
};

export default BlogPostsGrid;