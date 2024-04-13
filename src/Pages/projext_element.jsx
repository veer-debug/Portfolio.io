import React from "react";
import "../components/navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Link,
  Hide,
} from '@chakra-ui/react';
import { Hidden } from "@mui/material";

export const Projectelement = () => {
  let data = [
    {
      imge: "https://github.com/veer-debug/music/blob/main/movie.png?raw=true",
      image: "https://cdn-icons-png.flaticon.com/512/2809/2809590.png",
      name: "Movie Recommender System",
      description: " Introducing our Content-Based Movie Recommender System, a sophisticated end-to-end machine learning project with a GUI web application. Trained on a dataset of 5000 movies, our system utilizes distance vector algorithms to recommend personalized movies based on cosine similarity. Explore tailored entertainment with precision and efficiency.",
      tool: ["Python" , "Flask",  "CSS" , "HTML" , "Sk-Learn" , "Numpy" , "Pandas" ],
      netlify: "https://github.com/veer-debug/Movie_Recommender_System.git",
      github: "https://github.com/veer-debug/Movie_Recommender_System.git"
    },
    {
      imge: "https://github.com/veer-debug/music/blob/main/recomended.jpeg?raw=true",
      image: "https://img.lovepik.com/free-png/20220127/lovepik-intelligent-science-and-technology-face-png-image_401928642_wh1200.png",
      name: "Automated Attendance System",
      description: " Introducing our Automated Attendance Management System, a complete end-to-end solution with a sleek GUI web interface. Utilizing advanced algorithms and trained on extensive data, it seamlessly tracks attendance, integrates with existing systems, and ensures accuracy. Say goodbye to manual processes and embrace effortless attendance management for enhanced efficiency.",
      tool: ["Python", "TK-inter", "MySql", "Sk-Learn", "Open-Cv"],
      netlify: "https://github.com/veer-debug/Automated-Attendance-System.git",
      github: "https://github.com/veer-debug/Automated-Attendance-System.git"
    },

    {
      imge: "https://repository-images.githubusercontent.com/755525673/f7566402-2c67-4e77-a162-ce4125d791b0",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctYsg9mHiOAV0_PFClrrK9zvKdmOKbKUa6CHZrm5cdw&s",
      name: "Email Spam Classifier",
      description: " Introducing our Spam Classifier, powered by the Naive Bayes algorithm. This end-to-end machine learning project features a user-friendly GUI web application. Trained on extensive data, our system accurately detects and classifies spam messages, ensuring a clutter-free inbox experience. Say hello to efficient email management with ease.",
      tool: ["Python", "Streamlit", "Sk-Learn", "Numpy", "Pandas"],
      netlify: "https://github.com/veer-debug/email-spam-detection.git",
      github: "https://github.com/veer-debug/email-spam-detection.git"
    },


  ]

  return (

    <>



      <div className="project-div">
        {
          data.map((el) => (
            // <Center py={6}>
            //   <Box
            //     w={'full'}
            //     boxShadow={'2xl'}
            //     rounded={'md'}
            //     overflow={'hidden'}>
            //     <Image
            //       h={'120px'}
            //       w={'full'}
            //       src={
            //         el.imge
            //       }
            //       objectFit={'cover'}
            //     />
            //     <Flex justify={'center'} mt={-12}>
            //       <Avatar
            //         size={'xl'}
            //         backgroundSize="cover"
            //         src={
            //           el.image
            //         }

            //         alt={'Author'}
            //         css={{
            //           border: '2px solid white',
            //         }}
            //       />
            //     </Flex>

            //     <Box p={4}>
            //       <Stack spacing={1} textAlign="justify" align={'center'} height="80px"    >
            //         <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            //           {el.name}
            //         </Heading>
            //         <Text color={'gray.500'}>{el.description}</Text>

            //       </Stack>
            //       <Stack textAlign="justify" height="70px" mb="10px">
            //         <Text fontWeight="bold"><span className="tool">TOOLS : </span >{el.tool}</Text>
            //       </Stack>


            //       <Flex justifyContent="space-between">
            //         <Button
            //           bg="#1976d2"
            //           color="white"
            //           _hover={{ backgroundColor: "teal" }}
            //         >
            //           <a href={el.netlify} target="_blank"> <ArrowOutwardIcon /></a>
            //         </Button>
            //         <Button color="white" bg="#1976d2" _hover={{ backgroundColor: "teal" }}><a href={el.github} target="_blank"><GitHubIcon /></a></Button>
            //       </Flex>

            //     </Box>
            //   </Box>
            // </Center>
            <Box w="full" borderWidth="1px" rounded="md" overflow="hidden" boxShadow={'2xl'} minH={500} key={el.name}>
              <Image
                src={el.imge}
                alt="Project Image"
                h="120px"
                w="100%"
                objectFit="cover"
              />
              <Flex justify={'center'} mt={-12}>
                  <Avatar
                    size={'xl'}
                    backgroundSize="cover"
                    src={
                      el.image
                    }

                    alt={'Author'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                </Flex>
              <Box p="4">
                <Flex align="center" justify={"center"}>
                <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                      {el.name}
                </Heading>
                <ArrowOutwardIcon />
                </Flex>
                <Text mt="3" fontSize="sm" color="gray.600" textAlign={"justify"}>
                  {el.description}
                </Text>
                <Flex mt="4" flexWrap="wrap">
                  {
                    el.tool.map((tl)=>(
                        <Badge mr="2" mb="2" rounded="full" bg="gray.100" px="3" py="1" fontSize="10px" fontWeight="semibold" color="gray.900" key={tl}>
                      #{tl}
                    </Badge>
                    ))
                  }
                </Flex>
                  <Button
                    mt="4"
                    mr={"5"}
                    w="30%"
                    rounded="md"
                    bg="#1976d2"
                    px="2"
                    py="1.5"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="white"
                    _hover={{ bg: "teal" }}
                  >
                    <a href={el.netlify} target="_blank"><ArrowOutwardIcon /></a>
                  </Button>
                  <Button
                    mt="4"
                    ml={"5"}
                    w="30%"
                    rounded="md"
                    bg="#1976d2"
                    px="2"
                    py="1.5"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="white"
                    _hover={{ bg: "teal" }}
                  >
                    <a href={el.github} target="_blank"><GitHubIcon /></a>
                  </Button>
              </Box>
            </Box>
          ))
        }


      </div>





    </>
  );
};
