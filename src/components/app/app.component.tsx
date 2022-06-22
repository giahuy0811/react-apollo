import React from 'react';
import './app.component.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../../pages/login';
import Home from '../../pages/home';
import CMS from '../../pages/cms';


const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/cms' element={<CMS />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
