import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";


// Most of the css used are for window based view. We can try and make these elements flexible example
{/* <Text w="55%" fontSize="16px" fontWeight="500" color="#4f585e" marginTop="6%"></Text> use h3 or something with only change in color*/}
const Menu = () => {
    return (
        <Flex
            height={"762px"}
            flexWrap={"wrap"}
            justify="space-between"
        >
            {MenuData.map((e) => {
                return (
                    <Flex
                        key={e.id}
                        border="1.5px solid #dfe3e6"
                        w="32%"
                        h="110px"
                        borderRadius="md"
                        align="center"
                        textAlign="left"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{ boxShadow: "#16876e 0px 0px 5px 2px" }}
                    >
                        <Link to="/products">
                            <Flex h="112px" w="325px" p=" 20px">
                                <Flex w="28%">
                                    <Image w="90%" src={e.img} />
                                </Flex>
                                <Text w="55%" fontSize="16px" fontWeight="500" color="#4f585e" marginTop="6%">
                                    {e.catagory}
                                </Text>
                                <Text
                                    textAlign="right"
                                    w="25%"
                                    fontSize="14px"
                                    fontWeight="400"
                                    color="#0f847e"
                                >
                                    &nbsp; Upto {e.offer}% off
                                </Text>
                            </Flex>
                        </Link>
                    </Flex>
                );
            })}
        </Flex>
    );
};

export default Menu;
