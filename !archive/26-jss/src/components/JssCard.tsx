import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  card: {
    padding: 20,
    borderRadius: 16,
    color: '#fff',
    background: (props: { accent: string }) => props.accent,
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
})

const JssCard = ({ accent, name }: { accent: string; name: string }) => {
  const classes = useStyles({ accent })
  return <div className={classes.card}>{name}</div>
}

export default JssCard
