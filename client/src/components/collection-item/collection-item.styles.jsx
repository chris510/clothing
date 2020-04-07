import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 24.5vw;
  display: flex;
  flex-direction: column;
  height: 45rem;
  align-items: center;
  position: relative;

  &:hover {
    .image{
      opacity: 0.8;
      cursor: pointer;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`
export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  font-size: 2rem;
  justify-content: center;
  position: absolute;
  top: 33rem;
  display: none;
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`
export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const PriceContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`