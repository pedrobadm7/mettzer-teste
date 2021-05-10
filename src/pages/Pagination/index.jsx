import React from "react";
import { Lista, Button } from "./styles";
import "./styles.css";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const onPageChange = (page) => {
    setOffset((page - 1) * limit);
    window.scrollTo(0, 0);
  };

  return (
    <Lista>
      <Button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
      >
        Anterior
      </Button>
      {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              className={
                page === current ? "pagination__item--active" : "pagination"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

      <Button
        onClick={() => onPageChange(current + 1)}
        disabled={current === pages}
      >
        Próxima
      </Button>
    </Lista>
  );
};

export default Pagination;
