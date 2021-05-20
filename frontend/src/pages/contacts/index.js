import {LayoutPage} from '../../Layout';
import {Typography} from 'antd';

const ContactsPage = () => {
    return (
        <LayoutPage>
            <Typography.Title>Контакти</Typography.Title>
            <Typography.Title level={3}>Де нас знайти:</Typography.Title>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8599.311839996813!2d32.043903579392996!3d49.45092802038225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7d896dc7fb%3A0x46ba8d3c440ce6d5!2z0KfQtdGA0LrQsNGB0YHQutC40Lkg0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQkdC-0LPQtNCw0L3QsCDQpdC80LXQu9GM0L3QuNGG0LrQvtCz0L4!5e0!3m2!1sru!2sua!4v1621540576561!5m2!1sru!2sua"
                width="800" height="600" style={{'border': 0, 'marginBottom': '15px'}} title={'Де нас знайти'}allowFullScreen="" loading="lazy"></iframe>
            <Typography.Title level={3} style={{'marginBottom': '15px'}}>Телефони:</Typography.Title>
            <Typography.Text>
                Life: <a href="tel: +38 (063) 999 21 21">+38 (063) 999 21 21</a><br/>
                Kyivstar: <a href="tel: +38 (097) 999 21 21">+38 (097) 888 11 11</a><br/>
            </Typography.Text>

            <Typography.Title level={3} style={{'marginBottom': '15px'}}>Email:</Typography.Title>
            <Typography.Text>
                <a href="mailto: findPet@gmail.com">findPet@gmail.com</a>
            </Typography.Text>
        </LayoutPage>
    );
};

export default ContactsPage;
