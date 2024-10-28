import {Header} from "antd/es/layout/layout.js";


const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    position: 'fixed',        // 상단 고정
    top: 0,
    width: '100%',
    zIndex: 1,
};

const Layout =()=>{

    return(

        <Header style={headerStyle}>Header</Header>
    )

}
export default Layout