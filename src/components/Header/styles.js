import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  justify-content: space-between;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: flex;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
