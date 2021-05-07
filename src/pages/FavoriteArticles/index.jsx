import React, { useState, useEffect } from "react";
import { ContainerList, ListArticles } from "../SearchPage/styles";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export default function FavoriteArticles() {
  const [favourites, setFavourites] = useState([]);
  const [article, setArticle] = useState([]);

  console.log(favourites);

  useEffect(() => {
    const fav = localStorage.getItem("@MettzerTeste: favourite");
    const favs = JSON.parse(fav);
    if (favs) {
      setFavourites(favs);
    }
  }, []);

  const removeItems = (item) => {
    const remove = localStorage.removeItem("@MettzerTeste: favourite", favourites.id);
    const removed = JSON.parse(remove);
    if (removed) {
      const findID = removed.findIndex(
        (favourites) => favourites.id == item.id
      );
      if (findID != -1) {
        removed.splice(findID, 1);
        localStorage.removeItem(
          "@MettzerTeste: favourite",
          JSON.stringify([...removed])
        );
        setFavourites([...removed]);
        return;
      }
    }
  };

  return (
    <div>
      {favourites.map((favourite) => {
        return (
          <ContainerList key={favourite.id}>
            <ListArticles>
              <section>
                <strong>{favourite.title}</strong>
                <p>{favourite.description}</p>
                <h2>Authors:</h2> <p>{favourite.authors}</p>
              </section>

              <button>
                {<IoIosHeart fontSize={26} color="red" onClick={removeItems} />}
              </button>
            </ListArticles>
          </ContainerList>
        );
      })}
    </div>
  );
}
