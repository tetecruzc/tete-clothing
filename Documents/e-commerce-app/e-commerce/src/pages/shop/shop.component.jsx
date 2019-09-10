import React from 'react';

import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// aqui tenemos acceso a match, location y history, porque en el App.js al hacer route, pasamos estos 3 objetos al hijo
// match.path = /shop
const ShopPage = ( {match })=> (
  <div className=''>
      <Route  exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);


export default ShopPage;