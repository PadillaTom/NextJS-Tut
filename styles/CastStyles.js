import css from 'styled-jsx/css';

const CastStyles = css`
  .cast__list {
    overflow-x: scroll;
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .cast__list > :global(li) {
    margin-right: 1rem;
  }
`;

export default CastStyles;
