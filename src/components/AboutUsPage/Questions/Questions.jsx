import { QuestionsComponent, QuestionsContainer, Person, PersonImg} from "./Questions.styled";
import { H2, H2Small } from "components/Global.styled";
import { QuestionsContent } from "./QuestionsContent/QuestionsContent";
import { ContactForm } from "components/ContactForm/ContactForm";
import { personData } from "./PersonData";
import { useState } from "react";


const randomPerson = Math.floor(Math.random() * 4)

export function Questions() {
    const [modal, setModal] = useState(false)

    return (
        <QuestionsComponent>
            <QuestionsContainer>
                <Person>
                    <PersonImg src={personData[randomPerson].img} />
                    <H2 color="white">{personData[randomPerson].name}</H2>
                    <H2Small weight='300' color='white' align='center'>{personData[randomPerson].post}</H2Small>
                </Person>
                <QuestionsContent setModal={setModal}/>
                <ContactForm modal={modal}  setModal={setModal} />
            </QuestionsContainer>
        </QuestionsComponent>
    )
}