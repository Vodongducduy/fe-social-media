import { StyledHeader,CustomSearchWrapper } from "./StyledHeader"
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import Search from "antd/es/input/Search";
import { toast } from "react-toastify";
import { ReactComponent as Chat } from "../../assets/img/Chat.svg";
import { ReactComponent as Home } from "../../assets/img/Home.svg";
import { ReactComponent as Flash } from "../../assets/img/Flash.svg";
import { ReactComponent as Video } from "../../assets/img/Video.svg";
import { ReactComponent as Account } from "../../assets/img/Account.svg";
import { ReactComponent as Shop } from "../../assets/img/Shop.svg";
import { ReactComponent as Alert } from "../../assets/img/Alert.svg";
import { ReactComponent as Moon } from "../../assets/img/Moon.svg";
import avatar from "../../assets/img/avatar.jpg";
const Header:React.FC<Partial<any>> = (props) => {
    const navigate = useNavigate();
    const location = useLocation(); // Lấy đường dẫn hiện tại
    const [isDarkMode, setIsDarkMode] = useState(false);
    const setDarkMode = () => {
        const body = document.querySelector('body');
        if (body) {
            body.setAttribute('data-mode', 'dark');
        }
    };
      const setLightMode =()=>{
        const body = document.querySelector('body');
        if (body) {
            body.setAttribute('data-mode', 'light');
        }
    }
    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if(!isDarkMode) 
        setDarkMode();
        else
        setLightMode();
      };
    // Hàm kiểm tra nếu đường dẫn hiện tại khớp với `to`
    const isActive = (path: string) => location.pathname.startsWith(path);

    const handleLogout = () => {
        //dispatch(logout());
        toast.success("You are now logged out");
        navigate("/signin");
      };
    return (
        <StyledHeader>
            <div className="left">
                <CustomSearchWrapper>
                    <Search
                        className="custom-search"
                        placeholder="Start typing to search..."
                        style={{
                        width: 350,
                        }}
                        size="large"
                        
                    />
                </CustomSearchWrapper>
                <div className="header-toolbar">

                    <NavLink to="/home" className={`header-toolbar-item ${isActive("/home") ? "active" : ""}`}>
                       
                        
                            <Home className="item"/>
                       
                    </NavLink>
                    <NavLink to="/stories" className={`header-toolbar-item ${isActive("/stories") ? "active" : ""}`}>
                      
                         
                            <Flash className="item"/>
                       
                    </NavLink>
                    <NavLink to="/videos" className={`header-toolbar-item ${isActive("/videos") ? "active" : ""}`}>
                       
                            <Video className="item"/>
                      
                    </NavLink>
                    <NavLink to="/groups" className={`header-toolbar-item ${isActive("/groups") ? "active" : ""}`}>
                       
                            <Account className="item"/>
                     
                    </NavLink>
                    <NavLink to="/shops" className={`header-toolbar-item ${isActive("/shops") ? "active" : ""}`}>
                      
                            <Shop className="item"/>
                     
                    </NavLink>
                    
                </div>
            </div>
            <div className="right">
                <div className="icon-header">
                    <Alert />
                </div>
                <div className="icon-header">
                    <Chat />
                </div>
                <div className="icon-header" onClick={handleToggleDarkMode}>
                    <Moon />
                </div>
                <Link to="#" className="btn-right-header ">
                    <div className="account">
                        <img alt="avatar" src={avatar}></img>
                    </div>
                </Link>
                
            </div>
        </StyledHeader>
    )
}

export default Header