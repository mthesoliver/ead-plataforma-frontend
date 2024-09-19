import { useState, useEffect, useMemo } from "react";

export default function useResize() {
    let actualWidth = 1400 //window.innerWidth;
    const [innerWidth, setInnerWidth] = useState<number>(actualWidth);
    const [isMobile, setIsMobile] = useState<boolean>(innerWidth > 960);

    useEffect(() => {
        // Função para atualizar a largura da janela
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        // Adiciona um listener de resize
        window.addEventListener('resize', handleResize);

        // Limpa o listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }); // O listener é adicionado apenas uma vez

    useMemo(() => {
        // Atualiza o estado 'isMobile' com base na largura da janela
        setIsMobile(innerWidth <= 960);
    }, [innerWidth]);

    return { innerWidth, isMobile };
}