import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, CircularProgress, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ChatCard() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleSend = () => {
    setLoading(true);
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      setMessages([...messages, { text: input, sender: 'user' }, { text: 'Sample bot output', sender: 'bot' }]);
      setLoading(false);
    }, 2000);
  };

  return (
    <Box
      component={Card}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 800,
        minWidth: 800,
        maxWidth: 800,
        m: 3,
        p: 2,
        bgcolor: theme.palette.background.default,
        borderRadius: 2,
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
        '& .MuiInputBase-input': { color: 'white' },
      }}
      elevation={6}
    >
      <CardContent>
        {messages.map((message, index) => (
          <Typography key={index} color={message.sender === 'user' ? 'textPrimary' : 'textSecondary'}>
            {message.text}
          </Typography>
        ))}
        {loading && <CircularProgress />}
      </CardContent>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={10}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
            placeholder="Type a message"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleSend} variant="contained" color="primary" fullWidth>
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChatCard;