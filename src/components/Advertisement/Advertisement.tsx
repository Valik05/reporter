// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "./advertisement.css";
import classNames from "classnames";
import { useEffect, useRef } from "react";

const Advertisement = () => {
    const adContainerRef = useRef(null);
    const adContainerSelector = "#ad-placement-react";
    useEffect(() => {
        // Инициализация SDK (может быть выполнена в компоненте более высокого уровня)
        if (!window.trafficGramSDK && window.TrafficGramSDKInstance) {
            window.trafficGramSDK = window.TrafficGramSDKInstance.getInstance(
                "RU9avyMHzBInI3Q1RBBSnBmRxpgKHOpu7YYJSgBx9q2ybgpgmSquO0QzmeTNvBi5",
                adContainerSelector
            );
        }
        // Отображение рекламы
        if (window.trafficGramSDK && adContainerRef.current) {
            // Передайте конкретный селектор, использованный при инициализации,
            // или вызовите без аргументов, если он был установлен при инициализации
            window.trafficGramSDK.displayAd(adContainerSelector);
        } else {
            console.error("SDK не готов или контейнер рекламы не найден для селектора:", adContainerSelector);
        }
    }, []); // Выполняется один раз при монтировании компонента
    return (
        <article className={classNames("advertisement-container")}>
            <article ref={adContainerRef} id={adContainerSelector.substring(1)}></article>
        </article>
    )
};

export default Advertisement;
