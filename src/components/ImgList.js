import React from 'react';
import Img from './Img';

const ImgList = ({imgList}) => {
    return ( 
        <div className="col-12 p-5 row">
            {imgList.map(img => (
                <Img
                    key={img.id}
                    img={img}
                />
            ))}
        </div>
     );
}
 
export default ImgList;