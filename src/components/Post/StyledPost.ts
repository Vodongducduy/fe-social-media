import styled from "styled-components";


export const StyledPost = styled.div<any>`
    margin-top:20px;
    background-color:var(--header-bg-color);
    height: 200px;
    border-radius:20px;
    padding:20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05) !important;

    .header-post{
        .icon-post{
            
            height:30px;
            width:30px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center ;
            background-color:#f5f5f5;
            padding:4px;
            margin-right:4px;
            svg{
                position:relative;
                top:2px;
            }
        }
        display:flex;
        align-items:center;
        flex-direction:row;
        margin-bottom:20px;
        span{
            color:#afb7bf;
            font-weight:600;
            font-size:14px;
            position:relative;
            top:-2px;
        }
    }
    .create-post{
        textarea{
            background-color:var(--body-background) !important;
            border:none;
            color:var(--text-color);
            &::placeholder{
                color:var(--text-color);
            }
        }
    }
    .button-post{
        display:flex;
        margin-top:20px;
        
        .button-post-item{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-right:10px;
            button{
                background-color:var(--header-bg-color) !important;
                color:var(--text-color);
            }
            
        }
    }
    
`