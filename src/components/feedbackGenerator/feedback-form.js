import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

function validEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

const styles = {
	container: {
		marginTop: 40,
		padding: '20px',
		boxShadow:
			'0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
	},
	form: {
		padding: '30px 30px',
		margin: '0 auto',
		textAlign: 'center',
	},
	fieldset: {
		display: 'block',
		marginBottom: 20,
	},
	radioGroup: {
		display: 'block',
	},
	radioLabel: {
		display: 'block',
		textAlign: 'center',
		alignSelf: 'center',
	},
	paragraphColor: {
		color: 'rgba(0, 0, 0, 0.54)',
	},
	textField: {
		width: '100%',
	},
	fontIcon: {
		fontSize: 32,
		paddingRight: 10,
		color: '#4caf50',
	},
	blue: {
		color: 'blue',
	},
	red: {
		color: 'red',
	},
	dense: {
		marginTop: 16,
	},
	menu: {
		width: 200,
	},
	button: {
		marginTop: 20,
	},
};

const FeedbackForm = ({ classes }) => {
	const [title, setTitle] = useState('');
	const [mode, setMode] = useState('mode1');
	const [email, setEmail] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [formSend, setFormSend] = useState(false);

	const validateForm = () => {
		let error, errorTitle, errorEmail;

		if (title === '' || title.length < 3) {
			errorTitle = true;
			setTitleError(true);
		} else {
			errorTitle = false;
			setTitleError(false);
		}
		if (!validEmail(email)) {
			errorEmail = true;
			setEmailError(true);
		} else {
			errorEmail = false;
			setEmailError(false);
		}

		if (!errorEmail && !errorTitle) {
			error = false;
		} else {
			error = true;
		}

		return error;
	};

	const onFormSubmit = e => {
		e.preventDefault();
		const error = validateForm();
		console.log('onFormSubmit');
		if (!error) {
			console.log('no error, continue!');
		}
	};

	return (
		<div className={classes.container}>
			<form
				className={classes.form}
				noValidate
				autoComplete="off"
				onSubmit={e => onFormSubmit(e)}
			>
				<Grid container spacing={24}>
					<Grid item xs={12} sm={6}>
						<FormControl component="fieldset" className={classes.fieldset}>
							<FormLabel component="legend">
								Define your Feedback Title
							</FormLabel>
							<TextField
								error={titleError ? true : false}
								id="title"
								label="Feedback Title"
								value={title}
								className={classes.textField}
								onChange={e => setTitle(e.target.value)}
								onBlur={() => validateForm()}
								margin="normal"
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl component="fieldset" className={classes.fieldset}>
							<FormLabel component="legend">
								Your E-Mail for the link and the resume
							</FormLabel>
							<TextField
								error={emailError ? true : false}
								id="email"
								label="E-Mail"
								value={email}
								className={classes.textField}
								onChange={e => setEmail(e.target.value)}
								onBlur={() => validateForm()}
								margin="normal"
							/>
						</FormControl>
					</Grid>
				</Grid>
				<FormControl component="fieldset" className={classes.fieldset}>
					<FormLabel component="legend">Which mode do you want?</FormLabel>
					<RadioGroup
						aria-label="mode"
						name="mode"
						className={classes.radioGroup}
						value={mode}
						onChange={e => setMode(e.target.value)}
					>
						<FormControlLabel
							value="mode1"
							control={<Radio color="primary" />}
							className={classes.radioLabel}
							label={
								<>
									<i className={`${classes.fontIcon} fas fa-smile`} />
									<i
										className={`${classes.fontIcon} ${
											classes.red
										} fas fa-frown`}
									/>
									<p className={classes.paragraphColor}>good/bad</p>
								</>
							}
						/>
						<FormControlLabel
							value="mode2"
							control={<Radio color="primary" />}
							className={classes.radioLabel}
							label={
								<>
									<i className={`${classes.fontIcon} fas fa-grin-beam`} />
									<i className={`${classes.fontIcon} fas fa-smile`} />
									<i
										className={`${classes.fontIcon} ${classes.blue} fas fa-meh`}
									/>
									<i
										className={`${classes.fontIcon} ${
											classes.red
										} fas fa-frown`}
									/>
									<i
										className={`${classes.fontIcon} ${
											classes.red
										} fas fa-angry`}
									/>
									<p className={classes.paragraphColor}>
										very good/good/ok/bad/very bad
									</p>
								</>
							}
						/>
						<FormControlLabel
							value="mode3"
							control={<Radio color="primary" />}
							className={classes.radioLabel}
							label={
								<>
									<i className={`${classes.fontIcon} fas fa-grin-beam`} />
									<i className={`${classes.fontIcon} fas fa-smile`} />
									<i
										className={`${classes.fontIcon} ${classes.blue} fas fa-meh`}
									/>
									<i
										className={`${classes.fontIcon} ${
											classes.red
										} fas fa-frown`}
									/>
									<i
										className={`${classes.fontIcon} ${
											classes.red
										} fas fa-angry`}
									/>
									<p className={classes.paragraphColor}>
										very good/good/ok/bad/very bad
									</p>
								</>
							}
						/>
					</RadioGroup>
				</FormControl>
				<div>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.button}
					>
						Start and send me the link
					</Button>
				</div>
			</form>
		</div>
	);
};

FeedbackForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackForm);
