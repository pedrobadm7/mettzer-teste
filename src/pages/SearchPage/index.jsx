import React, { useState, useEffect } from "react";
import qs from "qs";

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
import Pagination from "../Pagination";

import api from "../../services/api";

const LIMIT = 11;

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    const fav = localStorage.getItem("@MettzerTest: favorite");
    const favs = JSON.parse(fav);
    if (favs) {
      setFavorites(favs);
    }
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      handleSearch();
    }
  }, [offset]);

  const handleSearch = async (event) => {
    const querySearch = {
      page: {
        limit: LIMIT,
        offset,
      },
    };

    if (query) {
      querySearch.filter = {
        query,
      };
    }

    event && event.preventDefault();
    try {
      const response = await api.get(
        `/articles/search/${query}?page=${offset}&pageSize=${LIMIT}&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=nMfsxcpWADFUvJ2dY53QrbZKOiEBH1XS`
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

  // debugger;
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
                  <h2>Autores:</h2> <p>{article.authors}</p>
                  <h2>Contribuidores:</h2>
                  <p>{article.contributors}</p>
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
        <Pagination
          limit={LIMIT}
          total={articles.totalHits}
          offset={offset}
          setOffset={setOffset}
        />
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
