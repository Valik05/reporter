// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { adSelectorType } from "../models/SDK/SDK";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type SdkContextType = {
    isReady: boolean,
    displayAd: (adContainerSelector: adSelectorType, baseCssVariables?: Record<string, string>) => void
};

type Props = { children: React.ReactNode };

const SdkContext = createContext<SdkContextType>({} as SdkContextType);

export const SdkProvider = ({ children }: Props) => {
    const [isReady, setIsReady] = useState<boolean>(false);

    const initializeSdk = useCallback(() => {
        if (window.TrafficGramSDKInstance) {
            window.TrafficGramSDK = window.TrafficGramSDKInstance.initialize(
                "RU9avyMHzBInI3Q1RBBSnBmRxpgKHOpu7YYJSgBx9q2ybgpgmSquO0QzmeTNvBi5"
            );
            console.log("SDK initialized");
        } else {
            console.warn("SDK already initialized or TrafficGramSDKInstance not available");
        }
        setIsReady(true)
    }, []);

    useEffect(() => { initializeSdk() }, [initializeSdk])

    const displayAd = useCallback((
        adContainerSelector: adSelectorType,
        baseCssVariables?: Record<string, string>
    ) => {
        if (window.TrafficGramSDK) window.TrafficGramSDK.displayAd(adContainerSelector, baseCssVariables)
        else console.error("SDK not ready or ad container not found for selector:", adContainerSelector);
    }, []);

    return (
        <SdkContext.Provider
            value={{ isReady, displayAd }}
        >
            {children}
        </SdkContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSdk = () => useContext(SdkContext);