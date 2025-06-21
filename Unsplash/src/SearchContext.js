import React, { useState, createContext, useEffect } from "react";
import { Dimensions, PermissionsAndroid, Alert } from 'react-native';
import fs from 'react-native-fs';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [ colors, setColors ] = useState([]);
    const [ name, setName ] = useState('');
    const [ error, setError ] = useState('');
    const [ imagesList, setImagesList ] = useState([]);
    const [ relatedImagesList, SetRelatedImagesList ] = useState([]);
    const [ selectedPhotoData, setSelectedPhotoData ] = useState([]);
    const [ storagePermission, setStoragePermission ] = useState( undefined );
    

    let screenWidth = Dimensions.get('window').width
    const imgWidth = ( screenWidth / 100 * 90 ) / 2;
    
    const API_URL = 'https://api.unsplash.com/photos';
    const API_KEY = 'CsV9QAAo8wipgvUxCcycAHiWKWVR24NS2wKAI21zBBQ';
    const ownPath = `${ fs.ExternalStorageDirectoryPath }/Pictures/Unsplash`;

    
    const requestStoragePermission = async () => {
        const status = await PermissionsAndroid.request(
            [
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            ]
        );
        setStoragePermission( status )
    };

    const checkPermisson = () => {
        if( storagePermission === PermissionsAndroid.RESULTS.GRANTED ) {
            return true;
        } else if ( storagePermission === PermissionsAndroid.RESULTS.DENIED || storagePermission === undefined ) {
            requestStoragePermission()
        } else {
            Alert.alert('You can`t download', 'Please give Storage Permission from settings for downloading photos and try again', [
                {
                    text: 'Don`t download',
                },
                {
                    text: 'OK',
                    onPress: () => setStoragePermission( undefined ),
                },
            ]);
        }
        return false
    };

    const downloadIMG = async ( link ) => {
        if ( checkPermisson() ) {
            makeOwnGalleryFile()
            
            await fs.downloadFile({
                fromUrl: link,
                toFile: ownPath,
                background: true,
                headers: {
                    Authorization: `Client-ID ${ API_KEY }`
                },
                progress: (res) => {
                    const progress = (res.bytesWritten / res.contentLength) * 100;
                    console.log(`Progress: ${progress.toFixed(2)}%`);
                },
            })
            .promise.then((response) => {
                console.log('File downloaded!', response);
            })
            .catch((err) => {
                console.log('Download error:', err);
            });
        }
    }
    const makeOwnGalleryFile = async () => {
        const isExisted = ( await fs.exists( ownPath ) );
        if ( !isExisted )  await fs.mkdir( ownPath );
    }

    const fetchData = () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Client-ID ${ API_KEY }`
            }
        }
        fetch( API_URL, options )
        .then( response => response.json() )
        .then( data => {
            if( data.errors ) {
                setError( data.errors[ 0 ] )
            } else {
                setImagesList( data );
            }
        })
    }

    const onRefresh = () => {
        setImagesList([])
        setError('');
        fetchData();
    }

    const addColor = ( newColor ) => setColors([ ...colors, Array.isArray( newColor ) ? newColor.join('_and_') : newColor ]);
    const removeColor = ( removeColor ) => setColors( colors.filter((item) => {
        if ( item != ( Array.isArray( removeColor ) ? removeColor.join('_and_') : removeColor ) ) return item;
    }));

    useEffect(() => {
        fetchData()
    }, [ name, colors ])

    return (
        <SearchContext.Provider value = {{
                colors,
                name,
                imagesList,
                imgWidth,
                selectedPhotoData,
                relatedImagesList,
                error,
                onRefresh,
                addColor,
                removeColor,
                setName,
                fetchData,
                setSelectedPhotoData,
                SetRelatedImagesList,
                downloadIMG,
            }}
        >
            { children }
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;