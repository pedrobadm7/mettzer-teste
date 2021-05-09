import React, { useState, useEffect } from "react";

import {
  SearchPageContainer,
  Text,
  Form,
  FormContainer,
  ContainerList,
  ListArticles,
  Header,
} from "./styles.js";

import Mettzer from "../../assets/logoMettzer.png";
import { IoIosHeart, IoIosHeartEmpty, IoIosRemoveCircle } from "react-icons/io";
import ReactPaginate from "react-paginate";

import api from "../../services/api";

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fav = localStorage.getItem("@MettzerTest: favorite");
    const favs = JSON.parse(fav);
    if (favs) {
      setFavorites(favs);
    }
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await api.get(
        `/articles/search/${query}?page=1&pageSize=20&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=nMfsxcpWADFUvJ2dY53QrbZKOiEBH1XS`
      );

      setArticles(response.data.data);

      console.log(articles, "articles");
    } catch (error) {}
  };

  const handleFavorites = (article) => {
    const fav = localStorage.getItem("@MettzerTest: favorite");
    const favs = JSON.parse(fav);
    if (favs) {
      const findId = favs.findIndex((favorite) => favorite.id === article.id);
      if (findId !== -1) {
        favs.splice(findId, 1);
        localStorage.setItem(
          "@MettzerTest: favorite",
          JSON.stringify([...favs])
        );
        setFavorites([...favs]);
        return;
      }

      localStorage.setItem(
        "@MettzerTest: favorite",
        JSON.stringify([...favs, article])
      );
      setFavorites([...favs, article]);
    } else {
      localStorage.setItem("@MettzerTest: favorite", JSON.stringify([article]));
      setFavorites([article]);
    }
  };

  return (
    <SearchPageContainer>
      <Header>
        <img src={Mettzer} alt="Logo da Mettzer" />
      </Header>
      <Text>Lista de artigos</Text>
      <FormContainer>
        <Form>
          <input
            type="text"
            placeholder="Pesquise seu artigo aqui..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          {query.length > 0 ? (
            <button onClick={handleSearch}>Exibir artigos</button>
          ) : (
            <button disabled>Exibir artigos</button>
          )}
        </Form>

        <h1>Artigos</h1>
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
                  {favorites.find(
                    (favourite) => favourite.id === article.id
                  ) ? (
                    <IoIosHeart
                      fontSize={26}
                      color="red"
                      onClick={() => {
                        handleFavorites(article);
                      }}
                    />
                  ) : (
                    <IoIosHeartEmpty
                      fontSize={26}
                      color="red"
                      onClick={() => {
                        handleFavorites(article);
                      }}
                    />
                  )}
                </button>
              </ListArticles>
            </ContainerList>
          );
        })}

        <ContainerList>
          <h1>Favoritos</h1>
          {favorites.map((favs) => {
            return (
              <ListArticles key={favs.id}>
                <section>
                  <strong>{favs.title}</strong>
                  <p>{favs.authors}</p>
                </section>
                <button>
                  <IoIosRemoveCircle
                    fontSize={26}
                    color="red"
                    onClick={() => {
                      handleFavorites(favs);
                    }}
                  />
                </button>
              </ListArticles>
            );
          })}
        </ContainerList>
      </FormContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;
