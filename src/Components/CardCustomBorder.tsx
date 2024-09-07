'use client'

import styles from 'Ead/Styles/_card-custom-border.module.scss';
import { useLayoutEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';


function CardCustomBorder(props: Readonly<{ icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>, title: string, content: string }>) {
    const [icon, setIcon] = useState<OverridableComponent<SvgIconTypeMap<{}, "svg">> | null>();

    useLayoutEffect(() => {
        if (icon !== null || icon !== undefined) {
            const givenIcon = props.icon;
            setIcon(givenIcon);
        } else {
            setIcon(null);
        }
    }, []);

    const cardBody = (
        <React.Fragment>
            <props.icon />
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 24, lineHeight: 1.2 }}>
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <props.icon />
            </CardActions>
        </React.Fragment >
    );

    return (
        <Box >
            <Card variant="outlined">{cardBody}</Card>
        </Box>

    )
}

export default CardCustomBorder;