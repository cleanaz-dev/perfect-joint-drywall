// lib/emails/confirmation-email.tsx
import { Html, Head, Body, Container, Heading, Text } from "react-email";

interface ConfirmationEmailProps {
  name: string;
  projectType: string;
}

export default function ConfirmationEmail({
  name,
  projectType,
}: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f4" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: 24, maxWidth: 600 }}>
          <Heading as="h2">Thanks, {name}!</Heading>
          <Text>
            We received your request for <strong>{projectType}</strong> and
            will get back to you within 24 hours.
          </Text>
          <Text>
            If it's urgent, call us at (555) 555-0100.
          </Text>
          <Text>Perfect Joint Drywall</Text>
        </Container>
      </Body>
    </Html>
  );
}