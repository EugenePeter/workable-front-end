import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { toggleModalAction } from "../../redux/modal/modal.action";

import { Container, Modifiers } from "../../global-styles/global-styles";

import LeftSideBarInner from "./left-sidebar.component";

import {
    ThreeColumns,
    LeftSideBar,
    MiddleBar,
    RightSideBar,
    ChannelIcons,
    ChannelWrapper,
    Title,
    AddChannelIcon,
} from "./home-page.styles";

import { StyledLink } from "../../global-styles/nav-links.style";

import ChatComponent from "../chat-component/chat-component";
import AddChannelsModal from "../modal/add-channels-modal";

const HomePage = (props) => {
    const { toogleModalDispatch } = props;

    const handleLeave = async (e) => {
        e.preventDefault();
        await localStorage.removeItem("token");
        await localStorage.removeItem("username");

        props.history.push("/login");
    };

    return (
        <Router>
            <Container>
                <Modifiers />
                <AddChannelsModal />
                <ThreeColumns>
                    <LeftSideBar className="padding-left padding-top">
                        <LeftSideBarInner />
                    </LeftSideBar>
                    <MiddleBar>
                        <Switch>
                            <Route path="/channels/:name">
                                <ChatComponent />
                            </Route>
                        </Switch>
                    </MiddleBar>
                    <RightSideBar className="padding-right padding-top">
                        <h3 className="padding-left">Online</h3>
                        <button onClick={handleLeave}>Leave Room?</button>
                        <StyledLink
                            className="text-decoration"
                            exact
                            to="/channels/software-engineering"
                        >
                            <ChannelWrapper right>
                                <ChannelIcons />
                                <h5>Eugene</h5>
                            </ChannelWrapper>
                        </StyledLink>
                        <StyledLink to="/channels/UX-design">
                            <ChannelWrapper right>
                                <ChannelIcons />
                                <h5>Jennifer</h5>
                            </ChannelWrapper>
                        </StyledLink>
                        <StyledLink to="/channels/marketing">
                            <ChannelWrapper right>
                                <ChannelIcons />
                                <h5>poy</h5>
                            </ChannelWrapper>
                        </StyledLink>

                        <StyledLink to="/channels/operations">
                            <ChannelWrapper right>
                                <ChannelIcons />
                                <h5>Operations</h5>
                            </ChannelWrapper>
                        </StyledLink>
                    </RightSideBar>
                </ThreeColumns>
            </Container>
        </Router>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toogleModalDispatch: (value) => dispatch(toggleModalAction()),
});

const mapStateToProps = (state) => ({
    username: state.loginUser.username,
    isOnline: state.loginUser.isOnline,
    id: state.loginUser.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));
