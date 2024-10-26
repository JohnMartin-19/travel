

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import About from "./components/AboutUs";
import Service from "./components/Services";
import Community from './components/Community'
import SignUp from "./components/SignUp";
import LandingPage from "./components/landing";
import Contact from "./components/Contact";
import SignIn from './components/signIn'
function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/services"
					element={<Service />}
				/>
				<Route path="/community" element={<Community />}/>
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/>
				<Route
					path="/sign-in"
					element={<SignIn />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
