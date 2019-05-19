import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FeedbackGenerator from './components/feedbackGenerator/feedback-generator';
import '@fortawesome/fontawesome-free/css/all.css';

const styles = {
	app: {
		maxWidth: 960,
		margin: '50px auto',
		padding: '0 20px',
	},
};

const App = ({ classes }) => {
	return (
		<div className={classes.app}>
			<FeedbackGenerator />
		</div>
	);
};

export default withStyles(styles)(App);
