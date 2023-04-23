import {ReactSVG} from "react-svg";
import {useInView} from "react-intersection-observer";
var safeHtml = require('safe-html');

export const  Intro = ({dialog,titleSvg,button,title,text,arrow}) =>{
    const { ref, inView } = useInView({
        threshold: 0
    });


    return (
        <section ref={ref} className={`intro ${inView ? 'intro_in' : ''}`}>
            <div className="intro__bg">
                <div className={"intro__bg-item"}>
                    <img src={dialog} alt={'dialog'}/>
                </div>
            </div>
            <div className="intro__content">
                <div className="intro__title-svg">
                    <img src={titleSvg} alt={'title-svg'}/>
                </div>
                <button className={'intro__btn'}>{button.text}</button>
                <h1 className={'intro__title'}>{title}</h1>
                <p className={'intro__text'}>{safeHtml(text)}</p>
                <button className={'intro__btn-arrow'}>
                    <img src={arrow} alt={'intro-arrow'}/>
                </button>
            </div>

        </section>
    )
}