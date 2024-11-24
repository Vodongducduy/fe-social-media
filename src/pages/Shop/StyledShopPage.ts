import styled from "styled-components";
const StyledShopPage = styled.div`
    .shop-content{
        height:2000px;
        flex: 72%;
        overflow-y: auto ;
        overflow-x: hidden ;
        background-color:var(--body-background);
        height: 100% !important;
        .shop-content-wrapper{
            margin:12px 13%;
            background-color:var(--body-background);
            border-radius:12px;
            display: flex;
            .shop-content-left{
                flex:2.5;
                overflow: hidden ;
                margin-right:16px;
            }
            .shop-content-right{
                flex:1;
                background-color:blue;
            }
       } 
    }
`;
export {StyledShopPage}