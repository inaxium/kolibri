import React from "react";
import {
    Header,
    HeaderContainer, HeaderGlobalAction, HeaderGlobalBar, HeaderMenu,
    HeaderMenuButton, HeaderMenuItem, Tag,
    HeaderName,
    HeaderNavigation,
    SkipToContent
} from "carbon-components-react";
import {Catalog32, TableOfContents32} from "@carbon/icons-react";
import {Link} from "react-router-dom";

export default function TopMenu(props) {

    const showList = () => props.setMode(0),
            showDetails = () => props.setMode(1);

    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="IBM Platform Name">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <HeaderName element={Link} to="/" prefix="HAVDB">
                        [Benrrs]
                    </HeaderName>

                    <HeaderNavigation aria-label="HAVDB [Benrrs]">
                        <HeaderMenuItem element={Link} to="/benutzer">Benutzer</HeaderMenuItem>
                        <HeaderMenuItem>
                            <Tag type="blue" size="sm" title="Benutzerkennung">
                                {props.currentUser.benutzerkennung ? props.currentUser.benutzerkennung : "benutzer"}
                            </Tag>
                        </HeaderMenuItem>
                    </HeaderNavigation>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction id="showDetails"
                            aria-label="Details"
                            tooltipAlignment="end" onClick={showDetails}>
                            <Catalog32 />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction id="showList"
                            aria-label="Tabelle" onClick={showList}>
                            <TableOfContents32 />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
            )}
        />
    )
}