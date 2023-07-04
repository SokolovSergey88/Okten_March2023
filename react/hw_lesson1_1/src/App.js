import logo from './logo.svg';
import './App.css';
import './Simpsons.jsx';
import Simpsons from "./Simpsons";
import styles from "./Simpsons.module.css"

// 1. Описати всю сім
// 'ю сімпсонів (5 персонажів). Характеристики : ім‘я приізвище вік стать, фотографія (посиланням на зовнішній ресурс,тобто не локальна фотка) Інфу брати звідки завгодно,хоч придумайте. Але для цього є сайт який ви юзали на жс

function App() {
    return (
        <div className={styles.wrapper}>
            <Simpsons
                name={'Барт'}
                surname={'Сімпсон'}
                age={'10'}
                gender={"чоловіча"}
                img={"https://cs9.pikabu.ru/post_img/2019/12/07/8/157572336219063964.jpg"}
            />
            <Simpsons
                name={'Гомер'}
                surname={'Сімпсон'}
                age={'36'}
                gender={"чоловіча"}
                img={"https://phonoteka.org/uploads/posts/2022-09/1663418111_3-phonoteka-org-p-art-gomer-simpson-vkontakte-3.jpg"}
            />
            <Simpsons
                name={'Мардж'}
                surname={'Сімпсон'}
                age={'34'}
                gender={"жіноча"}
                img={"https://phonoteka.org/uploads/posts/2021-05/1622460742_34-phonoteka_org-p-mardzh-i-gomer-art-krasivo-34.jpg"}
            />
            <Simpsons
                name={'Ліза'}
                surname={'Сімпсон'}
                age={'8'}
                gender={"жіноча"}
                img={"https://img2.akspic.ru/crops/9/4/6/3/2/123649/123649-gomer_simpson-iskusstvo-mardzh_simpson-nebo-krasnyj_cvet-750x1334.jpg"}
            />
            <Simpsons
                name={'Меггі'}
                surname={'Сімпсон'}
                age={'1'}
                gender={"жіноча"}
                img={"https://avatars.mds.yandex.net/i?id=2d104415ec2aa5eee2fc1cfffc4527db-4885483-images-thumbs&n=13"}
            />
        </div>
    );
}

export default App;
