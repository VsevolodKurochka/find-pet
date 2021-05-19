import { Result, Button } from 'antd';
import { useHistory } from "react-router-dom";

const NotFound = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="На жаль, відвідана вами сторінка не існує."
            extra={<Button type="primary" onClick={handleClick}>Повернутися на головну</Button>}
        />
    );
};

export default NotFound;
