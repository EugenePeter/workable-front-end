import styled from "styled-components";

import { NavLink } from "react-router-dom";

// const activeClassName = "active";
// const ActiveLink = styled(NavLink).attrs({ activeClassName })`
//     &.${activeClassName} {
//         text-decoration: none;
//     }
// `;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    &.active {
        color: green !important;
        font-size: 1.4rem;
    }
`;
