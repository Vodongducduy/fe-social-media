import styled from "styled-components";
const StyledHomePage = styled.div`
    .home-content{
        height:2000px;
        flex: 72%;
        overflow-y: auto ;
        overflow-x: hidden ;
        background-color:var(--body-background);
        height: 100% !important;
        padding-bottom:40px;
        .home-content-wrapper{
            margin:12px 13%;
            background-color:var(--body-background);
            border-radius:12px;
            display: flex;
            .home-content-left{
                flex:2.5;
                overflow: hidden ;
                margin-right:16px;
                padding-bottom:20px;
            }
            .home-content-right{
                flex:1;
                background-color:var(--body-background);
                padding-bottom:20px;
                .request{
                    background-color:#fff;
                    padding:20px;
                    border-radius:20px;
                    margin-bottom:20px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    &-header{
                        margin-bottom:10px;
                        h1{
                            font-size:14px;
                            font-weight:bold;
                            color:#3f4346;
                        }
                        display: flex;
                        justify-content: space-between;
                        align-items:center ;
                        .see-all {
                            text-decoration:none !important;
                            color:#67a1fe;
                            font-weight:700;
                            font-size:12px;
                        }
                        
                    }
                    .friend-request-user{
                        margin-bottom:16px;
                        .friend-request-btn{
                            display: flex;
                            justify-content: space-between;
                            padding-top:8px;
                            .btn-confirm button{
                                background: linear-gradient(135deg, #0063ff, #008fff) !important;
                            }
                            .btn-delete button{
                                background-color: #eee !important ;
                                color:#7a7d81;
                            }   
                        }
                    }
                    .request-page{
                        margin-bottom:16px;
                        .request-page-img {
                            img{
                                width: 100%;
                                height: 172px;
                                border-radius: 16px !important;
                            }
                            /* background:  url("https://img4.thuthuatphanmem.vn/uploads/2020/07/04/hinh-nen-hoat-hinh-dep-va-cute_061913410.jpg") no-repeat center ;
                            background-size: contain;
                            background-clip: content-box; */
                        }
                        
                        
                        
                        
                    }
                    .photos-gallery {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr); 
                        grid-template-rows: repeat(3, 1fr);  
                        gap: 10px;
                        width: 100%;
                        max-width: 600px;
                        margin-bottom:10px;
                    }

                    .grid-item {
                        position: relative;
                        width: 100%;
                        height: 90px;;
                        overflow: hidden; 
                        border-radius: 10px; 
                    }

                    .grid-item img {
                        width: 100%; 
                        height: 100%;
                        object-fit: cover;
                        border-radius: 10px;
                    }
                    .request-page-button{
                            margin-top:6px;
                            display: flex;
                            align-items:center;
                            justify-content:center;
                            padding:0 20px;
                            height:42px;
                            background-color:#eeeeee;
                            border-radius:24px;
                            text-decoration:none;
                            color:#7a7d81;
                            font-size:14px;
                            font-weight:600;
                            span{
                                margin-left:10px;
                            }
                        }

                }
            }
       } 
    }
`;
export {StyledHomePage}