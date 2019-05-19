import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FeedbackForm from './feedback-form';

const styles = {
	headline: {
		textAlign: 'center',
		marginBottom: 20,
		fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
	},
	paragraph: {
		textAlign: 'center',
		marginBottom: 20,
		color: '#999',
		fontSize: '1.2em',
		fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
	},
};

const FeedbackGenerator = ({ classes }) => (
	<>
		<Typography
			className={classes.headline}
			gutterBottom
			variant="h3"
			component="h1"
		>
			FeedleMe
		</Typography>
		<Typography className={classes.paragraph} component="p">
			The result of this form is just available for four hours and will be
			deleted.
		</Typography>
		<Typography className={classes.paragraph} component="p">
			Insert the information below and create your own feedback page. It's very
			simple complete the form below, you will get an email with the url for the
			feedback form and after four hours you will get the resume/summary of the
			feedbackform.
		</Typography>
		<FeedbackForm />
	</>
);

export default withStyles(styles)(FeedbackGenerator);
