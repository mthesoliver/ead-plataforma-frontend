
'use client'

import { FormControl, FormControlLabel, Radio, RadioGroup, Stack, StyledEngineProvider, Switch } from '@mui/material';
import useResize from 'Ead/CustomHooks/useResize';
import { useEffect, useState } from 'react';

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
    }, [color, theme])

    return (
        <StyledEngineProvider injectFirst>
            <Stack component={'div'} direction={'row'}>
                <FormControl>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={handleThemeToggle}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <RadioGroup row onChange={handleChange} value={color}>
                        <FormControlLabel value={0} control={<Radio />} label="" />
                        <FormControlLabel value={1} control={<Radio />} label="" />
                        <FormControlLabel value={2} control={<Radio />} label="" />
                    </RadioGroup>
                </FormControl>
            </Stack>
            <figure className="justify-content-center align-items-center">
                <img src={currentImg} width={!isMobile ? 1276 : 1276 / 3} height={!isMobile ? 830 : 830 / 3} alt="Layout personalizado" />
            </figure>
        </StyledEngineProvider>
    )
}

export default PersonalizePlataform;