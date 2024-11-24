import { StyledNewFeed } from "./StyledNewFeed";
import { ReactComponent as Create } from "../../assets/img/Create.svg";
import { ReactComponent as LiveStream } from "../../assets/img/LiveStream.svg";
import { ReactComponent as Photo } from "../../assets/img/Photo.svg";
import { ReactComponent as Camera } from "../../assets/img/Camera.svg";
import ChatItem from "../ChatItem/ChatItem";
import TextArea from "antd/es/input/TextArea";
import Button from "../Button";
export const NewFeed:React.FC<Partial<any>> = (props) => {
    return (
        <StyledNewFeed>
            <div className="newfeed-header">
                <ChatItem name={"John Cena"} addinfo={"22 mins ago"} svgHeight={"44px"} />
            </div>
            <div className="newfeed-content">
                <div className="newfeed-content-desc">
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.
                        <span className="see-more">See more</span>
                    </span>
                    <div className="newfeed-content-media">
                        <img src="https://phongkhamdongphuong.net/wp-content/uploads/2022/04/hinh-anh-dep-1.jpg" alt="imgContent" className="media-pictures"/>
                    </div>
                </div>
            </div>
            <div className="newfeed-action">
                <div className="newfeed-action-like">
                    <div className="newfeed-action-like-item">
                        <img src="https://pngmark.com/wp-content/uploads/2023/02/Like-Dutton-image-1-1024x1024.png" alt="like" />
                        <img src="http://pluspng.com/img-png/heart-png-heart-png-image-free-download-2555.png" alt="like" />
                        <span>2.8K Like</span>
                    </div>
                    <div className="newfeed-action-like-item">
                        <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/12-512.png" alt="like" />
                        <span>400 Comments</span>
                    </div>
                </div>
                <div className="newfeed-action-share">
                    <div className="newfeed-action-like-item">
                        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2-2/256/Share-512.png" alt="like" />
                        <span>Share</span>
                    </div>
                </div>
                {/* <ChatItem name={"2.8K Like"}  svgHeight={"20px"} srcImg={"https://pngmark.com/wp-content/uploads/2023/02/Like-Dutton-image-1-1024x1024.png"}/> */}
            </div>
        </StyledNewFeed>
    )
}

export default NewFeed;