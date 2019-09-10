import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats:1,
    sneackers:2,
    jackets:3,
    womens:4,
    mens:5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// aqui convertimos nuestro objeto en un array para poder usarlo en el collection overview component 
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

/*
Usamos find cuando teniamos un array en vez de un objeto
export const selectSpecificCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );*/

  export const selectSpecificCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    );