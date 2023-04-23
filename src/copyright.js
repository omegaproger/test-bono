export const header = {
    logo:'TYNY 2019',
    menu:[
        {
            href:"#",
            text:"Конференция"
        },
        {
            href:"#",
            text:"Программа"
        },
        {
            href:"#",
            text:"Спикеры"
        },
        {
            href:"#",
            text:"Фото"
        },
        {
            href:"#",
            text:"Материалы"
        }
    ],
    button:{
        text:"Регистрация"
    },
    icons:[
        {
            mod:"mail",
            src:"icons/mail.svg"
        },
        {
            mod:"fb",
            src:"icons/fb.svg"
        }
    ],
    burger:{
      active:"icons/cross.svg",
      icon:"icons/burger.svg"
    }
}
export const intro = {
   title:"Команда рекламного холдинга GroupM рада \n" +
       "открыть для вас двери digital-конференции NextM!",
   text:"NextM&nbsp;&mdash; это ежегодная digital-конференция, \n" +
       "организованная ведущей международной рекламной группой GroupM, входящей в&nbsp;состав коммуникационного холдинга WPP и&nbsp;представленной в&nbsp;России агентствами Mindshare, MediaCom и&nbsp;Wavemaker.",
   titleSvg:'images/intro/title.svg',
   dialog:"images/intro/dialog.svg",
   button: {
       text:"зарегистрироваться"
   },
   arrow:"icons/arrow.svg"
}

export const speakers = {
    title:"Спикеры",
    item:{
        photo:"images/speakers/photo.png",
        name:"Ярон Фаризон",
        position:"CEO MediaCom"
    }
}

export const connection = {
    title:"Отправить сообщение",
    inputs:[
        {
            className:'connection__input connection__input_name',
            placeholder:"Ваше имя",
            name: "name",
            type:"text"
        },
        {
            className:'connection__input connection__input_email',
            placeholder:"Email",
            name: "email",
            type:"text"
        },
        {
            tag:'textarea',
            className:'connection__input connection__input_massage',
            placeholder:"Ваше сообщение",
            name: "massage",
        },
        {
            className:'connection__input connection__input_btn',
            value:"отправить",
            type:"submit"
        }
    ],
    contacts:"info@groupmnextm.ru\n+7 (495) 641-40-80",
    info:{
        text:"Правовая информация",
        href:"#"
    }
}