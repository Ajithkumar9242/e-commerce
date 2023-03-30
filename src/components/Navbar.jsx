import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  InputRightElement,
  InputGroup,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  Search2Icon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            {/* <Name /> */}

            

            <Show breakpoint="(min-width: 1000px)">
              {" "}
              {/* <Photo /> */}
            </Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={8}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <InputGroup size={"md"}>
    <InputRightElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input type='text' placeholder='Search products' isInvalid
    errorBorderColor='#D3D3D3'/>
  </InputGroup>


                <Button className="btnRes">
                  <Link to={"/"}>
                    <b>Home</b>
                  </Link>
                </Button>

                   <Menu >
  <MenuButton>
  <b>Categories</b>
  </MenuButton>
  <MenuList>
    <Link to={"/electronics"}>
    <MenuItem>
    Electronics
    </MenuItem>
   </Link>
    <Link to={"/jewellery"}>
    <MenuItem>
    Jewellery
    </MenuItem>
   </Link>
    <Link to={"/mens"}>
    <MenuItem>
    Men's Clothing
    </MenuItem>
   </Link>
    <Link to={"/women"}>
    <MenuItem>
    Women's Clothing
    </MenuItem>
   </Link>
  </MenuList>
</Menu>
               

                

                <Button className="btnRes">
                <Link to={"/login"}>
                    <b>Login</b>
                  </Link>
                </Button>

                <Button className="btnRes">
                  <Link to={"/signup"}>
                    <b>SignUp</b>
                  </Link>
                </Button>

                <Button className="btnRes">
                  <Link to={"/contact"}>
                    <b>Contact</b>
                  </Link>
                </Button>


              </HStack>
            </HStack>
          </Flex>

          

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  mt="18.5em"
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to={"/"}>
                    <b>Home</b>
                  </Link>
                
                </Button>

                 <Menu >
  <MenuButton rightIcon={<ChevronDownIcon />} _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }} >
  <b>Categories</b>
  </MenuButton>
   <MenuList>
    <Link to={"/electronics"}>
    <MenuItem>
    Electronics
    </MenuItem>
   </Link>
    <Link to={"/jewellery"}>
    <MenuItem>
    Jewellery
    </MenuItem>
   </Link>
    <Link to={"/mens"}>
    <MenuItem>
    Men's Clothing
    </MenuItem>
   </Link>
    <Link to={"/women"}>
    <MenuItem>
    Women's Clothing
    </MenuItem>
   </Link>
  </MenuList>
</Menu>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to={"/login"}>
                    <b>Login</b>
                  </Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <Link to={"/signup"}>
                    <b>SignUp</b>
                  </Link>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                   <Link to={"/contact"}>
                    <b>Contact</b>
                  </Link>
                </Button>
                <InputGroup>
    <InputRightElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input type='text' placeholder='Search products' isInvalid
    errorBorderColor='#D3D3D3'/>
  </InputGroup>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}