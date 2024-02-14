import { objectsData } from "./ObjectsData";
import { ObjectList } from "./ObjectsList/ObjectsList";
import { ObjectsComponent, ObjectsContainer } from "./Objects.styled";
import { H2, FontDark } from "components/Global.styled";

export function Objects() {
    return (
        <ObjectsComponent>
            <ObjectsContainer>
                <H2 color="primary" weight='300'>В России, Беларуси и Казахстане отапливается <FontDark>более 92 392 объектов</FontDark></H2>
                <ObjectList objectsData={objectsData}/>
            </ObjectsContainer>
        </ObjectsComponent>
    )
}