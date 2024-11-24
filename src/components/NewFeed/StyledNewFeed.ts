import styled from "styled-components";


export const StyledNewFeed = styled.div<any>`
    background-color:var(--header-bg-color) !important;;
    margin-top:20px;
    border-radius:20px;
    padding-bottom:20px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.05) !important;
    .newfeed-header{
        padding:20px 20px 10px 20px;
        span{
            color:var(--text-color);
        }
        
    }
    .newfeed-content{
        padding:0 20px;
        color:#bac1c7;
        font-size:14px;
        font-weight:500;
        line-height:26px;
        margin-bottom:10px;
        .see-more{
            color:#1f6dea;
            cursor: pointer;
            display: inline-block;
        }
        .media-pictures{
            margin-top:10px;
            width:100%;
            border-radius:6px;
            height:416px;
        }
    }
    .newfeed-action{
        padding:0 20px;
        display:flex;
        justify-content:space-between;
        align-items:center ;
        span{
            font-weight:500;
            color:var(--text-color);
            font-size:13px;
        }
        .newfeed-action-like
        ,.newfeed-action-share{
            display:flex;
            cursor: pointer;
            &-item{
                display:flex;
                justify-content:center ;
                align-items: center;
                margin-right:16px;
            }
            img{
                height:20px;
                width:20px;
                margin-right:4px;
            }
        }
    }
`