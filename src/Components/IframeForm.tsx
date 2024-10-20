'use client'

import useResize from 'Ead/CustomHooks/useResize';
import * as React from 'react';

function IframeForm() {
    const { isMobile } = useResize();

    return (
        <iframe id='form_frame' src="/form/form.html" title="Crie seu curso online agora" allowFullScreen
            height={isMobile ? 550 : 450} style={{ marginTop: isMobile ? 50 : 10, minWidth: "500px!important" }}>
        </iframe>
    )
}

export default IframeForm;