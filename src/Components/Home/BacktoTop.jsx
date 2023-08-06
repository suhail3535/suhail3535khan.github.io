import React, { useEffect, useState } from "react";
// import { ArrowUpIcon } from "@chakra-ui/icons";
// import { HiArrowSmDown } from "@chakra-ui/icons/hi";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Box, Button, Text } from "@chakra-ui/react";
import styles from "./Home.module.css";

export default function BackToTop () {
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
            if (window.pageYOffset > 500) {
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
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={3}>
            <Button id={styles.icon}
                size={"sm"}
                bg={"#167a92"}
                variant="solid"
                w={"50px"}
                h={"50px"}
                style={{ borderRadius: "50%" }}
            // border="1px solid #167a92"
            >
                <Text fontSize={"30px"} color={"#167a92"}>
                    {isVisible ? <AiOutlineArrowUp style={{ fontSize: "30px", color: "white" }} /> : <AiOutlineArrowDown style={{ fontSize: "30px", color: "white" }} />}
                </Text>
            </Button>
        </Box>
    );
}
