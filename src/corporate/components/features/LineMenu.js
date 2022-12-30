import React from 'react';
import '../../App.css';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BuildingFit from '../experiences/BuildingFit';
import IBM from '../experiences/IBM';
import FlexSim from '../experiences/FlexSim';
import LDSChurch from '../experiences/LDSChurch';
import BYUIAudio from '../experiences/BYUIAudio';
import ExcessEra from '../experiences/ExcessEra';
import Rogmoth from '../experiences/Rogmoth';
import Volunteer from '../experiences/Volunteer';
import media from '../../../media';

const PanelContent = styled.div`
    // text-align: center;
`;

const TabContent = styled.p`
    ${media.small`
        font-size: .9rem;
    `}
`;

const LineMenu = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <TabContent>IBM</TabContent>
                </Tab>
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
                    <IBM />
                </PanelContent>
            </TabPanel>
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
