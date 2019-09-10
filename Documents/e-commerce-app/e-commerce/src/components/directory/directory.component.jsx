import React from 'react';
import '/Users/Tete/Documents/e-commerce-app/e-commerce/src/components/directory/directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

const Directory =({sections}) =>(
  <div className='directory-menu'>
      {sections.map(({title,imageUrl,id,size,linkUrl}) =>(
        <MenuItem  key={id} title={title.toUpperCase()} 
                                        imageUrl={imageUrl} 
                                        size={size}
                                        linkUrl={linkUrl}/>
      ))}

  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);