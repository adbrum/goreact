import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 50px;
  background: #ffffff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  img {
    width: 32px;
  }

  strong {
    font-size: 18px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666666;
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999999;
        font-style: italic;
      }
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;
