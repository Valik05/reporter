import "./advertisement.css";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useSdk } from "../../context/useSdk";

const Advertisement = () => {
    const adContainerRef = useRef<HTMLDivElement | null>(null);
    const adContainerSelector = "#ad-placement-react";
    const { displayAd } = useSdk();
    useEffect(() => { displayAd(adContainerRef, adContainerSelector) }, [displayAd]);
    return (
        <article className={classNames("advertisement-container")}>
            <article ref={adContainerRef} id={adContainerSelector.substring(1)}></article>
        </article>
    )
};

export default Advertisement;
