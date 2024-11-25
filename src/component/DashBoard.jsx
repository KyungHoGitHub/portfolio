import {Layout, Card, Image, List, Table, Typography, Row, Col, Button, Menu} from "antd";
import {Link} from "react-router-dom";

const { Header, Content } = Layout;

const data = [
    '유경호',
    'abcd@naver.com',
    'kyungho git hub ',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const DashBoard = () => {
    return (
        <Layout>
            <Header style={{ backgroundColor: '#fff', padding: '0 20px', position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
                <Row>
                    <Col span={6}>
                        <h1 style={{ left:0 }}>Make your portfolio</h1>
                    </Col>
                    <Col span={6}>
                      <div>
                                <Link to="/project">Project</Link>
                      </div>
                    </Col>
                </Row>
            </Header>

            <Content style={{padding: '80px 20px 20px 20px', marginTop: '0px', backgroundColor: '#fff'}}>
                <Row gutter={16}>
                    {/* 이미지 섹션 */}
                    <Col span={6}>
                        <Image
                            width="100%"
                            preview={{
                                destroyOnClose: true,
                                imageRender: () => (
                                    <video
                                        muted
                                        width="100%"
                                        controls
                                        src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
                                    />
                                ),
                                toolbarRender: () => null,
                            }}
                            src="https://www.meconomynews.com/news/photo/202403/90179_110062_4024.jpg"
                        />
                    </Col>


                    {/* 테이블 섹션 */}
                    <Col span={12}>
                        <Table style={{width: '100%'}}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}/>
                {/* 카드 섹션 */}
                <Col span={6}>
                    <Card style={{height: 450}}>
                        <List
                            bordered
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Content>
        </Layout>
    );
};

export default DashBoard;
