import React from 'react';
import '/Users/Tete/Documents/e-commerce-app/e-commerce/src/components/directory/directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component {
    constructor(){
        super();
        this.state={
            sections:[
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'Jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'Mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title,imageUrl,id,size,linkUrl}) =>(
                    <MenuItem  key={id} title={title.toUpperCase()} 
                                        imageUrl={imageUrl} 
                                        size={size}
                                        linkUrl={linkUrl}/>
                ))}

            </div>
        )
    }
}

export default Directory;