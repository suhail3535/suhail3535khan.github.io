import React, { useEffect, useState } from "react";


import { FaWhatsappSquare } from "react-icons/fa";
import { Box, Button, Text } from "@chakra-ui/react";


export default function WhatsApp () {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 700) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Box
            onClick={isVisible ? scrollToTop : scrollToBottom}
            position="fixed"
            bottom="80px"
            right={["16px", "84px"]}
            zIndex={3}
        >
            <Button
                size={"sm"}
                bg={"transparent"}
                variant="solid"
                w={"50px"}
                h={"50px"}
                _hover={{ backgroundColor: "transparent" }}
                style={{ borderRadius: "50%", }}>
                <Text fontSize={"55px"} color={"#25D366"}>
                    <a
                        href="https://wa.me/919598125005"
                        target="_blank"
                        rel="noreferrer">
                        <FaWhatsappSquare />
                    </a>
                </Text>
            </Button>
        </Box>
    );
}