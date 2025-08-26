import './menu.css';
import MenuList from './MenuList';

export default function TreeView({menu = []}){
    return(
        <div className="tree-main-container">
            <MenuList list={menu}/>
        </div>
    )
}