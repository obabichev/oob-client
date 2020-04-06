import React, {useEffect, useState} from 'react';
import {fetchPostFiles} from '../../service/post';
import {uploadFile} from '../../service/files';

import classes from './PostFiles.module.css';

export const PostFiles: React.FunctionComponent<{ postId: number; }> = ({postId}) => {
    const [files, setFiles] = useState<any[]>([]);

    useEffect(() => {
        fetchPostFiles(postId)
            .then(files => setFiles(files))
            .catch(error => {
                console.error(error.message);
            })
    }, []);

    const onChangeHandler = (event: any) => {
        console.log('[obabichev] event.target.files', event.target.files);
        uploadFile(event.target.files[0], postId)
            .catch(error => {
                console.error(error.message);
            })
    };

    return <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className={classes.uploadButtonContainer}
             style={{width: 150, height: 150, margin: 4, border: "dashed white 1px", borderRadius: 20}}>
            <div className={classes.uploadBtnWrapper}>
                <img className={classes.btn} style={{width: 100, height: 100, marginTop: 13}}
                     src="/images/upload.svg"/>
                <input type="file" name="myfile" onChange={onChangeHandler}/>
            </div>
        </div>
        <div className={classes.container}>
            {files.map(file => (<div style={{maxHeight: 150, margin: 5, borderRadius: 20}}>
                <img style={{maxWidth: 150, maxHeight: 150, borderRadius: 20}} src={file.url}/>
            </div>))}
        </div>
    </div>
};
