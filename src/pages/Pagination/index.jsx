import React from "react";
import { Lista } from "./styles";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <Lista>
      {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button onClick={() => setOffset(page)}>
              {page}
            </button>
          </li>
        ))}
    </Lista>
  );
};

export default Pagination;
