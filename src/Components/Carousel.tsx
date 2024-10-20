import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Card, IconButton, StyledEngineProvider } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import useResize from "Ead/CustomHooks/useResize";

function Carousel({ children }: any) {
    const { isMobile } = useResize();
    // setting the state variables
    // cards will be the cards that are displayed
    const [cards, setCards] = useState<React.ReactElement[]>([]);
    // currentPage is the current page of the cards that is currently displayed
    const [currentPage, setCurrentPage] = useState(0);
    // slideDirection is the direction that the cards will slide in
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");

    // cardsPerPage is the number of cards that will be displayed per page
    // you can modify for your needs
    const cardsPerPage = isMobile ? 1 : 2;
    // this is just a dummy array of cards it uses the MUI card demo and repeats it 10 times
    const duplicateCards: React.ReactElement[] = Array.from(
        { length: children.length },
        (_, i) => <Card key={i} />
    );

    // these two functions handle changing the pages
    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => prevPage - 1);
    };

    // This useEffect is really just for demonstration purposes
    // it sets the cards to the duplicateCards array
    // you can remove this and replace it with your own useEffect
    // or if your page is static you can just set the cards to the array
    // at the top of the file
    useEffect(() => {
        setCards(duplicateCards);
        // eslint-disable-next-line
    }, []);
    // this sets the container width to the number of cards per page * 250px
    // which we know because it is defined in the card component
    const containerWidth = cardsPerPage * 400; // 400px per card

    return (
        //  outer box that holds the carousel and the buttons
        <StyledEngineProvider injectFirst>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "400px",
                    width: "100%",
                    marginTop: "40px",
                }}
            >
                <IconButton
                    onClick={handlePrevPage}
                    sx={{ margin: 2, color: "white" }}
                    disabled={currentPage === 0}
                >
                    {/* this is the button that will go to the previous page you can change these icons to whatever you wish*/}
                    <NavigateBeforeIcon sx={{ fontSize: 56 }} />
                </IconButton>
                <Box sx={{ width: `${containerWidth}px`, height: "100%", overflow: "visible" }}>
                    {/* this is the box that holds the cards and the slide animation,
        in this implementation the card is already constructed but in later versions you will see how the
        items you wish to use will be dynamically created with the map method*/}
                    {cards.map((card: React.ReactElement, index: number) => (
                        <Box
                            key={`card-${index}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                display: currentPage === index ? "block" : "none",
                            }}
                        >
                            {/* this is the slide animation that will be used to slide the cards in and out*/}
                            <Slide direction={slideDirection} in={currentPage === index}>
                                <Stack
                                    spacing={3}
                                    direction="row"
                                    alignContent="center"
                                    justifyContent="center"
                                    sx={{ width: "100%", height: "fit-content", gap: 3 }}
                                >
                                    {children.slice(
                                        index * cardsPerPage,
                                        index * cardsPerPage + cardsPerPage
                                    )}
                                </Stack>
                            </Slide>
                        </Box>
                    ))}
                </Box>
                <IconButton
                    onClick={handleNextPage}
                    sx={{ margin: 1, color: "white" }}
                    disabled={
                        currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
                    }
                >
                    <NavigateNextIcon sx={{ fontSize: 56 }} />
                </IconButton>
            </Box>
        </StyledEngineProvider>
    );
}

export default Carousel;