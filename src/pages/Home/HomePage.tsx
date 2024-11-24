import { StyledHomePage } from "./StyledHomePage";
import StorySlider from "../../components/Story/StorySilder";
import { Story } from "../../components/Story/StoryTypes";
import { useState } from "react";
import {Post} from "../../components/Post/Post";
import {NewFeed} from "../../components/NewFeed/NewFeed";
import { NavLink } from "react-router-dom";
import ChatItem from "../../components/ChatItem/ChatItem";
import Button from "../../components/Button";
import { ReactComponent as LikePage } from "../../assets/img/LikePage.svg";
const stories = [
  {
    id: 1,
    user: "Alice",
    image: "https://tse4.mm.bing.net/th?id=OIP.Ynd0pPHvD_4MEY0kIqhkugHaCx&pid=Api&P=0&h=220",
    content: "This is Alice's story.",
     avatar:"https://tse4.mm.bing.net/th?id=OIP.nx7jTDc4BNZjMypIIddW3wHaHa&pid=Api&P=0&h=220"
  },
  {
    id: 2,
    user: "Bob",
    image: "https://tse1.mm.bing.net/th?id=OIP.GEQgQB_xu5O_wDKpIt-ygAHaEs&pid=Api&P=0&h=220",
    content: "This is Bob's story.",
     avatar:"https://tse4.mm.bing.net/th?id=OIP.nx7jTDc4BNZjMypIIddW3wHaHa&pid=Api&P=0&h=220"
  },
  {
    id: 3,
    user: "Charlie",
    image: "https://tse4.mm.bing.net/th?id=OIP.Ynd0pPHvD_4MEY0kIqhkugHaCx&pid=Api&P=0&h=220",
    content: "This is Charlie's story.",
     avatar:"https://tse4.mm.bing.net/th?id=OIP.nx7jTDc4BNZjMypIIddW3wHaHa&pid=Api&P=0&h=220"
  },
  {
    id: 4,
    user: "David",
    image: "https://tse1.mm.bing.net/th?id=OIP.GEQgQB_xu5O_wDKpIt-ygAHaEs&pid=Api&P=0&h=220",
    content: "This is David's story.",
     avatar:"https://tse4.mm.bing.net/th?id=OIP.nx7jTDc4BNZjMypIIddW3wHaHa&pid=Api&P=0&h=220"
  },
  {
    id: 5,
    user: "Eve",
    image: "https://tse4.mm.bing.net/th?id=OIP.Ynd0pPHvD_4MEY0kIqhkugHaCx&pid=Api&P=0&h=220",
    content: "This is Eve's story.",
    avatar:"https://tse4.mm.bing.net/th?id=OIP.nx7jTDc4BNZjMypIIddW3wHaHa&pid=Api&P=0&h=220"
  },
  {
    id: 6,
    user: "Test",
    image: "https://tse4.mm.bing.net/th?id=OIP.Ynd0pPHvD_4MEY0kIqhkugHaCx&pid=Api&P=0&h=220",
    content: "This is Eve's story.",
    avatar:"https://tse4.mm.bing.net/th?id=OIP.nx7jTDc4BNZjMypIIddW3wHaHa&pid=Api&P=0&h=220"
  },
];
const HomePage: React.FC = () => {
 
  
    return (
      <StyledHomePage>
        <div className="home-content">
          <div className="home-content-wrapper">
              <div className="home-content-left">
                  <StorySlider stories={stories} />
                  <Post/>
                  <NewFeed />
                  <NewFeed />
                  <NewFeed />
              </div>
              
              <div className="home-content-right">
                <div className="request">
                  <div className="request-header">
                    <h1>Friend Requests</h1>
                    <NavLink to="#" className="see-all"><span>See all</span></NavLink>
                  </div>
                  <div className="friend-request-user">
                    <ChatItem name={"John Cena"} addinfo={"12 mutual friends"} svgHeight={"44px"} />
                    <div className="friend-request-btn">
                        <div className="btn-confirm">
                        <Button title={"Confirm"} bg_color={"#0066ff"} text_color={"#fff"} radius={"40px"} height={"36px"} width={"100px"} fontWeight={"600"}/>
                        </div>
                        <div className="btn-delete">
                        <Button title={"Delete"} bg_color={"#0066ff"} text_color={"#fff"} radius={"40px"} height={"36px"} width={"100px"} fontWeight={"600"}/>
                        </div>
                    </div>
                    
                  </div>

                  {/* ----------- */}
                  <div className="friend-request-user">
                    <ChatItem name={"John Cena"} addinfo={"12 mutual friends"} svgHeight={"44px"} />
                    <div className="friend-request-btn">
                        <div className="btn-confirm">
                        <Button title={"Confirm"} bg_color={"#0066ff"} text_color={"#fff"} radius={"40px"} height={"36px"} width={"100px"} fontWeight={"600"}/>
                        </div>
                        <div className="btn-delete">
                        <Button title={"Delete"} bg_color={"#0066ff"} text_color={"#fff"} radius={"40px"} height={"36px"} width={"100px"} fontWeight={"600"}/>
                        </div>
                    </div>
                    
                  </div>

                  {/* ----------- */}
                  <div className="friend-request-user">
                    <ChatItem name={"John Cena"} addinfo={"12 mutual friends"} svgHeight={"44px"} />
                    <div className="friend-request-btn">
                        <div className="btn-confirm">
                        <Button title={"Confirm"} bg_color={"#0066ff"} text_color={"#fff"} radius={"40px"} height={"36px"} width={"100px"} fontWeight={"600"}/>
                        </div>
                        <div className="btn-delete">
                        <Button title={"Delete"} bg_color={"#0066ff"} text_color={"#fff"} radius={"40px"} height={"36px"} width={"100px"} fontWeight={"600"}/>
                        </div>
                    </div>
                    
                  </div>
                  
                </div>


                {/* ==== */}
                <div className="request">
                  <div className="request-header">
                    <h1>Suggest Pages</h1>
                    <NavLink to="#" className="see-all"><span>See all</span></NavLink>
                  </div>
                  <div className="request-page">
                     <div className="request-page-img">
                      <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-rong.jpg" alt="page" />
                     </div>
                      <NavLink className="request-page-button" to="#">
                        <LikePage />
                        <span>Like Page</span>
                      </NavLink>
                  </div>
                  {/* ----------- */}
                  <div className="request-page">
                     <div className="request-page-img">
                      <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-rong.jpg" alt="page" />
                     </div>
                      <NavLink className="request-page-button" to="#">
                        <LikePage />
                        <span>Like Page</span>
                      </NavLink>
                  </div>
              
                </div>
                    {/* ===== */}
                <div className="request">
                    <div className="request-header">
                      <h1>Photos</h1>
                      <NavLink to="#" className="see-all"><span>See all</span></NavLink>
                    </div>
                    <div className="photos-gallery">
                      <div className="grid-item">
                          <img src="https://img2.thuthuatphanmem.vn/uploads/2018/11/17/hinh-anh-dep-phong-canh-anime_112650483.jpg" alt="" />
                      </div>
                      <div className="grid-item">
                          <img src="https://img2.thuthuatphanmem.vn/uploads/2018/11/17/hinh-anh-dep-phong-canh-anime_112650483.jpg" alt="" />
                      </div>
                      <div className="grid-item">
                          <img src="https://img2.thuthuatphanmem.vn/uploads/2018/11/17/hinh-anh-dep-phong-canh-anime_112650483.jpg" alt="" />
                      </div>
                      <div className="grid-item">
                          <img src="https://img2.thuthuatphanmem.vn/uploads/2018/11/17/hinh-anh-dep-phong-canh-anime_112650483.jpg" alt="" />
                      </div>
                      <div className="grid-item">
                          <img src="https://img2.thuthuatphanmem.vn/uploads/2018/11/17/hinh-anh-dep-phong-canh-anime_112650483.jpg" alt="" />
                      </div>
                      <div className="grid-item">
                          <img src="https://img2.thuthuatphanmem.vn/uploads/2018/11/17/hinh-anh-dep-phong-canh-anime_112650483.jpg" alt="" />
                      </div>
                      
                    </div>
                    <NavLink className="request-page-button" to="#">
                        <LikePage />
                        <span>More</span>
                      </NavLink>
                  </div>
              </div>
          </div>
        </div>
      </StyledHomePage>
    );
  };
  
  export default HomePage;