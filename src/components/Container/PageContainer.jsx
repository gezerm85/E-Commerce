import Container from "@mui/material/Container";

// eslint-disable-next-line react/prop-types
function PageContainer({ children }) {
  return <Container maxWidth="lg">{children}</Container>;
}

export default PageContainer;
