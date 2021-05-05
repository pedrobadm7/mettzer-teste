import React, { useState } from "react";
import Mettzer from "../../assets/logoMettzer.png";
import {
  Header,
  SearchPageContainer,
  Text,
  Form,
  FormContainer,
  ContainerList,
  ListArticles,
} from "./styles.js";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import api from "../../services/api";

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const searchArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(
        `/articles/search/data?page=1&pageSize=20&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=nMfsxcpWADFUvJ2dY53QrbZKOiEBH1XS`
      );

      setArticles(response.data.data);
      console.log(articles, "articles");
    } catch (error) {}
  };

  const favouriteArticles = (item) => {
    const fav = localStorage.getItem("@MettzerTeste: favourite");
    const favs = JSON.parse(fav);
    if (favs) {
      const findId = favs.findIndex((favourite) => favourite.id === item.id);
      if (findId !== -1) {
        favs.splice(findId, 1);
        localStorage.setItem(
          "@MettzerTest: favourite",
          JSON.stringify([...favs])
        );
        setFavourites([...favs]);
        return;
      }

      localStorage.setItem(
        "@MettzerTeste: favourite",
        JSON.stringify([...favs, item])
      );
      setFavourites([...favs, item]);
    } else {
      localStorage.setItem("@MettzerTeste: favourite", JSON.stringify([item]));
      setFavourites([item]);
    }
  };

  return (
    <SearchPageContainer>
      <Header>
        <img src={Mettzer} alt="Logo da Mettzer" />
      </Header>
      <Text>Busque por artigos aqui!</Text>
      <FormContainer>
        <Form>
          <input placeholder="Digite o que deseja buscar" />
          <button onClick={searchArticle}>Pesquisar</button>
        </Form>

        <h1>Lista de artigos</h1>
        {articles.map((article) => {
          return (
            <ContainerList key={article.id}>
              <ListArticles>
                <section>
                  <strong>{article.title}</strong>
                  <p>{article.description}</p>
                  <h2>Authors:</h2> <p>{article.authors}</p>
                </section>

                <button>
                  {favourites.find(
                    (favourite) => favourite.id === article.id
                  ) ? (
                    <IoIosHeart
                      fontSize={26}
                      color="red"
                      onClick={() => {
                        favouriteArticles(article);
                      }}
                    />
                  ) : (
                    <IoIosHeartEmpty
                      fontSize={26}
                      color="red"
                      onClick={() => {
                        favouriteArticles(article);
                      }}
                    />
                  )}
                </button>
              </ListArticles>
            </ContainerList>
          );
        })}
      </FormContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;
