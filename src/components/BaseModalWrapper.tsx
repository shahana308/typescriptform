/** @format */

import React, { useState } from "react";
import Modal from "./Modal";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import {
  Container,
  FormControl,
  HStack,
  Button,
  Box,
  Input,
  Heading,
  Select,
  Flex,
  Spacer,
  Image,
  Textarea,
  Text,
  CloseButton,
  FormLabel,
} from "@chakra-ui/react";
import logo from "./id8.jpeg";
import upload from "./upload.png";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  header: string;
  message: string;
}

interface FormData {
  title: string;
  desc: string;
  challenge: string;
  roi: string;
  budget: string;
  benefit: string;
  business: string;
  time: string;
  obstacles: string;
  phases: string;
  mechanics: string;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
  header,
  message,
}) => {
  if (!isModalVisible) {
    return null;
  }

  var reg: RegExp = new RegExp(/^\d+$/);
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [challenge, setChallenge] = useState<string>("");
  const [roi, setROI] = useState<string>("");
  const [business, setBusiness] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [obstacles, setObstacles] = useState<string>("");
  const [phases, setPhases] = useState<string>("");
  const [mechanics, setMechanics] = useState<string>("");

  const roiError = reg.test(roi);
  let roiErrorMsg = "";
  !roiError && roi.length != 0 ? (roiErrorMsg = "ROI should be a number") : "";

  const [budget, setBudget] = useState<string>("");
  const budgetError = reg.test(budget);
  let budgetErrorMsg = "";
  !budgetError && budget.length != 0
    ? (budgetErrorMsg = "Budget should be a number")
    : "";

  const [benefit, setBenefit] = useState<string>("");
  const benefitError = reg.test(benefit);
  let benefitErrorMsg = "";
  !benefitError && benefit.length != 0
    ? (benefitErrorMsg = "benefit should be a number")
    : "";

  const formData: FormData = {
    title: title,
    desc: desc,
    challenge: challenge,
    roi: roi,
    benefit: benefit,
    budget: budget,
    business,
    time,
    obstacles,
    phases,
    mechanics,
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  let disabled = true;
  if (
    title.length !== 0 &&
    desc.length !== 0 &&
    benefit.length !== 0 &&
    challenge.length !== 0 &&
    roi.length !== 0 &&
    budget.length !== 0 &&
    business.length !== 0 &&
    time.length !== 0 &&
    benefitErrorMsg.length === 0 &&
    roiErrorMsg.length === 0 &&
    budgetErrorMsg.length === 0
  ) {
    disabled = false;
  }
  return (
    <Modal onBackDropClick={onBackdropClick}>
      <Container
        bg="white"
        width={[310, 500, 700]}
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          bg="#f2f7fa"
          boxShadow="base"
          w="100%"
          p={2}
          mx={-4}
          width="auto"
          color="black"
        >
          <Flex>
            <Image
              boxSize="35px"
              objectFit="cover"
              src={logo}
              alt="Dan Abramov"
            />
            <Flex flexDirection="column" px={1}>
              <Heading as="h5" size="sm">
                {header}
              </Heading>
              <Text fontSize="xs">{message}</Text>
            </Flex>

            <Spacer />
            <CloseButton onClick={onBackdropClick} />
          </Flex>
        </Box>
        <FormControl as="fieldset" onSubmit={onSubmitHandler} paddingTop={2}>
          <Container height="350px" overflow="scroll" paddingBottom={2}>
            <Flex flexWrap="wrap" p={1}>
              <Flex flexDirection="column">
                <Text fontSize="xs">Title</Text>
                <Input
                  size="xs"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  id="title"
                  width="230px"
                  placeholder="Lorem ipsum dolor sit amet, consectetur "
                />
              </Flex>
              <Spacer />
              <Flex flexDirection="column">
                <Text fontSize="xs">Challenge</Text>
                <Select
                  placeholder="Select challenges"
                  size="xs"
                  color="grey"
                  width="230px"
                  onChange={(e) => setChallenge(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Flex>
            <Flex flexDirection="column" p={1}>
              <Text fontSize="xs">Description</Text>
              <Textarea
                size="xs"
                placeholder="Lorem posum..."
                onChange={(e) => setDesc(e.target.value)}
              />
            </Flex>
            <Flex flexWrap="wrap" p={1}>
              <Flex flexDirection="column">
                <Text fontSize="xs">Business Category</Text>
                <Select
                  placeholder="Development"
                  size="xs"
                  color="grey"
                  width="230px"
                  onChange={(e) => setBusiness(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Spacer />
              <Flex flexDirection="column">
                <Text fontSize="xs">Time required to implement</Text>
                <Select
                  placeholder="14 days"
                  size="xs"
                  color="grey"
                  width="230px"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Flex>
            <Flex flexWrap="wrap" p={1}>
              <Flex flexDirection="column">
                <Text fontSize="xs">Budget Required</Text>
                <Input
                  size="xs"
                  id="budget"
                  placeholder=""
                  width="230px"
                  onChange={(e) => setBudget(e.target.value)}
                />
                <Text fontSize="xs" color="red">
                  {budgetErrorMsg}
                </Text>
              </Flex>
              <Spacer />
              <Flex flexDirection="column">
                <Text fontSize="xs">ROI (Annual)</Text>
                <Input
                  size="xs"
                  id="roi"
                  placeholder=""
                  width="230px"
                  onChange={(e) => setROI(e.target.value)}
                />
                <Text fontSize="xs" color="red">
                  {roiErrorMsg}
                </Text>
              </Flex>
            </Flex>
            <Flex flexWrap="wrap" p={1}>
              <Flex flexDirection="column">
                <Text fontSize="xs">Benefit</Text>
                <Input
                  size="xs"
                  id="benefit"
                  width="230px"
                  onChange={(e) => setBenefit(e.target.value)}
                  placeholder="Lorem ipsum dolor sit amet, consectetur "
                />
                <Text fontSize="xs" color="red">
                  {benefitErrorMsg}
                </Text>
              </Flex>
              <Spacer />
              <Flex flexDirection="column">
                <Text fontSize="xs">Obstacles</Text>
                <Input
                  size="xs"
                  id="obstacles"
                  width="230px"
                  onChange={(e) => setObstacles(e.target.value)}
                  placeholder="(Optional)"
                />
              </Flex>
            </Flex>
            <Flex flexWrap="wrap" p={1}>
              <Flex flexDirection="column">
                <Text fontSize="xs">Phases</Text>
                <Input
                  size="xs"
                  id="phases"
                  placeholder="(Optional)"
                  width="230px"
                  onChange={(e) => setPhases(e.target.value)}
                />
              </Flex>
              <Spacer />
              <Flex flexDirection="column">
                <Text fontSize="xs">Mechanics</Text>
                <Input
                  size="xs"
                  id="mechanics"
                  placeholder="(Optional)"
                  width="230px"
                  onChange={(e) => setMechanics(e.target.value)}
                />
              </Flex>
            </Flex>
            <Text fontSize="xs">Upload Business Documentation</Text>
            <Input
              textColor="grey"
              borderStyle="dashed"
              border="2px"
              bgImage={upload}
              backgroundSize="40px"
              backgroundPosition="center center"
              paddingTop={[5, 5, 5]}
              paddingLeft={[10, 160, 160]}
              backgroundRepeat="no-repeat"
              verticalAlign="center"
              height="130px"
              bg="#e7f2f8"
              size="xs"
              id="file-upload"
              type="file"
              name="fileUpload"
              accept=".txt,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          </Container>
          <Box
            justifyContent="center"
            alignItems="center"
            bg="#eff5f8"
            right="0"
            bottom="0"
            p={2}
            mx={-4}
            // marginBottom={[0, -4, -4]}
            overflow="visible"
            boxShadow="xs"
            w="auto"
            height={[59, 45, 45]}
            color="black"
          >
            <Flex align="center" justify="center">
              <InfoOutlineIcon />
              <Text fontSize="xs" color="grey" px={1}>
                Fill in all fields to proceed
              </Text>
              <Spacer></Spacer>
              <HStack spacing="20px">
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size="xs"
                  borderRadius="1px"
                >
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  onClick={onSubmitHandler}
                  colorScheme="blue"
                  variant="solid"
                  size="xs"
                  borderRadius="1px"
                  isDisabled={disabled}
                >
                  Continue
                </Button>
              </HStack>
            </Flex>
          </Box>
        </FormControl>
      </Container>
    </Modal>
  );
};

export default BaseModalWrapper;
