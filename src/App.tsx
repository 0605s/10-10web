import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ExperimentMain from 'pages/Experiment/ExperimentMain';
import Header from 'components/Header';
import { observer, useObserver } from 'mobx-react';
import { Box, Snackbar, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import People from 'pages/People';
import EventsNews from 'pages/EventsNews';
import ResearchProjects from 'pages/ResearchProjects';
import Contact from 'pages/Contact';
import Footer from 'components/Footer';
import useStore from 'store/Index';
import ExperimentDetail from 'pages/Experiment/ExperimentDetail';

const theme = createTheme({
	typography: {
		fontFamily: 'YoonGothic',
	},
});

const App = observer(() => {
	const { ToastStore } = useStore();

	return useObserver(() => (
		<ThemeProvider theme={theme}>
			<Header />
			<Box sx={{ flex: 1, minHeight: '100vh' }}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/experiment" exact component={ExperimentMain} />
					<Route path="/experiment/:id" exact component={ExperimentDetail} />
					<Route path="/people" exact component={People} />
					<Route path="/event" exact component={EventsNews} />
					<Route path="/research" exact component={ResearchProjects} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/login" exact component={Login} />
					<Redirect to="/" />
				</Switch>
			</Box>
			<Footer />
			{/* <Snackbar
				anchorOrigin={{ vertical, horizontal }}
				autoHideDuration={6000}
				open={ToastStore.isOpen}
				onClose={handleClose}
				message={ToastStore.text}
				key={ToastStore.text}
				TransitionComponent="SlideTransition"
			/> */}
		</ThemeProvider>
	));
});

export default App;