'use client'

import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from "Ead/Styles/_accordion.module.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { AccordionType } from 'Ead/Types/AccordionTpe';
import useResize from 'Ead/CustomHooks/useResize';

function AccordionCustom({ children, title, accordionIndex }: Readonly<AccordionType>) {
    const { isMobile } = useResize();

    return (
        <Accordion slotProps={{ heading: { component: 'h4' } }} className={`fw-bold p-2 px-${!isMobile ? 4 : 1} ` + styles.accordion_wrapper}>
            <AccordionSummary
                className={styles.accordion_summary_wrapper}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`tab-content`}
                id={accordionIndex}
            >
                <Typography sx={{ color: '#1C0237', fontSize: !isMobile ? 18 : 16 }} className="fw-bold ">
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                className={styles.accordion_summary_wrapper}>
                <Typography sx={{ color: '#1C0237', fontSize: !isMobile ? 16 : 13 }} className="fw-regular py-4">
                    {children}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCustom;