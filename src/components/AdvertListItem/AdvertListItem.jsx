import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'redux/modal/modalSlice';
import {
  ItemLi,
  ItemImg,
  ItemText,
  ItemTextAdd,
  ItemTextCont,
  ItemTextContAdd,
  ItemButtonLearnMore,
  FavoriteBtn,
  FavoriteIcon,
} from './AdvertListItem.styled';
import {
  selectFavoriteAdverts,
  selectAllAdverts,
} from 'redux/adverts/adverts.selectors';
import { addToFavorites, removeFromFavorites } from 'redux/adverts/advertSlice';
import icons from './../../images/icons.svg';

const AdvertListItem = ({
  make,
  model,
  id,
  img,
  rentalPrice,
  year,
  type,
  address,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  functionalities,
  rentalConditions,
  rentalCompany,
  mileage,
}) => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector(state => selectFavoriteAdverts(state));
  const allAdverts = useSelector(state => selectAllAdverts(state));

  const handleClickToFavorite = item => {
    const favoriteItem = allAdverts.find(item => item.id === id);

    const isFavorite = favoriteAdverts.some(item => item.id === id);
    if (isFavorite) {
      dispatch(removeFromFavorites(favoriteItem));
    } else {
      dispatch(addToFavorites(favoriteItem));
    }
    return isFavorite;
  };

  return (
    <ItemLi key={id}>
      <ItemImg src={img} alt="car" />
      <FavoriteBtn type="button" onClick={() => handleClickToFavorite()}>
        <FavoriteIcon>
          <use href={icons + '#icon-heart'} />
        </FavoriteIcon>
      </FavoriteBtn>
      <ItemTextCont>
        <ItemTextContAdd>
          <ItemText>{make}</ItemText>
          <ItemText>{model}</ItemText>
          <ItemText>{year}</ItemText>
          <ItemText>{rentalPrice}</ItemText>
        </ItemTextContAdd>

        <ItemTextContAdd>
          <ItemTextAdd>{address.slice(address.indexOf(',') + 2)}</ItemTextAdd>
          <ItemTextAdd>{rentalCompany}</ItemTextAdd>
        </ItemTextContAdd>
        <ItemTextContAdd>
          <ItemTextAdd>{type}</ItemTextAdd>
          <ItemTextAdd>{make}</ItemTextAdd>
          <ItemTextAdd>{id}</ItemTextAdd>
          {/* <ItemTextAdd>{accessories[0]}</ItemTextAdd> */}
        </ItemTextContAdd>
      </ItemTextCont>

      <ItemButtonLearnMore
        onClick={() =>
          dispatch(
            openModal({
              make,
              model,
              id,
              img,
              rentalPrice,
              year,
              type,
              address,
              fuelConsumption,
              engineSize,
              description,
              accessories,
              functionalities,
              rentalConditions,
              mileage,
            })
          )
        }
        type="button"
      >
        Learn more
      </ItemButtonLearnMore>
    </ItemLi>
  );
};

export default AdvertListItem;