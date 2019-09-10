import React from 'react';
import {connect} from 'react-redux';
import {selectSpecificCollection} from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({match,collection}) =>{
   console.log(match); // important
   console.log(collection); // important
    console.log(match.params.collectionId); // important
    const {items,title} = collection;
   return ( 
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>)
};
// ownProps son las propiedades de nuestro componente
const mapStateToProps = (state,ownProps)=> ({
    collection:selectSpecificCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
