import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import photo from "../assets/2023-06-04 12.51.52.jpg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <Card style={{ width: "300px", margin: "0 auto" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>Об авторе</Card.Title>
        <Card.Body>
          <Card.Text>Привет!</Card.Text>
          <Card.Text>
            Меня зовут Кирилл Куренцов. Занимаюсь веб-разработкой с 2022 года.
            Успел реализовать несколько учебных и самостоятельных проектов.
          </Card.Text>
          <Card.Text>
            Наиболее качественным считаю проект веб-приложения для планирования
            графика отпусков, которое совместно с IT-подразделением организации
            внедрил для внутреннего использования (сервис позволяет сэкономить
            значительное время на решение этой задачи, стек - HTML, CSS, БЭМ, JS
            Date Format, localStorage, isDayOFF API) -
            https://github.com/Segodnya/vacation-calendar.
          </Card.Text>
          <Card.Text>
            В моем репозитории (https://github.com/Segodnya) запинены проекты,
            на которых практиковал навыки из стека, обозначенного в требованиях,
            и из сопутствующих областей: HTML, CSS (Flexbox, Grid,
            PixelPerfect), адаптивная и кроссбраузерная верстка по макетам из
            Figma, BEM (nested, flat), Vanilla JS, SwiperJS, VisJS, React,
            Express, MongoDB, но готов и открыт к изучению и других
            инструментов.
          </Card.Text>

          <Card.Text>
            Имею опыт прохождения код-ревью, правки в код вношу оперативно. В
            повседневной работе использую систему контроля версий Git (Github) и
            сборщики (Webpack), готов к командной работе. Сейчас изучаю
            Redux/MobX, TypeScript, Github Actions CI/CD.
          </Card.Text>
          <Card.Text>
            Мои контакты:
            <br />
            email: kurentsov.k@gmail.com
            <br />
            tg: @Segodnya
          </Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={handleBack}>
          Back to homepage
        </Button>
      </Card.Body>
    </Card>
  );
}

export default About;
