import { StyledPost } from "./StyledPost";
import { ReactComponent as Create } from "../../assets/img/Create.svg";
import { ReactComponent as LiveStream } from "../../assets/img/LiveStream.svg";
import { ReactComponent as Photo } from "../../assets/img/Photo.svg";
import { ReactComponent as Camera } from "../../assets/img/Camera.svg";
import TextArea from "antd/es/input/TextArea";
import Button from "../Button";
export const Post:React.FC<Partial<any>> = (props) => {
    return (
        <StyledPost>
           <div className="header-post">
                <div className="icon-post">
                    <div><Create /></div> 
                    
                </div>
                <div><span>Create Post</span></div>
            </div>
           <div className="create-post">
            <TextArea rows={4} placeholder="What's on your mind?"/>
           </div>
           <div className="button-post">
                <div className="button-post-item">
                  <LiveStream /> 
                    <Button title={"Live Video"} bg_color={"#fff"} fontSize={"12px"} text_color={"#74777a"} fontWeight={"600"}></Button>
                </div>
                <div className="button-post-item">
                    <Photo /> 
                    <Button title={"Photo/Video"} bg_color={"#fff"} fontSize={"12px"} text_color={"#74777a"} fontWeight={"600"}></Button>
                </div>
                <div className="button-post-item">
                <Camera /> 
                <Button title={"Feeling/Activity"} bg_color={"#fff"} fontSize={"12px"} text_color={"#74777a"} fontWeight={"600"}></Button>
                </div>
           
           </div>
        </StyledPost>
    )
}

export default Post;