import Menu from './Menu/Menu'
import About from './About/About';
import { ArrowDownOutlined } from "@ant-design/icons";

function Header({ activeTest, activereg, activelog }) {
    return (
        <header className="header">
            <Menu activereg={activereg} activelog={activelog} />
            <About activeTest={activeTest} />
            <span className="header-span"><ArrowDownOutlined /></span>
        </header>
    );
}

export default Header;