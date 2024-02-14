import { List } from "./ObjectsList.styled";
import { ObjectItem } from "../ObjectItem/ObjectItem";
import { PrimaryButtonP } from "components/Global.styled";
import { useState } from "react";

export function ObjectList({objectsData}) {
    const [page, setPage] = useState(1)
    const pageObjects = page * 4

    function handleIncreasePage() {
        setPage(n => n + 1)
    }

    function handleDecreasePage() {
        setPage(1)
    }

    return (
        <>
            <List>
                {objectsData.map(({title, text, features, link, background}, index) => {
                    if (pageObjects > index) {
                        return (
                            <ObjectItem key={index} title={title} 
                            text={text} 
                            features={features} 
                            link={link} 
                            background={background} />
                        )
                    }
                })}
            </List>

            {pageObjects < objectsData.length ? (            
                <PrimaryButtonP onClick={handleIncreasePage}>
                    Смотреть еще проекты
                </PrimaryButtonP>
            ) : (
                <PrimaryButtonP onClick={handleDecreasePage}>
                    Вернутся
                </PrimaryButtonP>
            )}
        </>
    )
}