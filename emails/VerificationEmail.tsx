import React from "react";
import { Html, Head,  Font, Preview, Section, Row, Heading, Text } from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({username, otp} : VerificationEmailProps){
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font fontFamily="Roboto, sans-serif" fallbackFontFamily={"Verdana"} fontWeight={400} fontStyle="normal" />
      </Head>
      <Preview>Here is your verification code: {otp}</Preview>

      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>

        <Row>
          <Text>
            Thank you for registering. Please use the following verification code to complete the registration:
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
      </Section>
    </Html>
  );
};


