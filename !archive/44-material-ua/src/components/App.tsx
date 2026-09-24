import { useRef, useState } from 'react'
import Draggable from 'react-draggable'
import {
  Alert,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  type PaperProps,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const PaperComponent = (props: PaperProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  )
}

const App = () => {
  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('')
  const [open, setOpen] = useState(false)

  const handleGreet = () => {
    setGreeting(name.trim() ? `Вітаю, ${name.trim()}! Це MUI 👋` : '')
  }

  return (
    <>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MUI — простий приклад</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Stack spacing={3}>
          {/* 1. Типографіка */}
          <div>
            <Typography variant="h4" gutterBottom>
              Привіт, Material UI
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Це базовий приклад: шапка, кнопки, поле вводу та картка.
            </Typography>
          </div>

          {/* 2. Кнопки — три основні варіанти */}
          <Stack direction="row" spacing={1}>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
          </Stack>

          {/* 3. Поле вводу + кнопка */}
          <Stack direction="row" spacing={1}>
            <TextField
              fullWidth
              size="small"
              label="Як тебе звати?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGreet()}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleGreet}>
              ОК
            </Button>
          </Stack>

          {greeting && <Alert severity="success">{greeting}</Alert>}

          {/* 4. Картка */}
          <Card>
            <CardContent>
              <Typography variant="h6">Картка (Card)</Typography>
              <Typography variant="body2" color="text.secondary">
                Так виглядає готовий контейнер для контенту — заголовок, текст і
                дії внизу.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setOpen(true)}>
                Відкрити діалог
              </Button>
              <Button size="small" color="secondary">
                Закрити
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>

      {/* 5. Діалог (draggable — тягни за заголовок) */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Простий діалог — тягни мене
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Цей Dialog можна перетягувати за заголовок. Клік поза вікном або
            кнопка «Закрити» його закриває.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Закрити</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Зрозуміло
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default App
