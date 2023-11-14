import React, {useState} from 'react';
import "./films.css";
import Search from '../search/search'
import FilmOne from '../../assets/images/filmone.png'
import Filmtwo from '../../assets/images/filmtwo.png'
import Filmthree from '../../assets/images/filmthree.png'

const Films = () => {
    const [itemsArray, setItemsArray] = useState([
        {
            id: '1',
            image: FilmOne,
            title: 'Batman Returns',
            shortDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…',
        },
        {
            id: '2',
            image: Filmtwo,
            title: 'Wild Wild West',
            shortDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…',
        },
        {
            id: '3',
            image: Filmthree,
            title: 'The Amazing Spiderman',
            shortDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…',
        },
    ]
    );

    const removeItem = (index) => {
        const updatedArray = [...itemsArray];
        updatedArray.splice(index, 1);
        setItemsArray(updatedArray);
    }
    const additems = (item) => {
        if (!itemsArray.some(existingItem => existingItem.id === item.id)) {
            setItemsArray((itemsArray) => [...itemsArray, item]);
        } else {
            console.log('Item already exists:', item.title);
        }

    }
    return (
        <div className={'films-section'} id={'films'}>
            <div className={'films-header row'}>
                <div className={'films-title'}>
                    Collect your favourites
                </div>
                <div className={'film-search'}>
                    <Search itemsArray={itemsArray} setItemsArray={setItemsArray} additems={additems}/>
                </div>
            </div>
            <hr className={'films-title-hr'}/>
            <div className={'static-movies'}>
                {itemsArray.map((item, index) => (
                    <div className={' gap-between-films'} key={item.id}>
                        <div className={'static-movie-close-btn '} onClick={() => removeItem(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                                <path d="M0.786133 0H57.929V57.1429H0.786133V0Z" fill="#1D1D1D" fillOpacity="0.902"/>
                                <path d="M22.8926 22.1062L35.8225 35.0362" stroke="#B7B7B7" strokeWidth="2.28571"/>
                                <path d="M35.8232 22.1061L22.8933 35.036" stroke="#B7B7B7" strokeWidth="2.28571"/>
                            </svg>
                        </div>
                        <div className={'image-container'}>
                            <img src={item.image} alt="" className={'film-static-img'}/>
                        </div>
                        <div className={'film-static-details'}>
                            <h3 className={'film-static-title'}>{item.title}</h3>
                            <p className={'fil-static-desctription'}>{item.shortDescription}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default Films;
