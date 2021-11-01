import "./styles.scss";
import {SidePanel, Header, Feed, FilterPanel} from "../../Components";

const Home = ( {posts} ) => {
    return (
        <div>
            <Header/>
            <div className='flex-container'>
                <div className='mid-area'>
                    <FilterPanel/>
                    <Feed posts={posts}/>
                </div>
                <SidePanel showCreate={true}/>
            </div>
        </div>
    );
}

export default Home;