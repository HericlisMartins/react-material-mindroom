import { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import data from './data';

const Question = styled(Button)(({ theme }) => ({
  backgroundColor: "#1A2027",
  padding: theme.spacing(1),
  textAlign: "center",
  maxWidth: "50%",
  width: "100%",
  color: theme.palette.primary.contrastText,
  "&:hover": {
    color: theme.palette.primary.contrastText,
    backgroundColor: "#1e1e1e",
  },
  "&:focus": {
    backgroundColor: "#1e1e1e",
  },
  "&:active": {
    backgroundColor: "#1e1e1e",
  },
}));

const Answer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#1A2027",
  height: 60,
  lineHeight: "60px",
  marginBottom: "50px",
}));

function App() {
  const [qindex, seqindex] = useState(0);
  const { questions, answers } = data;

  const code = String(` <!DOCTYPE html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a paragraph of text.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
  </html>`);

  return (
    <>
      <Box
        sx={{
          bgcolor: "#282828",
          py: 2,
          pl: 10,
          maxWidth: "100%",
          alignContent: "center",
        }}
        component={"header"}
      >
        <Typography
          variant="h4"
          component="h4"
          color="white"
          textAlign={"left"}
        >
          ICTWEB441 Q1.2 - Hericlis
        </Typography>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          alignContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Grid spacing={2} mt="10px" justifyContent="flex-end" container>
          {questions.map((question, index) => (
            <Grid item>
              <Question
                key={index}
                variant="contained"
                onClick={() => seqindex(index)}
                sx={{ bgcolor: qindex === index ? "#1e1e1e" : "#1A2027" }}
              >
                {index + 1}
              </Question>
            </Grid>
          ))}
        </Grid>

        <Question
          key={qindex}
          variant="contained"
          // sx={{ bgcolor: qindex === index ? "#1e1e1e" : "#1A2027" }}
        >
          {questions[qindex]}
        </Question>
        <Answer
          sx={{
            textAlign: "justify",
            display: "flex",
            height: "auto",
            width: "100%",
            px: 50,
            py: 5,
          }}
        >
          <Typography variant="body1" component="div" color="white">
            {answers[qindex].split("\n").map((str) => (
              <p>{str}</p>
            ))}

            {qindex === 1 ? (
              <SyntaxHighlighter language="html" style={vscDarkPlus}>
                {code}
              </SyntaxHighlighter>
            ) : null}
          </Typography>
        </Answer>
      </Container>
    </>
  );
}

export default App;
