// lib/emails/form-email.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Link,
} from "react-email";

interface FormEmailProps {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  details: string;
}

export default function FormEmail({
  name,
  phone,
  email,
  projectType,
  details,
}: FormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f4" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: 24, maxWidth: 600 }}>
          <Heading as="h2">New Request</Heading>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Phone:</strong> <Link href={`tel:${phone}`}>{phone}</Link>
          </Text>
          <Text>
            <strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
          <Text>
            <strong>Project Type:</strong> {projectType}
          </Text>
          <Text>
            <strong>Details:</strong>
          </Text>
          <Text style={{ whiteSpace: "pre-wrap" }}>{details}</Text>
        </Container>
      </Body>
    </Html>
  );
}