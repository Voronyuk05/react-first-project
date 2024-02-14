import { useState } from "react";
import { H2Small, HideButton, Input, H6, LightButton } from "components/Global.styled";
import { ModalForm } from "components/ModalForm/ModalForm";
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

export function ContactForm({modal, setModal}) {
    const [data, setData] = useState({
        name: '',
        number: '',
    })
    const [isSubmited, setIsSubmited] = useState(false)

    function handleInputChange(e) {
        const {name, value} = e.currentTarget
        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (data.name !== '' & data.number !== '') {
            setIsSubmited(true)
        } else {
            alert({
                text: 'Вы не указали все данные!'
            });
        }
    }


    return (
        <ModalForm status={modal} handleSubmit={handleSubmit} isSubmited={isSubmited} setModal={setModal}>
            <HideButton onClick={() => setModal(false)} />
            <H2Small color="#8963A7" transform='uppercase' weight='700'>Заполните форму для связи</H2Small>
            <Input name="name" value={data.name} onChange={handleInputChange} placeholder="Имя" />
            <Input name="number" value={data.number} onChange={handleInputChange} placeholder="+ 7 (800) 000-00-00"/>
            <H6 color='primary' align='center' weight='400'>При отправке запроса Вы соглашаетесь с <H6 color="#1F5EFF" align='center' weight='400'>Политикой персональных данных</H6></H6>
            <LightButton type="submit">Отправить</LightButton>
        </ModalForm>
    )
}