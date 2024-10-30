'use client'

import { Box, StyledEngineProvider } from '@mui/material';
import styles from 'Ead/Styles/_video-placeholder.module.scss';
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

function VideoPlaceholder(props: Readonly<{ videoId: string }>) {
    const [openVideo, setOpenVideo] = useState(false);
    const stylesClass = styles.video_wrapper + ' ' + styles.video_overlay;
    const opts: YouTubeProps['opts'] = {
        height: '720',
        width: '1280',
        playerVars: {
            autoplay: 1,
            controls: 1,
        },
    };

    const handleOpenVideo = () => {
        setOpenVideo(!openVideo);
    }

    return (

        <StyledEngineProvider injectFirst>

            {openVideo && (
                <Box className={stylesClass}>
                    <YouTube videoId={props.videoId} options={opts} id={styles.video_content} />

                    <Box component={'a'} onClick={handleOpenVideo} sx={{ cursor: 'pointer' }}>
                        <CancelIcon sx={{ color: '#fff' }} className={'position-absolute ' + styles.cancel_icon} />
                    </Box>
                </Box>
            )}
            <Box component={'a'} className={styles.link_wrapper} onClick={handleOpenVideo} sx={{ cursor: 'pointer' }}>
                <PlayCircleOutlineIcon sx={{ color: '#fff' }} className={'position-absolute ' + styles.play_icon} />
                <span className={styles.echo_icon}></span>
            </Box>
            <Box component={"section"} className={'position-relative ' + styles.video_placeholder}>
                <Box component={"div"} className={'position-absolute d-flex justify-content-center align-items-center m-auto '}>
                    <img src='/assets/images/plataform_dash.png' className={styles.video_mock}></img>
                </Box>
            </Box>

        </StyledEngineProvider>
    )
}

export default VideoPlaceholder;