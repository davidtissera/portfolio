import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button, FieldText, FieldSelect } from '../shared/Components/Atoms';
import { Table, NavigationMenu } from '../shared/Components/Molecules';

const Sandbox = () => {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Atomic components</Typography>
          <Button />
          <FieldText />
          <FieldSelect />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Molecules components</Typography>
          <Table />
          <NavigationMenu />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sandbox;
