import UAuth from "@uauth/js";
import React, { useEffect, useState } from "react";
import {
  chakra,
  Box,
  Stack,
  Avatar,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import LandingPage from "../Landing";

const uauth = new UAuth({
  clientID: "fingfeID7I/krlfBz2mYHkcUa4KztMkX9FT0aY/YOAE=",
  clientSecret: "GqZ5xInjDBmKYfNiIMk8pVdXLyzA3D9xIuNc6a4dhVY=",
  redirectUri: "https://nftexplorer.vercel.app/callback",
  postLogoutRedirectUri: "https://nftexplorer.vercel.app/",
  scope: "openid email wallet",
});

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  //Login/out Functions

  const handleLogin = () => {
    setLoading(true);
    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    setLoading(true);
    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  if (error) {
    console.error(error);
    return <App />;
  }

  console.log(loading);

  if (user) {
    return (
      <>
        <Box position="relative">
          <Box
            display="flex"
            maxW={"350"}
            ms="auto"
            me="6"
            mt=" 9px"
            borderWidth="1px"
            borderColor="purple.600"
            px="5"
            py="5"
            borderRadius="lg"
            bg="blackAlpha.600"
          >
            <HStack>
              <Text
                textTransform="uppercase"
                color="#3c9b6f"
                fontSize="md"
                fontWeight="semibold"
                size="md"
                letterSpacing={0.5}
              >
                {user.sub}
              </Text>
              <Button
                borderWidth={3}
                borderColor="blue.500"
                display="flex"
                maxWidth={150}
                alignItems="center"
                justifyContent="center"
                border="solid 1px transparent"
                fontSize={{ base: "md", md: "lg" }}
                rounded="full"
                color="white"
                bgGradient="linear(to-r, blue.600,green.300)"
                _hover={{ bg: "brand.700" }}
                px={{ base: 8, md: 10 }}
                py={{ base: 3, md: 4 }}
                cursor="pointer"
                onClick={handleLogout}
              >
                <Avatar
                  size="sm"
                  name="unstoppable domains"
                  src="https://crypto.jobs/storage/company-logos/yC2CISvH6kg2kZkNnzbACeuxOHmlYZj9rzsDbeVx.png"
                  mr={2}
                />
                Logout
              </Button>
            </HStack>
          </Box>
          <LandingPage />
        </Box>
      </>
    );
  }

  return (
    <>
      <Box pos="relative" overflow="hidden">
        <Box maxW="7xl" mx="auto">
          <Box
            pos="relative"
            pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
            w="full"
            border="solid 1px transparent"
          >
            {/* <Button
              borderWidth={1}
              borderColor="blue.500"
              borderRadius="full"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.200", "gray.700")}
              onClick={toggleColorMode}
              mt={2}
              mx={2}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button> */}
            <Box
              //mt={{ base: 10 }}
              mx="auto"
              maxW={{ base: "7xl" }}
              px={{ base: 4, sm: 6, lg: 8 }}
              mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
            >
              <Box
                textAlign="center"
                w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                mx="auto"
              >
                <chakra.h1
                  fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                  letterSpacing="tight"
                  lineHeight="short"
                  fontWeight="extrabold"
                  color="white"
                >
                  <chakra.span display={{ base: "block", xl: "inline" }}>
                    NFT Global Market Explorer{" "}
                  </chakra.span>
                  <Text
                    display={{ base: "block", xl: "inline" }}
                    w="full"
                    bgClip="text"
                    bgGradient="linear(to-r, blue.600,green.300)"
                    fontWeight="extrabold"
                  >
                    Login With Unstoppable Domain
                  </Text>
                </chakra.h1>
                <chakra.p
                  mt={{ base: 3, sm: 5, md: 5 }}
                  mx={{ sm: "auto", lg: 0 }}
                  mb={6}
                  fontSize={{ base: "lg", md: "xl" }}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color="#fffff"
                  lineHeight="base"
                >
                  An NFT Explorer that helps users to explore all NFT
                  collections per selected blockchain, sorted by market cap.
                </chakra.p>
                <Stack
                  direction={{ base: "column", sm: "column", md: "row" }}
                  mb={{ base: 4, md: 8 }}
                  spacing={{ base: 4, md: 2 }}
                  justifyContent="center"
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                  >
                    <Button
                      borderWidth={3}
                      borderColor="blue.500"
                      w="4xs"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{ base: "md", md: "lg" }}
                      rounded="full"
                      color="white"
                      bgGradient="linear(to-r, blue.600,green.300)"
                      _hover={{ bg: "brand.700" }}
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      cursor="pointer"
                      onClick={handleLogin}
                    >
                      Connect Wallet
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default App;
