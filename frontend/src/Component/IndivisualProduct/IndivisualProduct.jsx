import { Box, Button, Center, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import "./IndividualProduct.css"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIndividualProducts } from "../../Redux/Products/action";
import Security from "../healthcare/Security";
import SimilarProductCarousal from "./SimilarProductCarousal";


const IndividualProduct = () => {
  const loading = useSelector((store) => store.products.isLoading)
  const error = useSelector((store) => store.products.isError)
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIndividualProducts({ id: id }))
  }, [dispatch, id])
  const [data, setData] = useState()
  const [showImg, setShowImg] = useState();
  
  const individualProduct = useSelector((store) => store.products.individualProduct);
  useEffect(() => {
    setData(individualProduct)
    console.log('data:', data)
    setShowImg(individualProduct?.img1)
  }, [dispatch, individualProduct])


  return (
    <Box px="40px" >
      {loading &&
        <p style={{ textAlign: "center", alignItems: "center", marginTop: "100px", fontSize: 30, fontWeight: 600, color: "green" }}>Loading...</p>
      }
      {error &&
        <p style={{ textAlign: "center", alignItems: "center", marginTop: "100px", fontSize: 25, fontWeight: 600,color:"red" }}>Something went wrong</p>
      }
      {!loading && !error &&
        <Box>
          <Flex className="content" justify="space-between">
            <div className="leftInd" >
              <Box >
                <Flex className="product" h="340px" justify="space-between">
                  <Flex
                    className="img"
                    w="30%"
                    // border="1px solid black"
                    direction="column"
                    justify="space-between"
                    position="relative"
                  >
                    <Flex
                      overflow="hidden"
                      h="76%"
                      border="1.5px solid #e5e5e5"
                      borderRadius="md"
                      align="center"
                      justify="center"
                      p="10px"
                      cursor="pointer"
                    >
                      <div className="figure" style={{ padding: "0px" }}>
                        <img className="image-main" src={showImg} alt="" />
                        <img className="image-hover" src={individualProduct?.img2} alt="" />
                      </div>
                    </Flex>
                    <Flex h="20%" justify="space-between" onMouseLeave={() => { setShowImg(individualProduct?.img1) }}>
                      <Center
                        onMouseEnter={() => { setShowImg(individualProduct?.img2) }}
                        overflow="hidden"
                        className="img1"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{ transform: "scale(1.2)", transition: "all 0.4s ease" }}
                          src={individualProduct?.img2}
                        />
                      </Center>
                      <Center
                        onMouseEnter={() => { setShowImg(individualProduct?.img3) }}
                        overflow="hidden"
                        className="img2"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{ transform: "scale(1.2)", transition: "all 0.4s ease" }}
                          src={individualProduct?.img3}
                        />
                      </Center>
                      <Center
                        onMouseEnter={() => { setShowImg(individualProduct?.img4) }}
                        overflow="hidden"
                        className="img3"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{ transform: "scale(1.2)", transition: "all 0.4s ease" }}
                          src={individualProduct?.img4}
                        />
                      </Center>
                      <Center
                        onMouseEnter={() => { setShowImg(individualProduct?.img5) }}
                        overflow="hidden"
                        className="img4"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{ transform: "scale(1.2)", transition: "all 0.4s ease" }}
                          src={individualProduct?.img5}
                        />
                      </Center>
                    </Flex>
                    <IconButton
                      aria-label="Search database"
                      isRound="true"
                      position="absolute"
                      size="sm"
                      bottom="90"
                      right="2"
                      icon={<FaShareAlt color="gray" />}
                    />
                  </Flex>

                  <Box
                    className="description"
                    w="65%"
                    // border="1px solid black"
                    position="relative"
                    textAlign="left"
                    color="#4f585e"
                    py="10px"
                  >
                    <Text
                      istruncated="true"
                      fontSize="20px"
                      fontWeight="700"
                      noOfLines={1}
                      height="30px"
                    >
                      {individualProduct?.desc}
                    </Text>
                    <Text fontSize="14" color="#0f847e" py="6px">
                      Visit {individualProduct?.company} Store
                    </Text>
                    <Flex
                      className=" rating"
                      paddingBottom="20px"
                      w="35%"
                      justify="space-between"
                      align="center"
                    >
                      <Flex color="#ffd344" fontSize="20px" align="center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <TiStarHalfOutline fontSize="24px" />
                        <FaRegStar />
                      </Flex>
                      <Text color="#8e9ca7" fontSize="14px">
                        ({individualProduct?.ratings} ratings)
                      </Text>
                    </Flex>
                    <Flex
                      className="price"
                      h="2rem"
                      align="center"
                      w="40%"
                      justify="space-between"
                    >
                      <Text fontSize="20px" fontWeight="700">
                        ₹{individualProduct?.newPrice}
                      </Text>
                      <Text fontSize="14px" fontWeight="400" color="#8e9ca7">
                        MRP{" "}
                        <span style={{ textDecoration: "line-through" }}>₹{individualProduct?.originalPrice}</span>{" "}
                      </Text>
                      <Flex
                        align="center"
                        justify="start"
                        px="6px"
                        color="white"
                        fontSize="11px"
                        fontWeight="600"
                        height="72%"
                        w="36%"
                        bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                      >
                        {individualProduct?.offer}% OFF
                      </Flex>
                    </Flex>
                    <Text fontSize="10px" color="#8e9ca7">Inclusive of all taxes</Text>
                    <Text py="10px" fontSize="12px">
                      Delivery by <span style={{ fontWeight: "700" }}>Tomorrow, before 10:00 pm</span>
                    </Text>
                    <Button
                      className="addToStore"
                      position="absolute"
                      variant="#0f847e"
                      bg="#0f847e"
                      color="white"
                      fontWeight="700"
                      fontSize="16px"
                      right="4"
                      top="28"
                      height="2.8rem"
                      w="9rem"
                      transition="all 0.4s ease"
                      _hover={{ bg: "#0a5855", transition: "all 0.4s ease" }}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </Flex>
                <Box textAlign="left" py="30px" color="#4f585e">
                  <Text fontSize="16px" fontWeight="700" py="10px">Description</Text>
                  <Text className="desc" fontSize="15px" fontWeight="500" color="#666f75">{individualProduct?.about}</Text>
                </Box>
                <SimilarProductCarousal />
              </Box>
            </div>

            {/* //! RIGHT SIDE */}

            <Box className="right" w="25%" color="#4f585e" textAlign="left">
              <Box className="cartDetails" padding="10px 0">
                <Text fontSize="16" fontWeight="600" py="30px">1 Items in Cart</Text>
                <Link to="/cart"><Button
                  className="viewCart"
                  variant="#0f847e"
                  bg="#0f847e"
                  color="white"
                  fontWeight="700"
                  h="3rem"
                  fontSize="16px"
                  transition="all 0.4s ease"
                  borderRadius="md"
                  w="100%"
                  display="flex"
                  align="center"
                  _hover={{ bg: "#075854", transition: "all 0.4s ease" }}
                >
                  View Cart <BiChevronRight fontSize="25px" />
                </Button></Link>
              </Box>
              <Box className="offers" marginY="50px" border="1px dashed pink" borderRadius="5px" p="15px">
                <Flex justify="space-between" align="center" mb="10px">
                  <Text fontSize="14px" fontWeight="700">Offers Just for you</Text>
                  <Text fontSize="12px" fontWeight="700" color="#0f847e" cursor="pointer">View All</Text>
                </Flex>
                <Flex align="center" fontSize="12px" fontWeight="600" gap="10px" mb="10px">
                  <Image src="https://cms-contents.pharmeasy.in/offer/b47f482f486-LogoHSD.jpg" h={7} w={7} />
                  <Text size={10}>Healthy Savings day Sale is Live! </Text>
                </Flex>
                <Flex align="center" fontSize="12px" fontWeight="600" gap="10px" mb="10px">
                  <Image src="https://cms-contents.pharmeasy.in/offer/60165886431-ten_per.jpg" h={7} w={7} />
                  <Text size={10}>Get Extra 10% Off on Everherb, Liveasy or PharmEasy Products </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Security />
        </Box>
      }
    </Box>
  );
};

export default IndividualProduct;
