import {Card, Image, List, Typography} from "antd";

const data = [
    '유경호',
    'abcd@naver.com',
    'kyungho git hub ',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const DashBoard = () => {
    return(
        <>
            <Card>
            <Image
                style={
                {
                    position: "relative", // 위치 조정 옵션
                    left: "10px",
                }
                }
                width={200}
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
            </Card>

            <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </>
    )
}
export default DashBoard;