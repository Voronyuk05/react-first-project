import { useState } from "react";
import { ButtonBack, Arrow, WrapperOptions, OptionButton } from './ConsultationForm.styled'
import { H2Small, HideButton, Input, H6, Paragraph, ItemTitle, LightButton } from "components/Global.styled";
import { ModalForm } from 'components/ModalForm/ModalForm';
import { consultationData } from "./СonsultationData";
import returnArrowIcon from '../../../../images/return-arrow.png'
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

export function ConsultationForm({modal, setModal}) {
    const [isSubmited, setIsSubmited] = useState(false)
    const [page, setPage] = useState(0)
    const [data, setData] = useState({})
    const [area, setArea] = useState()

    function handleDataChange(name, value, call) {
        setData({
            ...data,
            [name]: value
        })
        call ? setPage(consultationData.length) : setPage(n => n + 1)
    }

    function handleInputChange(e) {
        if (e.currentTarget.name === 'area') {
            setArea(e.currentTarget.value)
        } else {
            setData({
                ...data,
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (data.name !== undefined & data.number !== undefined & data.name !== '' & data.number !== '') {
            setIsSubmited(true)
        } else {
            alert({
                text: 'Вы не указали все данные!'
            });
        }
    }
    
    return (
            <ModalForm status={modal} setModal={setModal} isSubmited={isSubmited} handleSubmit={handleSubmit}>
                <HideButton onClick={() => setModal(false)} />
                {page === consultationData.length ? (
                    <>
                        <HideButton onClick={() => setModal(false)} />
                        <H2Small color="#8963A7" transform='uppercase' weight='700'>Заполните форму для связи</H2Small>
                        <Input name="name" value={data.name} onChange={handleInputChange} placeholder="Имя" />
                        <Input name="number" value={data.number} onChange={handleInputChange} placeholder="+ 7 (800) 000-00-00"/>
                        <H6 color='primary' align='center' weight='400'>При отправке запроса Вы соглашаетесь с <H6 color="#1F5EFF" align='center' weight='400'>Политикой персональных данных</H6></H6>
                        <LightButton type="submit">Отправить</LightButton>
                    </>
                ) : consultationData.map(({name, title, paragraph, direction, options, rights}, index) => {
                        return page === index ? (
                            <>
                                <H2Small color="#8963A7" transform='uppercase' weight='700'>{title}</H2Small>
                                {paragraph ? (
                                    <Paragraph align='center' weight='600' color='primary'>{paragraph}</Paragraph>
                                ) : null}
                                {direction ? (
                                        <ItemTitle align='center' weight='700' color='primary'>{direction}</ItemTitle>
                                ) : null}
                                <WrapperOptions>
                                    {options.map(({type, width, height, placeholder, value, call}) => {
                                        if (type === 'button') {
                                            return (
                                                <OptionButton type="button" width={width} height={height} value={data[name]} option={value} onClick={() => handleDataChange(name, value, call)}>
                                                    {value}
                                                </OptionButton>
                                            )
                                        } else if (type === 'input') {
                                            return (
                                                <Input name={name} value={area} width={width} onChange={handleInputChange} placeholder={placeholder} />
                                            )
                                        } else if (type === 'send') {
                                            return (
                                                <OptionButton type="button" width={width} onClick={() => handleDataChange(name, area)}>
                                                    {value}
                                                </OptionButton>
                                            )
                                        }
                                    })}
                                </WrapperOptions>
                                {rights ? (
                                    <H6 color='primary' align='center' weight='400'>При отправке запроса Вы соглашаетесь с <H6 color="#1F5EFF" align='center' weight='400'>Политикой персональных данных</H6></H6>
                                ) : null}
                            </>
                        ) : null
                    })
                }
                {page !== 0 ? (
                    <ButtonBack type='button' onClick={() => setPage(n => n - 1)}>
                        <Arrow src={returnArrowIcon}/>
                        Назад
                    </ButtonBack>
                ) : null}
            </ModalForm>
    )
}