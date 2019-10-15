import React from "react";
import { Container, Content, Profile } from "./styles";
import { Link } from "react-router-dom";

import Notifications from "~/components/Notifications";

import logo from "~/assets/logo-alt.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoStack" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Gabriel Araujo</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Gabriel Araujo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
