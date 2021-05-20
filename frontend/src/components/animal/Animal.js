import {Button, Card} from 'antd';
import {Link} from 'react-router-dom';
import FemaleIcon from '../../images/female-gender.svg';
import MaleIcon from '../../images/male-gender.svg';

const { Meta } = Card;

export const Animal = ({animal}) => {
    return (
        <Link to={`/animals/${animal._id}`}>
            <Card
                hoverable
                cover={<img alt={animal.name} className={'animal-item-cover'} src={animal.images[0]} />}
                className="animal-item"
            >
                <img src={animal.male ? MaleIcon : FemaleIcon} alt={animal.name} className={'animal-item-icon'} />
                <Meta
                    title={`${animal.name}, ${animal.city}, ${animal.age}`}
                    description={`${animal.description ? animal.description.slice(0, 150) : 'На жаль, опис не додали'}... `} />
                <Button className={"animal-item-button"}>Перейти</Button>
            </Card>
        </Link>
    );
};