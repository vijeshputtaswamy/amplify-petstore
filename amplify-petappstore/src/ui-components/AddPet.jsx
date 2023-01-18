/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddPet(props) {
  const { pet, prop, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFiveEightTwoSixEightFourValue,
    setTextFieldThreeSixFiveEightTwoSixEightFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFiveEightTwoSixNineOneValue,
    setTextFieldThreeSixFiveEightTwoSixNineOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFiveEightTwoSixNineEightValue,
    setTextFieldThreeSixFiveEightTwoSixNineEightValue,
  ] = useStateMutationAction("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
      about: textFieldThreeSixFiveEightTwoSixEightFourValue,
      color: textFieldThreeSixFiveEightTwoSixNineOneValue,
      image: textFieldThreeSixFiveEightTwoSixNineEightValue,
    },
    model: Pet,
    schema: schema,
  });
  const buttonThreeSixFiveEightTwoSevenZeroSevenOnClick =
    useDataStoreUpdateAction({
      fields: {
        name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
        about: textFieldThreeSixFiveEightTwoSixEightFourValue,
        color: textFieldThreeSixFiveEightTwoSixNineOneValue,
        image: textFieldThreeSixFiveEightTwoSixNineEightValue,
      },
      id: pet?.id,
      model: Pet,
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(196,193,211,0.35)"
      {...getOverrideProps(overrides, "AddPet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Pet"
            {...getOverrideProps(overrides, "Add Pet")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          ></View>
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M14 1.41L14.7071 2.11711L15.4142 1.41L14.7071 0.702893L14 1.41ZM12.59 0L13.2971 -0.707107L12.59 -1.41421L11.8829 -0.707107L12.59 0ZM7 5.59L6.29289 6.29711L7 7.00421L7.70711 6.29711L7 5.59ZM1.41 0L2.11711 -0.707107L1.41 -1.41421L0.702893 -0.707107L1.41 0ZM0 1.41L-0.707107 0.702893L-1.41421 1.41L-0.707107 2.11711L0 1.41ZM5.59 7L6.29711 7.70711L7.00421 7L6.29711 6.29289L5.59 7ZM0 12.59L-0.707107 11.8829L-1.41421 12.59L-0.707107 13.2971L0 12.59ZM1.41 14L0.702893 14.7071L1.41 15.4142L2.11711 14.7071L1.41 14ZM7 8.41L7.70711 7.70289L7 6.99579L6.29289 7.70289L7 8.41ZM12.59 14L11.8829 14.7071L12.59 15.4142L13.2971 14.7071L12.59 14ZM14 12.59L14.7071 13.2971L15.4142 12.59L14.7071 11.8829L14 12.59ZM8.41 7L7.70289 6.29289L6.99579 7L7.70289 7.70711L8.41 7ZM14.7071 0.702893L13.2971 -0.707107L11.8829 0.707107L13.2929 2.11711L14.7071 0.702893ZM11.8829 -0.707107L6.29289 4.88289L7.70711 6.29711L13.2971 0.707107L11.8829 -0.707107ZM7.70711 4.88289L2.11711 -0.707107L0.702893 0.707107L6.29289 6.29711L7.70711 4.88289ZM0.702893 -0.707107L-0.707107 0.702893L0.707107 2.11711L2.11711 0.707107L0.702893 -0.707107ZM-0.707107 2.11711L4.88289 7.70711L6.29711 6.29289L0.707107 0.702893L-0.707107 2.11711ZM4.88289 6.29289L-0.707107 11.8829L0.707107 13.2971L6.29711 7.70711L4.88289 6.29289ZM-0.707107 13.2971L0.702893 14.7071L2.11711 13.2929L0.707107 11.8829L-0.707107 13.2971ZM2.11711 14.7071L7.70711 9.11711L6.29289 7.70289L0.702893 13.2929L2.11711 14.7071ZM6.29289 9.11711L11.8829 14.7071L13.2971 13.2929L7.70711 7.70289L6.29289 9.11711ZM13.2971 14.7071L14.7071 13.2971L13.2929 11.8829L11.8829 13.2929L13.2971 14.7071ZM14.7071 11.8829L9.11711 6.29289L7.70289 7.70711L13.2929 13.2971L14.7071 11.8829ZM9.11711 7.70711L14.7071 2.11711L13.2929 0.702893L7.70289 6.29289L9.11711 7.70711Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
              {
                d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fceciliarodriguez%2F2020%2F11%2F12%2Fworld-best-photos-of-animals-20-winning-images-by-agora%2F&psig=AOvVaw1hq9fMSFiBBqWTF7duEgxY&ust=1673604195169000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLjBzM7jwfwCFQAAAAAdAAAAABAE"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Name"
            placeholder="kitty"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            label="Age"
            placeholder="Sea12ttle, WA"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            label="Breed"
            placeholder="john.doe@awsamplify.com"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            label="about"
            placeholder="Labrador"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFiveEightTwoSixEightFourValue}
            onChange={(event) => {
              setTextFieldThreeSixFiveEightTwoSixEightFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36582684")}
          ></TextField>
          <TextField
            label="Color"
            placeholder="jobluehn.doe@awsamplify.com"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFiveEightTwoSixNineOneValue}
            onChange={(event) => {
              setTextFieldThreeSixFiveEightTwoSixNineOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36582691")}
          ></TextField>
          <TextField
            label="Image"
            placeholder="john.doeimage-url@awsamplify.com"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFiveEightTwoSixNineEightValue}
            onChange={(event) => {
              setTextFieldThreeSixFiveEightTwoSixNineEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36582698")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="50px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeSixFiveEightTwoSevenZeroSevenOnClick();
            }}
            {...getOverrideProps(overrides, "Button36582707")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
