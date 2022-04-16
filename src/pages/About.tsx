import '../style/about.css';

const About = () => {
    return (
        <div className="about">
            <h2>Привет меня зовут Руслан это моё тестовое задание</h2>
            <p>
                Моё резюме на hh.ru -
                <a href="https://nn.hh.ru/resume/604ef2fcff0968a1850039ed1f6d4c37653631">
                    https://nn.hh.ru/resume/604ef2fcff0968a1850039ed1f6d4c37653631
                </a>
            </p>
            <p>
                Интересные репозиториии:
                <a href="https://github.com/ryslanukhlin/company">
                    https://github.com/ryslanukhlin/company
                </a>
                <a href="https://github.com/ryslanukhlin/NestAndNextShopPizza">
                    https://github.com/ryslanukhlin/NestAndNextShopPizza
                </a>
                <a href="https://github.com/ryslanukhlin/simple-chat">
                    https://github.com/ryslanukhlin/simple-chat
                </a>
            </p>
        </div>
    );
};

export default About;
