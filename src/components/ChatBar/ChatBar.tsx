import { Link, NavLink, useLocation } from "react-router-dom";
import Layout from "antd/es/layout";
import  Menu  from "antd/es/menu";
import { StyledChatBar } from "./ChatBarStyled";
import { ReactComponent as Tivi } from "../../assets/img/Tivi.svg"
import { ReactComponent as Badge } from "../../assets/img/Badge.svg"
import { ReactComponent as Explore } from "../../assets/img/Explore.svg"
import { ReactComponent as Popular } from "../../assets/img/Popular.svg"
import { ReactComponent as Author } from "../../assets/img/Author.svg"
import { ReactComponent as Email } from "../../assets/img/Email.svg"
import { ReactComponent as Address } from "../../assets/img/Address.svg"
import { ReactComponent as Live } from "../../assets/img/Live.svg"
import { ReactComponent as Hotel } from "../../assets/img/Hotel.svg"
import { ReactComponent as Setting } from "../../assets/img/Setting.svg"
import { ReactComponent as Look } from "../../assets/img/Look.svg"
import { ReactComponent as Chat } from "../../assets/img/Chat.svg"
import ChatItem from "../ChatItem/ChatItem";
const { Sider} = Layout;
const {SubMenu} = Menu;


const users = [
  { name: "Newfeeds" ,status:"live",svgHeight:"36px"},
  { name: "Badges" ,status:"off",svgHeight:"36px"},
  { name: "Explore Stories" ,status:"silent" ,svgHeight:"36px"},
  { name: "Popular Groups",status:"live",svgHeight:"36px"},
  { name: "Author Profile" ,status:"off",svgHeight:"36px"}
];
const groups = [
  { name: "Email Box",  svgHeight:"36px", fontSize: "16px", fontWeight: "500", icon: <Email /> ,quantity:226},
  { name: "Near Hotel",  svgHeight:"36px",fontSize: "16px", fontWeight: "500", icon: <Hotel /> },
  { name: "Latest Event", svgHeight:"36px", fontSize: "16px", fontWeight: "500", icon: <Address /> },
  { name: "Live Stream", svgHeight:"36px", fontSize: "16px", fontWeight: "500", icon: <Live /> }
];
const pages = [
  { name: "Settings",  svgHeight:"36px",fontSize: "16px", fontWeight: "500", icon: <Setting /> },
  { name: "Analytics",  svgHeight:"36px",fontSize: "16px", fontWeight: "500", icon: <Look /> },
  { name: "Chat",  svgHeight:"36px",fontSize: "16px", fontWeight: "500", icon: <Chat /> ,quantity:16}
];
const ChatBar =() => {

  const location = useLocation();
  // const [collapsed, setCollapsed] = useState(false);


  return (
      <StyledChatBar>
          <div className="chatbar-content">
          <h3 className="chatbar-name">Friends</h3>
          {users?.map((card, index) => (
                    <ChatItem
                        key={index}
                        name={card.name}
                        status={card.status}
                        svgHeight={card.svgHeight}
                    />
                ))}
          <h3 className="chatbar-name">Groups</h3>
          {users?.map((card, index) => (
                    <ChatItem
                        key={index}
                        name={card.name}
                        status={card.status}
                        svgHeight={card.svgHeight}
                    />
                ))}      
          <h3 className="chatbar-name">Pages</h3>
          {users?.map((card, index) => (
                    <ChatItem
                        key={index}
                        name={card.name}
                        status={card.status}
                        svgHeight={card.svgHeight}
                    />
                ))}     
          </div>
          
          
      </StyledChatBar>

  );
};

export default ChatBar;
