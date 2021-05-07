import React, { useState } from "react";
import { Header, Navigation, NavigationContainer } from "../SearchPage/styles";
import Mettzer from "../../assets/logoMettzer.png";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";

export default function FavoriteBar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Header>
      <img src={Mettzer} alt="Logo da Mettzer" />
      <CheeseburgerMenu isOpen={open} closeCallback={closeMenu}>
        <NavigationContainer>
          <Navigation to="/favoritearticles">Favoritos</Navigation>
        </NavigationContainer>
      </CheeseburgerMenu>
      <HamburgerMenu
        isOpen={open}
        menuClicked={openMenu}
        width={32}
        height={24}
        strokeWidth={3}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
    </Header>
  );
}
