import { QuestionsContentComponent, ContentTitle, ContentText, Contacts, ContactButton, ContactLink } from './QuestionsContent.styled'
import { H2, H2Small, H3, Paragraph} from "components/Global.styled";

export function QuestionsContent({setModal}) {
    return (
        <QuestionsContentComponent>
            <ContentTitle>
                <H2 color="white" transform='uppercase'>Остались вопросы?</H2>
                <H2Small weight='300' color='white' align='center'>Будем рады ответить на них в рабочее время </H2Small>
            </ContentTitle>
            <ContentText>
                <H3 align='center' color="white" weight='400'>Вы можете связаться с нами в мессенджерах, или дождаться звонка </H3>
                <Contacts>
                    <ContactLink href="https://www.whatsapp.com/?lang=uk">WhatsApp</ContactLink>
                    <ContactLink href="https://web.telegram.org/a/">Telegram</ContactLink>
                </Contacts>
                <ContactButton onClick={() => setModal(true)}>Позвоните, у меня остались вопросы</ContactButton>
                <Paragraph color='#B3B3B3' weight='500' align='center'>Нажимая на кнопку отправки, вы даете согласие на обработку своих персональных данных</Paragraph>
            </ContentText>
        </QuestionsContentComponent>
    )
}