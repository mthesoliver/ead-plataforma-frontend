'use client'

import styles from 'Ead/Styles/_video-placeholder.module.scss';
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";

function VideoPlaceholder(props: Readonly<{ videoId: string }>) {
    const stylesClass = styles.video_wrapper + ' ' + styles.video_overlay;
    const opts: YouTubeProps['opts'] = {
        height: '720',
        width: '1280',
        playerVars: {
            autoplay: 1,
            controls: 1,
        },
    };

    const handleOnReady: YouTubeProps['onReady'] = (event: YouTubeEvent) => {
        event.target.playVideo();
        console.log(event.target);
    }

    return (
        <section className={"text-center video_wrapper " + stylesClass}>
            <YouTube videoId={props.videoId} options={opts} id={styles.video_content} className={styles.video_content} onReady={handleOnReady} />
        </section>
    )
}

export default VideoPlaceholder;