import SearchAppBar from '../../components/NavBar/NavBar';
import Hero from '../../components/hero/Hero';
import Product from '../../components/Products/Product';

function Home() {
    return (
        <div className='Home'>
            <SearchAppBar />
            <Hero />
            <Product />
        </div>
    );
}
export default Home;
