import "./advertisement.css";
import classNames from "classnames";
import { useEffect, useMemo } from "react";
import { useSdk } from "../../context/useSdk";
import { useSystemMsg } from "../../context/useSystemMsg";
import type { adSelectorItem } from "../../models/SDK/SDK";

const Advertisement = () => {
    const { displayAd } = useSdk();
    const { showSystemMsg } = useSystemMsg();
    const adSelectors: adSelectorItem[] = useMemo(() => {
        return [
            {
                selector: "#ad-placement-1",
                cssVariables: {
                    "--tg-ad-direct-background": "#4f5256",
                    "--tg-ad-direct-title-color": "#92c4f6",
                },
                checkActionCallback: () => showSystemMsg({ text: "Task is completed", type: "success" })
            },
            {
                selector: "#ad-placement-2",
                checkActionCallback: () => showSystemMsg({ text: "Task is completed", type: "success" })
            },
            {
                selector: "#ad-placement-3",
                checkActionCallback: () => showSystemMsg({ text: "Task is completed", type: "success" })
            },
            {
                selector: "#ad-placement-4",
                checkActionCallback: () => showSystemMsg({ text: "Task is completed", type: "success" })
            }
        ]
    }, [showSystemMsg])
    useEffect(() => {
        displayAd(adSelectors)
    }, [displayAd, showSystemMsg, adSelectors]);
    return (
        <article className={classNames("advertisement-container")}>
            <article id={adSelectors[0].selector.substring(1)} ></article>
            <article id={adSelectors[1].selector.substring(1)} data-format="banner"></article>
            <article id={adSelectors[2].selector.substring(1)} ></article>
            <article id={adSelectors[3].selector.substring(1)} ></article>
        </article>
    )
};

export default Advertisement;
