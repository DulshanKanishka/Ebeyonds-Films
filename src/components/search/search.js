import React, {useState} from 'react';
import "./search.css";
import SearchIcon from '@mui/icons-material/Search';
import * as Apis from '../../service/apis';

const Search = (props) => {

    const [selectedSearchTxt, setSelectedSearchTxt] = useState('');
    const [autocompletedataisset, setautocompletedataisset] = useState(false);
    const [autocompletedata, setautocompletedata] = useState(<div className={'hidden-div'}></div>);

    const typedTxt = (event) => {
        setSelectedSearchTxt(event.target.value);
        setautocompletedata(<div className={'hidden-div'}></div>);
        if (selectedSearchTxt.length > 2) {
            searchFilms(selectedSearchTxt);
        } else if (selectedSearchTxt.length == 0) {
            setautocompletedata(<div className={'hidden-div'}></div>);

        } else if (selectedSearchTxt.length > 0) {
            setautocompletedata(<div className={'hidden-div'}></div>);
        } else {
            setautocompletedata(<div className={'hidden-div'}></div>);
        }
    };

    function extractAndRemovePTags(html) {
        // Define the regex pattern to match the content within the first <p> tags
        const pattern = /<p[^>]*>(.*?)<\/p>/;

        // Use the pattern to find a match in the HTML
        const match = html.match(pattern);

        // If a match is found, remove HTML tags from the captured text (group 1) and trim leading or trailing spaces
        // Otherwise, return an empty string
        return match ? match[1].replace(/<\/?[^>]+(>|$)/g, '').trim() : '';
    }

    const addItem = (data) => {
        console.log(data.show);
        const shortdesc = extractAndRemovePTags(data.show.summary);
        const arr = {
            image: data.show.image.original,
            title: data.show.name,
            shortDescription: shortdesc,
        }
        props.additems(arr);
        // let oldarray = props.itemsArray;
        // oldarray.push(arr);
        // props.setItemsArray(oldarray);
        // console.log('4')
        // console.log(oldarray)
        // console.log('oldarray')
        // console.log(arr);
    }

    function createautocomplete(datas) {
        let a = 0;
        const view = datas.map(function (data) {
            a++;
            if (a < 4) {
                let score = data.score * 100;
                let elem = <div className={'result'} onClick={() => addItem(data)}>
                    <div className='result-img-container'><img src={data.show.image.medium} alt=""
                                                               className={'result-img'}/></div>
                    <div className={'result-title-container'}><p
                        className={'result-title'}>{data.show.name} ( {data.show.language} )</p>
                        <p className={'result-rating'}>Rating {score.toFixed(2)}%</p></div>
                </div>
                return elem;
            }
        });
        if (selectedSearchTxt.length != 0) {
            setautocompletedata(view);

        }
    }

    const searchFilms = (name) => {
        Apis.searchFilms(name).then(r => {
            if (r.success) {
                createautocomplete(r.data);
            } else {

                alert("Error!", r.data?.message, "error");
            }
        }).catch(e => {
            alert("Something went wrong!", e.message ? e.message : 'Please contact your technical Team', "error");
        });
    }

    return (
        <div className={'search-bar-container'}>
            <div className="">
                <div className="row d-flex">
                    <div className="searchbar-holder">
                        <div className="card">
                            <div className="input-box">
                                <div className={'search-icon'}>
                                    <SearchIcon/>
                                </div>
                                {/*<div className={'search-close-icon'}>*/}
                                {/*    <CloseIcon/>*/}
                                {/*</div>*/}
                                <input type="text" className="form-control search-field"
                                       placeholder={'Search title and add to grid'}
                                       value={selectedSearchTxt} onChange={typedTxt}
                                />
                            </div>
                            <div className={'rating-container'}>
                                {autocompletedata}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Search;
