import React, {useEffect, useRef, useState} from 'react';
import {fetchPostFiles} from '../../service/post';
import {uploadFile} from '../../service/files';

import classes from './PostFiles.module.css';

function fallbackCopyTextToClipboard(text: string) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

export const PostFiles: React.FunctionComponent<{ postId: number; }> = ({postId}) => {
    const [files, setFiles] = useState<any[]>([]);
    const [copiedFileId, setCopiedFileId] = useState<number | null>(null)
    const timeout = useRef<any>(null);

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

    const onCopyFileUrl = (file: any) => () => {
        console.log('[obabichev] Clack', 123);
        console.log('[obabichev] file', file)
        fallbackCopyTextToClipboard(`![${file.filename}](${file.url})`)
        setCopiedFileId(file.id);
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
            setCopiedFileId(null);
            timeout.current = null;
        }, 5000)
    };

    console.log('[obabichev] copiedFileId', copiedFileId);
    console.log('[obabichev] timerout', timeout.current);

    return <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className={classes.uploadButtonContainer}
             style={{width: 150, height: 150, margin: 4, border: "dashed white 1px", borderRadius: 20}}>
            <div className={classes.uploadBtnWrapper}>
                <img className={classes.btn} style={{width: 80, height: 80, marginTop: 23}}
                     src="/images/upload.svg"/>
                <input type="file" name="myfile" onChange={onChangeHandler}/>
            </div>
        </div>
        <div className={classes.container}>
            {files.map(file => (
                <div className={classes.imageContainer} key={file.id}
                     onClick={onCopyFileUrl(file)}
                     style={{maxWidth: 150, minWidth: 150, height: 150, margin: 5, borderRadius: 20}}>
                    <img className={classes.darkerOnHover}
                         style={{maxWidth: 150, maxHeight: 150, borderRadius: 20}}
                         src={file.url}/>
                    <div style={{paddingTop: 55}}>
                        {copiedFileId === file.id ? 'Copied' : 'Click to copy URL'}
                    </div>
                </div>
            ))}
        </div>
    </div>
};
