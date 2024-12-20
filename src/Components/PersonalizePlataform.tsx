
'use client'

import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Stack, StyledEngineProvider, Switch } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';
import { useEffect, useState } from 'react';
import styles from 'Ead/Styles/_personalize-plataform.module.scss';

function PersonalizePlataform() {
    const { isMobile } = useResize();

    const darkTheme = [
        '/assets/images/colorful_platform/colorful_platform_dark_purple.png',
        '/assets/images/colorful_platform/colorful_platform_dark_green.png',
        '/assets/images/colorful_platform/colorful_platform_dark_yellow.png',
    ];
    const lightTheme = [
        '/assets/images/colorful_platform/colorful_platform_light_purple.png',
        '/assets/images/colorful_platform/colorful_platform_light_green.png',
        '/assets/images/colorful_platform/colorful_platform_light_yellow.png',
    ];
    const [theme, setTheme] = useState('dark');
    const [color, setColor] = useState('0');
    const [currentImg, setCurrentImg] = useState(darkTheme[parseInt(color)]);

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor((event.target as HTMLInputElement).value);
        handleCurrentImg();
    };

    const handleCurrentImg = () => {
        if (theme === 'dark') {
            setCurrentImg(darkTheme[parseInt(color)]);
        } else {
            setCurrentImg(lightTheme[parseInt(color)]);
        }
    }

    useEffect(() => {
        handleCurrentImg();
    }, [color, theme, isMobile])

    return (
        <StyledEngineProvider injectFirst>
            <Box className={`d-flex flex-row position-relative `}>
                <img src="../assets/images/arrow/arrow_curve_banner.svg" className={'position-absolute ' + styles.arrow}></img>
                {!isMobile ? (
                    <Stack component={'div'} className={`d-flex flex-row row  `}>
                        <FormControl className={`d-flex flex-row gap-${!isMobile ? 4 : 1} position-absolute ` + styles.controls_wrapper}>
                            <Switch
                                checked={theme === 'dark'}
                                onChange={handleThemeToggle}
                                inputProps={{ 'aria-label': 'controlled' }}
                                className={styles.switch_theme}
                            />
                            <RadioGroup row onChange={handleChange} value={color} className={`d-flex flex-row`}>
                                <FormControlLabel id="color_dot_1" value={0} control={<Radio />} label="" />
                                <FormControlLabel id="color_dot_2" value={1} control={<Radio />} label="" />
                                <FormControlLabel id="color_dot_3" value={2} control={<Radio />} label="" />
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                ) : (
                    <Stack component={'div'} className={`d-flex flex-row row  `}>
                        <FormControl className={`d-flex flex-row gap-${!isMobile ? 4 : 1} position-absolute ` + styles.controls_wrapper}>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={handleThemeToggle}
                        inputProps={{ 'aria-label': 'controlled' }}
                                    className={styles.switch_theme}
                    />
                                <RadioGroup row onChange={handleChange} value={color} className={`d-flex flex-row`}>
                                    <FormControlLabel id="color_dot_1" value={0} control={<Radio />} label="" />
                                    <FormControlLabel id="color_dot_2" value={1} control={<Radio />} label="" />
                                    <FormControlLabel id="color_dot_3" value={2} control={<Radio />} label="" />
                    </RadioGroup>
                </FormControl>
                        </Stack>
                )}

            <figure className="justify-content-center align-items-center">
                    <img src={currentImg} width={!isMobile ? 1276 : 1276 / 3} height={!isMobile ? 830 : 830 / 3} alt="Layout personalizado" className={styles.screen} />
            </figure>
            </Box>
        </StyledEngineProvider>
    )
}

export default PersonalizePlataform;