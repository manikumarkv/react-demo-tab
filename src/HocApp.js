import React, {Component as fff} from 'react';
import alsfgdfgl, {add}  from "./components/hoc/mymodule";

import {
    PrimaryBanner, primaryButton as Cap ,
    WarningBanner, WarningButton,
    DangerBanner, DangerButton
} from './components/hoc/AppButton';



export default function HocApp(props) {
    all.mu()
    return (
        <>
            <div>hello</div>
            <Cap name="df">hello button</Cap>
            <WarningButton>warning button</WarningButton>
            <DangerButton>danger button</DangerButton>

            <PrimaryBanner>prim banner</PrimaryBanner>
            <WarningBanner>warning banner</WarningBanner>
            <DangerBanner>danger bannner</DangerBanner>

        </>
    )

}
