import React, { useState } from 'react';
import '../../App.css';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import { Animated } from "react-animated-css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BuildingFit from '../experiences/BuildingFit';
import FlexSim from '../experiences/FlexSim';
import LDSChurch from '../experiences/LDSChurch';
import BYUIAudio from '../experiences/BYUIAudio';
import ExcessEra from '../experiences/ExcessEra';
import Rogmoth from '../experiences/Rogmoth';
import Volunteer from '../experiences/Volunteer';
import breakpoint from '../../breakpoints';

const PanelContent = styled.div`
    // text-align: center;
`;

const TabContent = styled.p`
    @media only screen and ${breakpoint.device.xs}{
        font-size: .9rem;
    }
`;

const LineMenu = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <TabContent>FlexSim</TabContent>
                </Tab>
                <Tab>
                    <TabContent>LDS Church</TabContent>
                </Tab>
                <Tab>
                    <TabContent>BuildingFit</TabContent>
                </Tab>
                <Tab>
                    <TabContent>BYU - Idaho</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Excess Era</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Rogmoth</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Volunteer</TabContent>
                </Tab>
            </TabList>

            <TabPanel>
                <PanelContent>
                    <FlexSim />
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <LDSChurch />
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <BuildingFit />
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <BYUIAudio />
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <ExcessEra />
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <Rogmoth />
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    <Volunteer />
                </PanelContent>
            </TabPanel>
        </Tabs>
    );
}



export default LineMenu;
