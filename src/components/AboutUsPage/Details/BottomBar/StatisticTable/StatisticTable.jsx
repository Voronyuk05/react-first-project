import { Table, LogoImg, Td, Th, ThBorder, TdBorder } from "./StatisticTable.styled";
import whiteLogoIcon from '../../../../../images/logo-white.png'

export function StatisticTable() {
    return (
        <Table>
            <thead>
                <tr>
                    <ThBorder>Отопление Красноярский край</ThBorder>
                    <ThBorder>Стоимость 1 Киловатт-час, Руб.</ThBorder>
                    <ThBorder>Начальные вложения от, Руб.</ThBorder>
                    <ThBorder>Траты за отопительный сезон</ThBorder>
                    <Th>Итого, Руб.</Th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <TdBorder>Газовое отопление</TdBorder>
                    <TdBorder>5</TdBorder>
                    <TdBorder>350 000</TdBorder>
                    <TdBorder>130 000</TdBorder>
                    <Td>1 800 000</Td>
                </tr>
                <tr>
                    <TdBorder><LogoImg  src={whiteLogoIcon}/></TdBorder>
                    <TdBorder>2,2</TdBorder>
                    <TdBorder>190 000</TdBorder>
                    <TdBorder>57 200</TdBorder>
                    <Td>762 000</Td>
                </tr>
            </tbody>
        </Table>
    )
}